import { Reveal } from './Reveal'

const stats = [
  { value: '250+', label: 'Gegenereerde opdrachten' },
  { value: '4.8/5', label: 'Gemiddelde klantbeoordeling' },
  { value: '3x', label: 'Meer leads binnen 90 dagen' },
  { value: '92%', label: 'Klantbehoud' },
]

export function Benefits() {
  return (
    <section id="resultaten" className="py-24 lg:py-32 bg-ink relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wood/5 rounded-full blur-3xl" />

      <div className="relative container-section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-wood font-semibold text-sm uppercase tracking-wider">
              Resultaten
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Resultaten die ertoe doen
            </h2>
            <p className="text-lg text-white/60">
              Cijfers die spreken — wij laten resultaat zien, geen beloftes.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="font-heading text-5xl lg:text-6xl font-bold text-wood mb-3">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
