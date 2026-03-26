import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Home', to: '/' },
  // { label: 'About', to: '/about' },
  // { label: 'Services', to: '/services' },
  // { label: 'Projects', to: '/projects' },
  // { label: 'Technology', to: '/technology' },
  // { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 var(--border)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="p-1.5 rounded-lg transition-colors"
            style={{ backgroundColor: 'color-mix(in srgb, var(--neon-green) 10%, transparent)' }}>
            <Zap size={20} style={{ color: 'var(--neon-green)' }} />
          </span>
          <span className="font-bold text-lg tracking-tight">
            <span className="gradient-text">Factoris</span>
            <span className="font-light ml-1 text-sm" style={{ color: 'var(--text-2)' }}>Solutions</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? 'var(--neon-green)' : 'var(--text-2)',
                    backgroundColor: isActive ? 'color-mix(in srgb, var(--neon-green) 10%, transparent)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.target.style.color = 'var(--neon-green)'
                      e.target.style.backgroundColor = 'color-mix(in srgb, var(--neon-green) 5%, transparent)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.target.style.color = 'var(--text-2)'
                      e.target.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right: Theme Toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none flex-shrink-0"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, #1a1a2e, #16213e)'
                : 'linear-gradient(135deg, #e0f0ff, #f0f8ff)',
              border: '1.5px solid',
              borderColor: isDark ? 'var(--neon-blue)' : 'var(--neon-blue)',
              boxShadow: isDark ? '0 0 10px rgba(0,136,255,0.3)' : '0 0 10px rgba(0,96,208,0.2)',
            }}
          >
            <motion.div
              layout
              className="absolute top-0.5 w-5.5 h-5.5 rounded-full flex items-center justify-center"
              animate={{ left: isDark ? '3px' : '29px' }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              style={{
                width: '22px',
                height: '22px',
                backgroundColor: isDark ? 'var(--neon-blue)' : '#f59e0b',
                boxShadow: isDark ? '0 0 6px rgba(0,136,255,0.8)' : '0 0 6px rgba(245,158,11,0.8)',
              }}
            >
              {isDark
                ? <Moon size={12} color="#fff" />
                : <Sun size={12} color="#fff" />
              }
            </motion.div>
          </button>

          {/* Get Quote CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 neon-glow-green"
            style={{ backgroundColor: 'var(--neon-green)', color: '#0a0a0a' }}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg transition-colors"
            style={{ color: 'var(--text-2)', border: '1px solid var(--border)' }}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md transition-colors"
            style={{ color: 'var(--text-2)' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map(link => {
                const isActive = location.pathname === link.to
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                      style={{
                        color: isActive ? 'var(--neon-green)' : 'var(--text-2)',
                        backgroundColor: isActive ? 'color-mix(in srgb, var(--neon-green) 10%, transparent)' : 'transparent',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="block text-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={{ backgroundColor: 'var(--neon-green)', color: '#0a0a0a' }}
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
