import { useRef, useState, useCallback } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl shadow-black/40 ring-1 ring-white/10 touch-pan-x"
    >
      {/* After (bottom layer) */}
      <img
        src={afterImage}
        alt="Na verbouwing"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before (top layer, clipped) */}
      <img
        src={beforeImage}
        alt="Tijdens verbouwing"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider pointer-events-none">
        Voor
      </span>
      <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-wood/90 text-ink text-xs font-semibold uppercase tracking-wider pointer-events-none">
        Na
      </span>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-0 bottom-0 w-0.5 bg-white -translate-x-1/2 shadow-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
          <ChevronsLeftRight className="w-5 h-5 text-ink" />
        </div>
      </div>
    </div>
  )
}
