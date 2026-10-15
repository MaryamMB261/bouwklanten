import { Hammer, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'

const serviceLinks = [
  'Lead Generation',
  'Website & SEO',
  'Google Ads',
  'Social Media',
  'Content Marketing',
  'Conversie Optimalisatie',
]

const companyLinks = ['Hoe het werkt', 'Diensten', 'Resultaten', 'FAQ', 'Contact']

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-section py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-wood flex items-center justify-center">
                <Hammer className="w-5 h-5 text-ink" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Bouwklanten
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Dé lead generation partner voor bouw- en verbouwbedrijven in
              Nederland. Wij vullen uw agenda met gekwalificeerde opdrachten.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-wood hover:text-ink flex items-center justify-center transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/80 mb-5">
              Diensten
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#diensten"
                    className="text-white/50 hover:text-wood text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/80 mb-5">
              Bedrijf
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/50 hover:text-wood text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/80 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-wood flex-shrink-0" />
                info@bouwklanten.nl
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-wood flex-shrink-0" />
                020 123 4567
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-wood flex-shrink-0" />
                Amsterdam, Nederland
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Bouwklanten. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacybeleid
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
