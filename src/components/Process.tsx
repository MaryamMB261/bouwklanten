import { Reveal } from './Reveal'

const steps = [
  {
    num: '01',
    title: 'Kennismaking & analyse',
    text: 'We leren uw bedrijf kennen, begrijpen uw doelen en analyseren de lokale markt en concurrentie.',
  },
  {
    num: '02',
    title: 'Strategie & planning',
    text: 'We ontwikkelen een op maat gemaakte strategie met duidelijke doelen en een realistische planning.',
  },
  {
    num: '03',
    title: 'Uitvoering & optimalisatie',
    text: 'We lanceren campagnes, bouwen uw website uit en optimaliseren continu op basis van data.',
  },
  {
    num: '04',
    title: 'Rapportage & groei',
    text: 'U ontvangt inzichtelijke rapportages en wij schalen wat werkt voor blijvend resultaat.',
  },
]

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-ink" />

      <div className="relative container-section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-wood font-semibold text-sm uppercase tracking-wider">
              Werkwijze
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Zo werken wij
            </h2>
            <p className="text-lg text-white/60">
              Een transparant proces van kennismaking tot continue groei.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
              <div className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-white/10" />
                )}
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-wood/10 border border-wood/30 flex items-center justify-center mb-5">
                    <span className="font-heading text-2xl font-bold text-wood">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/55 leading-relaxed text-sm">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
