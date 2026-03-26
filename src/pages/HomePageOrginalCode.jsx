import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Sun, Battery, Camera, ArrowRight, Shield, Globe, TrendingUp, Users } from 'lucide-react'
import { SectionHeader, FadeIn, StatCard } from '../components/UI'

const services = [
  {
    icon: <Sun size={28} />,
    title: 'Solar Grid Systems',
    desc: 'End-to-end solar power grid design, installation and maintenance for residential, commercial and public infrastructure.',
    color: 'green',
  },
  {
    icon: <Zap size={28} />,
    title: 'Solar Street Lighting',
    desc: 'Smart solar-powered street lights with autonomous charging and intelligent dimming for panchayaths and municipalities.',
    color: 'blue',
  },
  {
    icon: <Battery size={28} />,
    title: 'Battery Storage',
    desc: 'Advanced battery energy storage systems (BESS) enabling 24/7 power availability and grid export capability.',
    color: 'green',
  },
  {
    icon: <Camera size={28} />,
    title: 'CCTV Surveillance',
    desc: 'Integrated IP and AI-based surveillance systems for smart and secure communities.',
    color: 'blue',
  },
]

const stats = [
  { value: '100+', label: 'Projects Completed', color: 'green' },
  { value: '50+', label: 'Happy Clients', color: 'blue' },
  { value: '10+', label: 'Years Experience', color: 'green' },
  { value: '5MW+', label: 'Capacity Installed', color: 'blue' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, var(--neon-green), transparent)', opacity: 0.08 }} />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, var(--neon-blue), transparent)', opacity: 0.08 }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
            style={{
              color: 'var(--neon-green)',
              borderColor: 'color-mix(in srgb, var(--neon-green) 30%, transparent)',
              backgroundColor: 'color-mix(in srgb, var(--neon-green) 8%, transparent)'
            }}
          >
            <Shield size={12} /> ISO 9001:2015 Certified Company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ color: 'var(--text-1)' }}
          >
            Powering the Future<br />
            with <span className="gradient-text">Smart Energy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: 'var(--text-2)' }}
          >
            Factoris Solutions LLP — Kerala's premier renewable energy company building energy-independent communities with solar, smart grids and surveillance technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 neon-glow-green"
              style={{ backgroundColor: 'var(--neon-green)', color: '#0a0a0a' }}
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold border transition-all duration-200"
              style={{
                borderColor: 'color-mix(in srgb, var(--neon-blue) 50%, transparent)',
                color: 'var(--neon-blue)',
              }}
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 flex justify-center"
          >
            <div className="w-px h-16 opacity-40"
              style={{ background: 'linear-gradient(to bottom, transparent, var(--neon-green))' }} />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <StatCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              tag="What We Do"
              title="Comprehensive"
              highlight="Energy Solutions"
              subtitle="From solar installations to smart surveillance — we deliver end-to-end technology for cleaner, smarter communities."
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => {
              const c = svc.color === 'green' ? 'var(--neon-green)' : 'var(--neon-blue)'
              return (
                <FadeIn key={svc.title} delay={i * 0.1}>
                  <div className="card-hover p-6 rounded-2xl h-full"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `color-mix(in srgb, ${c} 12%, transparent)`, color: c }}>
                      {svc.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--text-1)' }}>{svc.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{svc.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
          <FadeIn delay={0.4}>
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-200"
                style={{ color: 'var(--neon-green)' }}
              >
                View All Services <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision Banner */}
      <section className="py-20 relative overflow-hidden grid-bg">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-12 md:p-16 text-center"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <FadeIn>
              <div className="flex justify-center gap-8 mb-10 flex-wrap">
                {[
                  { icon: <Sun size={22} />, label: '100% Renewable', c: 'var(--neon-green)' },
                  { icon: <Zap size={22} />, label: 'Smart Systems', c: 'var(--neon-blue)' },
                  { icon: <Globe size={22} />, label: 'Sustainable Infrastructure', c: 'var(--neon-green)' },
                  { icon: <Users size={22} />, label: 'Energy Independent Communities', c: 'var(--neon-blue)' },
                ].map(v => (
                  <div key={v.label} className="flex items-center gap-2 text-sm font-medium" style={{ color: v.c }}>
                    {v.icon} {v.label}
                  </div>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-1)' }}>
                Our Vision: <span className="gradient-text">100% Green Energy</span>
              </h2>
              <p className="max-w-xl mx-auto mb-8" style={{ color: 'var(--text-2)' }}>
                We are committed to building fully energy-independent communities powered entirely by clean, renewable sources.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                style={{ backgroundColor: 'var(--neon-green)', color: '#0a0a0a' }}
              >
                See Our Projects <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Factoris */}
      <section className="section-pad" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              tag="Why Choose Us"
              title="Built on"
              highlight="Trust & Excellence"
              subtitle="We combine cutting-edge technology with local expertise to deliver results that matter."
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp size={24} />, title: 'Proven Results', desc: 'Measurable cost savings and energy independence for every client we serve.', c: 'var(--neon-green)' },
              { icon: <Shield size={24} />, title: 'ISO 9001:2015', desc: 'Internationally certified quality management — your assurance of excellence.', c: 'var(--neon-blue)' },
              { icon: <Zap size={24} />, title: 'Smart Technology', desc: 'Intelligent monitoring, automated control, and data-driven energy management.', c: 'var(--neon-green)' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="card-hover p-8 rounded-2xl text-center"
                  style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: `color-mix(in srgb, ${item.c} 12%, transparent)`, color: item.c }}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--text-1)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-2)' }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
