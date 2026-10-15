import { BeforeAfterSlider } from './BeforeAfterSlider'
import { Reveal } from './Reveal'
import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-ink pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-charcoal/40" />

      <div className="relative container-section pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/90 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-wood animate-pulse" />
                Lead generation voor bouwbedrijven
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Wij vullen uw agenda met gekwalificeerde opdrachten
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
                Bouwklanten helpt bouw- en verbouwbedrijven aan een constante stroom
                van nieuwe klanten. Geen koude acquisitie, maar warme leads die klaar
                staan om te bouwen.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-wood text-ink font-semibold text-base hover:bg-wood-light transition-all hover:scale-[1.02] shadow-lg shadow-wood/20"
                >
                  Plan een gratis gesprek
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#hoe-het-werkt"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all"
                >
                  Bekijk onze aanpak
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-wood text-wood" />
                  ))}
                </div>
                <div className="text-sm text-white/60">
                  <span className="font-semibold text-white">4.8/5</span> — 120+ tevreden
                  bouwers
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: before/after slider */}
          <Reveal delay={300}>
            <div className="relative">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              />
              <p className="text-center text-white/50 text-sm mt-4">
                Sleep de schuif en zie het verschil
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
