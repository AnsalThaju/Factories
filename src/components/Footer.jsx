import { Link } from 'react-router-dom'
import { Zap, MapPin, Phone, Mail, Globe, Shield } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  // { label: 'About Us', to: '/about' },
  // { label: 'Services', to: '/services' },
  // { label: 'Projects', to: '/projects' },
  // { label: 'Technology', to: '/technology' },
  // { label: 'Contact', to: '/contact' },
]

const services = [
  'Solar Grid Systems',
  'Solar Street Lighting',
  'Battery Storage',
  'CCTV Systems',
  'Smart Monitoring',
  'Energy Export',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="p-1.5 rounded-lg" style={{ backgroundColor: 'color-mix(in srgb, var(--neon-green) 10%, transparent)' }}>
                <Zap size={20} style={{ color: 'var(--neon-green)' }} />
              </span>
              <span className="font-bold text-lg">
                <span className="gradient-text">Factoris</span>
                <span className="font-light ml-1 text-sm" style={{ color: 'var(--text-3)' }}>Solutions</span>
              </span>
            </Link>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
              FACTORIS SOLUTIONS LLP.
            </p>

            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
              Smart Energy for a Sustainable Future. Kerala-based renewable energy and smart technology company.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--neon-green)' }}>
              <Shield size={14} style={{ color: 'var(--neon-green)' }} />
              ISO 9001:2015 Certified
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-1)' }}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm transition-colors duration-200 flex items-center gap-1 hover:opacity-90"
                    style={{ color: 'var(--text-2)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-green)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                  >
                    <span style={{ color: 'var(--neon-green)' }}>›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-1)' }}>Services</h3>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s} className="text-sm flex items-center gap-1" style={{ color: 'var(--text-2)' }}>
                  <span style={{ color: 'var(--neon-blue)' }}>›</span> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-1)' }}>Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--neon-green)' }} />
                {/* <span>Mannam Plaza Building, Monnappalam, Thrissur, Kerala – 680585, India</span> */}
                <span> 4/313, Muhammed Haji OPP Govt:UP School PERINJANAM , PERINJANAM MATHILAKAM , NH 17 THRISSUR , KERALA 680686 India</span>

              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                <Phone size={15} style={{ color: 'var(--neon-green)' }} />
                <a href="tel:+91 9946359797" className="hover:opacity-80 transition-opacity">+91 9946359797</a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                <Mail size={15} style={{ color: 'var(--neon-green)' }} />
                <a href="mailto:iitdsstcr@gmail.com" className="hover:opacity-80 transition-opacity">iitdsstcr@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                <Globe size={15} style={{ color: 'var(--neon-green)' }} />
                <a href="http://www.factoris.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">www.factoris.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} Factoris Solutions LLP. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-3)' }}>
            Developed by<span style={{ color: 'var(--text-2)' }}>: Stellar Technologies</span> · Ernakulam, Kerala
          </p>

          <p className="text-xs" style={{ color: 'var(--text-2)' }}>
            Contact: <span style={{ color: 'var(--text-2)' }}>stellartechnologies24@gmail.com || +91 7222888225</span>
          </p>

        </div>
      </div>
    </footer>
  )
}
