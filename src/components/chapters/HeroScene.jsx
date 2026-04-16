import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * HeroScene: AZ Symbol Woven Light
 * ---------------------------------
 * Raw THREE.js implementation. Pixel-samples public/Astrazeneca-Symbol.png
 * to define the particle attractor shape, then applies the Woven Light
 * fluid physics (mouse repulsion, velocity integration, damping, return
 * force) to 80,000 additive-blended particles.
 *
 *  - Colors: gold #F5A623 cores · amber #E8870A mid · white-hot #FFFFF0 centers
 *  - Tiny particles (0.008) with sizeAttenuation
 *  - Per-particle breathing at individual frequencies
 *  - Warm amber fog, warm radial glow behind the symbol
 *  - Camera micro-breathing pulse
 */

const PARTICLE_COUNT = 82_000
const SAMPLE_IMAGE_SIZE = 260

// Load image once (async) and sample non-transparent pixels.
function sampleSymbolPositions(baseUrl) {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = `${baseUrl}Astrazeneca-Symbol.png`
    img.onload = () => {
      const SIZE = SAMPLE_IMAGE_SIZE
      const ratio = img.width / img.height
      const w = ratio >= 1 ? SIZE : Math.round(SIZE * ratio)
      const h = ratio >= 1 ? Math.round(SIZE / ratio) : SIZE

      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      ctx.drawImage(img, 0, 0, w, h)
      const { data } = ctx.getImageData(0, 0, w, h)

      const samples = []
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4
          if (data[i + 3] < 40) continue
          const brightness =
            (data[i] + data[i + 1] + data[i + 2]) / (3 * 255)
          samples.push({ x, y, brightness })
        }
      }

      // Monumental scale: symbol dominates the viewport (Woven-Light feel)
      const SCALE = 7.2
      const wMax = Math.max(w, h)
      const base = samples.map((p) => {
        const nx = (p.x / w - 0.5) * SCALE * (w / wMax)
        const ny = -(p.y / h - 0.5) * SCALE * (h / wMax)
        return { x: nx, y: ny, brightness: p.brightness }
      })

      resolve({ base, imgW: w, imgH: h })
    }
    img.onerror = () => resolve({ base: [], imgW: 0, imgH: 0 })
  })
}

