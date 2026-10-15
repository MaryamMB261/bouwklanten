import { useState, useEffect } from 'react'
import { Menu, X, Hammer } from 'lucide-react'

const navLinks = [
  { label: 'Hoe het werkt', href: '#hoe-het-werkt' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Resultaten', href: '#resultaten' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-section">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 text-white">
            <div className="w-9 h-9 rounded-lg bg-wood flex items-center justify-center">
              <Hammer className="w-5 h-5 text-ink" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">Bouwklanten</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-wood text-ink font-semibold text-sm hover:bg-wood-light transition-colors"
            >
              Gratis gesprek
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink border-t border-white/10">
          <nav className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-white py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center py-2.5 rounded-lg bg-wood text-ink font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Gratis gesprek
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
