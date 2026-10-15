import { useState } from 'react'
import { Reveal } from './Reveal'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Hoe snel zie ik resultaat?',
    a: 'De meeste klanten zien de eerste leads binnen 2-4 weken na lancering. De snelheid hangt af van uw regio, diensten en budget.',
  },
  {
    q: 'Werkt dit voor elk type bouwbedrijf?',
    a: 'Ja. We werken met aannemers, verbouwers, dakdekkers, stukadoors en meer. Onze aanpak passen we toe op uw specifieke vakgebied.',
  },
  {
    q: 'Wat zijn de kosten?',
    a: 'Onze tarieven zijn afhankelijk van uw doelen en de omvang van de campagne. Tijdens het gratis gesprek bespreken we een pakket dat bij u past.',
  },
  {
    q: 'Hoe meten jullie succes?',
    a: 'We werken met heldere KPI\u2019s: aantal leads, kost per lead en omgezetde opdrachten. Maandelijks ontvangt u een transparant rapport.',
  },
  {
    q: 'Zit ik vast aan een langdurig contract?',
    a: 'Nee. We werken met flexibele overeenkomsten. We willen dat u blijft omdat het werkt, niet omdat u moet.',
  },
  {
    q: 'Wat maakt Bouwklanten anders?',
    a: 'We zijn gespecialiseerd in de bouwsector. We begrijpen uw vak, uw klanten en hoe we die twee samenbrengen.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="container-section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-wood-dark font-semibold text-sm uppercase tracking-wider">
              Vragen
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mt-3 mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-lg text-ink/60">
              Antwoorden op de vragen die we het vaakst krijgen.
            </p>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="border border-ink/10 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream/50 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-heading font-semibold text-ink pr-4">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cream flex items-center justify-center">
                    {open === i ? (
                      <Minus className="w-4 h-4 text-wood-dark" />
                    ) : (
                      <Plus className="w-4 h-4 text-wood-dark" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-ink/60 leading-relaxed">
                      {faq.a}
                    </p>
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
