import { Reveal } from './Reveal'
import {
  Target,
  Globe,
  Search,
  Share2,
  FileText,
  TrendingUp,
} from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Lead Generation',
    text: 'Gerichte campagnes die gekwalificeerde leads opleveren, klaar om te bouwen.',
  },
  {
    icon: Globe,
    title: 'Website & SEO',
    text: 'Een snelle, converterende website die bezoekers aantrekt en omzet in klanten.',
  },
  {
    icon: Search,
    title: 'Google Ads',
    text: 'Versnel uw zichtbaarheid en haal direct meetbaar resultaat uit zoekmachines.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    text: 'Bouw een sterke online aanwezigheid en bereik uw ideale klanten op social media.',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    text: 'Toon uw expertise, win vertrouwen en word de autoriteit in uw regio.',
  },
  {
    icon: TrendingUp,
    title: 'Conversie Optimalisatie',
    text: 'Haal meer uit uw bestaande verkeer met data-gedreven optimalisatie.',
  },
]

export function Services() {
  return (
    <section id="diensten" className="py-24 lg:py-32 bg-white">
      <div className="container-section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-wood-dark font-semibold text-sm uppercase tracking-wider">
              Diensten
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mt-3 mb-4">
              Alles voor online groei
            </h2>
            <p className="text-lg text-ink/60">
              Een compleet pakket om online gevonden te worden en meer opdrachten te
              winnen.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group bg-cream rounded-2xl p-8 h-full border border-ink/5 hover:border-wood/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-charcoal group-hover:bg-wood flex items-center justify-center mb-5 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-wood group-hover:text-ink transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-xl text-ink mb-3">
                  {service.title}
                </h3>
                <p className="text-ink/60 leading-relaxed">{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
