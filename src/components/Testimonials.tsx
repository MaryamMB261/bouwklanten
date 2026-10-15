import { Reveal } from './Reveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Sinds we met Bouwklanten werken, hoeven we niet meer zelf te bellen voor nieuwe opdrachten. Onze agenda zit vol.',
    name: 'Jeroen van den Berg',
    role: 'Eigenaar, Van den Berg Bouw',
  },
  {
    quote:
      'De kwaliteit van de leads is enorm hoog. We sluiten nu 1 op 3 aanvragen af, in plaats van 1 op 10.',
    name: 'Lisa Jansen',
    role: 'Marketingmanager, Jansen Renovatie',
  },
  {
    quote:
      'Bouwklanten denkt met ons mee. Ze begrijpen de bouwsector en leveren resultaat, maand na maand.',
    name: 'Mark de Vries',
    role: 'Directeur, De Vries Aannemers',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container-section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-wood-dark font-semibold text-sm uppercase tracking-wider">
              Klanten
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mt-3 mb-4">
              Wat onze klanten zeggen
            </h2>
            <p className="text-lg text-ink/60">
              Bouwbedrijven die groeien met Bouwklanten.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 h-full border border-ink/5 shadow-sm flex flex-col">
                <Quote className="w-10 h-10 text-wood/30 mb-4" />
                <p className="text-ink/80 leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-ink/5">
                  <div className="w-11 h-11 rounded-full bg-charcoal flex items-center justify-center text-wood font-heading font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm">{t.name}</div>
                    <div className="text-ink/50 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
