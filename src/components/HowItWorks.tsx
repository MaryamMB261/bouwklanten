import { Reveal } from './Reveal'
import { Search, Globe, MousePointerClick, CalendarCheck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'We vinden uw ideale klanten',
    text: 'We analyseren uw markt en identificeren huiseigenaren die actief zoeken naar bouw- en verbouwdiensten in uw regio.',
  },
  {
    icon: Globe,
    title: 'We bouwen uw online zichtbaarheid',
    text: 'Met een geoptimaliseerde website, lokale SEO en gerichte advertenties zorgen we dat u gevonden wordt door de juiste mensen.',
  },
  {
    icon: MousePointerClick,
    title: 'We converteren bezoekers naar leads',
    text: 'Uw website en campagnes zijn ontworpen om bezoekers te converteren in gekwalificeerde aanvragen die klaar staan om te bouwen.',
  },
  {
    icon: CalendarCheck,
    title: 'U bouwt, wij vullen uw agenda',
    text: 'U ontvangt warme leads direct in uw mailbox en agenda. Wij optimaliseren continu voor meer en beter resultaat.',
  },
]

export function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="py-24 lg:py-32 bg-cream">
      <div className="container-section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-wood-dark font-semibold text-sm uppercase tracking-wider">
              Onze methode
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mt-3 mb-4">
              Hoe wij klanten genereren
            </h2>
            <p className="text-lg text-ink/60">
              Een bewezen methode die bouwbedrijven aan een constante stroom van
              opdrachten helpt.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative bg-white rounded-2xl p-8 h-full border border-ink/5 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-ink/5 select-none">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-charcoal flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-wood" />
                </div>
                <h3 className="font-heading font-bold text-lg text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-ink/60 leading-relaxed text-sm">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