export default function HeroScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let disposed = false
    let frameId = 0
    let renderer, scene, camera, points, geometry, material
    let positions, originalPositions, velocities, phases, frequencies, amplitudes

    const mouse = new THREE.Vector2(-10, -10)
    const mouseWorld = new THREE.Vector3()
    const clock = new THREE.Clock()

    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const setup = async () => {
      const sampled = await sampleSymbolPositions(import.meta.env.BASE_URL)
      if (disposed || sampled.base.length === 0) return

      scene = new THREE.Scene()
      // Warm amber fog fades particles into the backdrop
      scene.fog = new THREE.FogExp2(0x2a1a08, 0.08)

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      )
      camera.position.set(0, 0, 3.5)

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0) // transparent: CSS glow shows through
      mount.appendChild(renderer.domElement)

      // --- Build particle attributes ---
      positions = new Float32Array(PARTICLE_COUNT * 3)
      originalPositions = new Float32Array(PARTICLE_COUNT * 3)
      velocities = new Float32Array(PARTICLE_COUNT * 3)
      phases = new Float32Array(PARTICLE_COUNT)
      frequencies = new Float32Array(PARTICLE_COUNT)
      amplitudes = new Float32Array(PARTICLE_COUNT)
      const colors = new Float32Array(PARTICLE_COUNT * 3)

      const GOLD = new THREE.Color('#F5A623')
      const AMBER = new THREE.Color('#E8870A')
      const WHITE_HOT = new THREE.Color('#FFFFF0')

      const base = sampled.base
      const baseLen = base.length

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Pick a random pixel from the shape, add a tiny jitter so repeated
        // picks don't stack on the same point.
        const p = base[Math.floor(Math.random() * baseLen)]
        const jitterR = 0.04
        const jx = (Math.random() - 0.5) * jitterR
        const jy = (Math.random() - 0.5) * jitterR
        const jz = (Math.random() - 0.5) * 0.25
        const x = p.x + jx
        const y = p.y + jy
        const z = jz + (p.brightness - 0.5) * 0.4

        const idx = i * 3
        positions[idx] = x
        positions[idx + 1] = y
        positions[idx + 2] = z
        originalPositions[idx] = x
        originalPositions[idx + 1] = y
        originalPositions[idx + 2] = z

        // Color stratification
        // 10% white-hot (bright pixels biased higher), 30% amber, 60% gold
        const roll = Math.random()
        let col
        if (roll > 0.9 && p.brightness > 0.4) col = WHITE_HOT
        else if (roll > 0.6) col = AMBER
        else col = GOLD

        // Slight per-particle warmth variance
        const c = col.clone()
        c.offsetHSL(0, 0, (Math.random() - 0.5) * 0.06)
        colors[idx] = c.r
        colors[idx + 1] = c.g
        colors[idx + 2] = c.b

        phases[i] = Math.random() * Math.PI * 2
        frequencies[i] = 0.25 + Math.random() * 1.1
        amplitudes[i] = 0.015 + Math.random() * 0.04
      }

      geometry = new THREE.BufferGeometry()
      geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      )
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      material = new THREE.PointsMaterial({
        size: 0.008,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })

      points = new THREE.Points(geometry, material)
      scene.add(points)

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', handleResize)

      animate()
    }

    const handleResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      if (!renderer || !scene || !camera) return

      const t = clock.getElapsedTime()

      // Mouse in world space (approx: same mapping as reference)
      mouseWorld.set(mouse.x * 3, mouse.y * 3, 0)

      // Per-frame rotation like reference
      points.rotation.y = t * 0.05
      // Gentle X wobble
      points.rotation.x = Math.sin(t * 0.15) * 0.08

      // Camera breathing pulse: micro-movement at close range
      camera.position.z = 3.5 + Math.sin(t * 0.35) * 0.2
      camera.position.x = Math.sin(t * 0.18) * 0.08
      camera.position.y = Math.cos(t * 0.22) * 0.06
      camera.lookAt(0, 0, 0)

      // Rotate mouse point into local particle space (account for points.rotation.y)
      // so repulsion feels consistent from screen.
      const cosY = Math.cos(-points.rotation.y)
      const sinY = Math.sin(-points.rotation.y)
      const mwX = mouseWorld.x * cosY - mouseWorld.z * sinY
      const mwZ = mouseWorld.x * sinY + mouseWorld.z * cosY
      const mwY = mouseWorld.y

      // Gentle ripple physics: a soft touch, not an aggressive scatter
      const count = PARTICLE_COUNT
      const REPEL_RADIUS = 1.2
      const REPEL_STRENGTH = 0.008
      const RETURN_FORCE = 0.0016
      const DAMPING = 0.94

      for (let i = 0; i < count; i++) {
        const ix = i * 3
        const iy = ix + 1
        const iz = ix + 2

        // Breathing target: orig + sin-based offset (per-particle frequency)
        const ph = phases[i]
        const fr = frequencies[i]
        const am = amplitudes[i]
        const breathe = Math.sin(t * fr + ph) * am
        // Radial breathing: pulse out from origin
        const ox = originalPositions[ix]
        const oy = originalPositions[iy]
        const oz = originalPositions[iz]
        const len = Math.hypot(ox, oy, oz) || 1
        const targetX = ox * (1 + breathe / len)
        const targetY = oy * (1 + breathe / len)
        const targetZ = oz + Math.sin(t * fr * 0.7 + ph) * am * 0.5

        const px = positions[ix]
        const py = positions[iy]
        const pz = positions[iz]

        let vx = velocities[ix]
        let vy = velocities[iy]
        let vz = velocities[iz]

        // Mouse repulsion
        const dx = px - mwX
        const dy = py - mwY
        const dz = pz - mwZ
        const distSq = dx * dx + dy * dy + dz * dz
        if (distSq < REPEL_RADIUS * REPEL_RADIUS) {
          const dist = Math.sqrt(distSq) || 0.0001
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_STRENGTH
          vx += (dx / dist) * force
          vy += (dy / dist) * force
          vz += (dz / dist) * force
        }

        // Return toward breathing target
        vx += (targetX - px) * RETURN_FORCE
        vy += (targetY - py) * RETURN_FORCE
        vz += (targetZ - pz) * RETURN_FORCE

        // Damping
        vx *= DAMPING
        vy *= DAMPING
        vz *= DAMPING

        velocities[ix] = vx
        velocities[iy] = vy
        velocities[iz] = vz

        positions[ix] = px + vx
        positions[iy] = py + vy
        positions[iz] = pz + vz
      }

      geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    setup()

    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (renderer) {
        if (mount && renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement)
        }
        renderer.dispose()
      }
      if (geometry) geometry.dispose()
      if (material) material.dispose()
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Warm radial glow backdrop behind the symbol */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(245,166,35,0.32) 0%, rgba(232,135,10,0.18) 28%, rgba(131,0,81,0.0) 60%), radial-gradient(circle at 50% 50%, #830051 0%, #5C0039 70%, #3C1053 100%)',
        }}
      />
      {/* Secondary warm core */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle 40% at 50% 50%, rgba(255,255,240,0.08), transparent 55%)',
          mixBlendMode: 'screen',
        }}
      />
      <div ref={mountRef} className="absolute inset-0" />
    </div>
  )
}
