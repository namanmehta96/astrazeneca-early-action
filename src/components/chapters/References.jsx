const references = [
  { author: 'AstraZeneca. (2024).', title: 'Investor Day, 21 May 2024.', pub: 'AstraZeneca PLC.' },
  { author: 'AstraZeneca. (2024).', title: 'Sustainability Data Annex 2024.', pub: 'AstraZeneca PLC.' },
  { author: 'AstraZeneca. (2025).', title: 'FY2025 Full Year Results.', pub: 'AstraZeneca PLC.' },
  { author: 'Collaco, B.G. et al. (2026).', title: 'The role of agentic artificial intelligence in healthcare: a scoping review.', pub: 'npj Digital Medicine. https://doi.org/10.1038/s41746-026-02517-5' },
  { author: 'European Commission. (2024).', title: 'Regulation (EU) 2024/1689 on Artificial Intelligence (EU AI Act).', pub: 'Official Journal of the European Union.' },
  { author: 'European Council. (2022).', title: 'Council Recommendation on cancer screening.', pub: 'European Union.' },
  { author: 'European Medicines Agency. (2024).', title: 'Reflection Paper on the Use of Artificial Intelligence in the Medicinal Product Lifecycle.', pub: 'EMA.' },
  { author: 'Garcia-Gonzalez, C., et al. (2024).', title: 'MILTON: multi-disease prediction from UK Biobank.', pub: 'Nature Genetics.' },
  { author: 'Heyndrickx, W., et al. (2023).', title: 'MELLODDY: federated learning across ten pharmaceutical companies.', pub: 'Journal of Chemical Information and Modeling.' },
  { author: 'IMD. (2025).', title: 'Future Readiness Indicator: Pharmaceuticals.', pub: 'IMD Business School, Lausanne.' },
  { author: 'Kim, W. C., and Mauborgne, R. (2005).', title: 'Blue Ocean Strategy.', pub: 'Harvard Business Review Press.' },
  { author: 'Loeffler, H. H., et al. (2024).', title: 'REINVENT 4: modern AI for generative chemistry.', pub: 'Journal of Cheminformatics.' },
  { author: 'Lung Ambition Alliance. (2019).', title: 'Founding press release, 8 July 2019.', pub: 'IASLC.' },
  { author: 'Median Technologies. (2026).', title: 'FDA 510(k) clearance for eyonis LCS, February 2026.', pub: 'Median Technologies.' },
  { author: 'NHS England. (2026).', title: 'Optellum end-to-end lung cancer pathway pilot, January 2026.', pub: 'NHS England.' },
  { author: 'Olawade, D. B., et al. (2026).', title: 'AI-assisted clinical trial recruitment.', pub: 'International Journal of Medical Informatics.' },
  { author: 'Osterwalder, A., and Pigneur, Y. (2010).', title: 'Business Model Generation.', pub: 'John Wiley and Sons.' },
  { author: 'Pati, A.K. (2025).', title: 'Agentic AI: A Comprehensive Survey of Technologies, Applications, and Societal Implications.', pub: 'IEEE Access, 13, 151824–151837.' },
  { author: 'Porter, M. E. (1979).', title: 'How competitive forces shape strategy.', pub: 'Harvard Business Review.' },
  { author: 'Porter, M. E. (1985).', title: 'Competitive Advantage: Creating and Sustaining Superior Performance.', pub: 'Free Press.' },
  { author: 'Sertkaya, A., et al. (2025).', title: 'Costs of drug development.', pub: 'JAMA Network Open.' },
  { author: 'Siegel, R. L., et al. (2025).', title: 'Cancer statistics, 2025.', pub: 'CA: A Cancer Journal for Clinicians.' },
  { author: 'USPSTF. (2021).', title: 'Lung Cancer Screening Recommendation, Grade B.', pub: 'United States Preventive Services Task Force.' },
  { author: 'Wong, C. H., Siah, K. W., and Lo, A. W. (2019).', title: 'Estimation of clinical trial success rates.', pub: 'Biostatistics.' },
  { author: 'Wouters, O. J., McKee, M., and Luyten, J. (2020).', title: 'Estimated R and D investment to bring a new medicine to market.', pub: 'JAMA.' },
]

export default function References() {
  return (
    <section className="az-scroll relative h-full overflow-y-auto bg-az-light px-10 py-14 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 06
        </div>
        <h1 className="mt-4 font-display text-6xl font-bold leading-[1.15] pb-[0.15em] text-az-magenta md:text-7xl">
          References
        </h1>
        <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-az-muted">
          Alphabetical by author
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-7 md:grid-cols-2">
          {references.map((r, i) => (
            <div key={i} className="text-[14px] leading-[1.65] text-az-navy">
              <span className="font-semibold">{r.author}</span>{' '}
              <span className="italic">{r.title}</span>{' '}
              <span className="text-az-charcoal">{r.pub}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-az-border pt-12">
          <img
            src={`${import.meta.env.BASE_URL}astrazeneca-logo-png-astrazeneca-logo-astra-zeneca-4902-2.png`}
            alt="AstraZeneca"
            className="h-10 w-auto"
          />
          <div className="text-center font-mono text-[11px] uppercase tracking-[0.26em] text-az-muted">
            EDHEC Global MBA &nbsp;·&nbsp; Industry Acceleration Project &nbsp;·&nbsp; April 2026
          </div>
        </div>
      </div>
    </section>
  )
}
