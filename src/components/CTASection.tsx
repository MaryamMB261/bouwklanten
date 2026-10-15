import { Reveal } from './Reveal'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-ink to-charcoal" />

      <div className="relative container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: pitch */}
          <div>
            <Reveal>
              <span className="text-wood font-semibold text-sm uppercase tracking-wider">
                Start vandaag
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
                Klaar om uw agenda te vullen?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
                Plan een gratis, vrijblijvend gesprek. We analyseren uw kansen en
                laten zien hoe wij u kunnen helpen aan meer opdrachten.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="space-y-3">
                {[
                  'Persoonlijk advies op maat',
                  'Analyse van uw huidige online zichtbaarheid',
                  'Concrete actiepunten voor directe groei',
                  'Geen verplichtingen — wij geloven in resultaat',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-wood flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={200}>
            <form
              className="bg-white rounded-2xl p-8 shadow-2xl"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
                btn.textContent = 'Verzonden! We nemen contact op'
                btn.disabled = true
                btn.classList.add('opacity-70')
              }}
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    Naam
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Uw naam"
                    className="w-full px-4 py-3 rounded-lg border border-ink/10 bg-cream/50 focus:outline-none focus:ring-2 focus:ring-wood/40 focus:border-wood transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Uw bedrijf"
                    className="w-full px-4 py-3 rounded-lg border border-ink/10 bg-cream/50 focus:outline-none focus:ring-2 focus:ring-wood/40 focus:border-wood transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink/70 mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="naam@bedrijf.nl"
                      className="w-full px-4 py-3 rounded-lg border border-ink/10 bg-cream/50 focus:outline-none focus:ring-2 focus:ring-wood/40 focus:border-wood transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink/70 mb-1.5">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12345678"
                      className="w-full px-4 py-3 rounded-lg border border-ink/10 bg-cream/50 focus:outline-none focus:ring-2 focus:ring-wood/40 focus:border-wood transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-1.5">
                    Bericht (optioneel)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Vertel ons kort over uw bedrijf en doelen"
                    className="w-full px-4 py-3 rounded-lg border border-ink/10 bg-cream/50 focus:outline-none focus:ring-2 focus:ring-wood/40 focus:border-wood transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-wood text-ink font-semibold text-base hover:bg-wood-light transition-all hover:scale-[1.01] shadow-lg shadow-wood/20"
                >
                  Plan een gratis gesprek
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-sm text-ink/40">
                  Geen verplichtingen. We reageren binnen 24 uur.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
