import { Shield, Target, Leaf, User } from 'lucide-react'
import { SectionHeader, FadeIn, StatCard } from '../components/UI'

const timeline = [
  { year: '2015', event: 'Factoris Solutions LLP founded in Thrissur, Kerala.' },
  { year: '2017', event: 'First large-scale solar grid commissioned for a Kerala municipality.' },
  { year: '2019', event: 'ISO 9001:2015 certification achieved.' },
  { year: '2021', event: 'Expanded into battery storage and smart grid systems.' },
  { year: '2023', event: 'Integrated CCTV & surveillance division launched.' },
  { year: '2025', event: 'Serving 50+ clients across Kerala panchayaths and municipalities.' },
]

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            tag="About Us"
            title="Driving Kerala Towards"
            highlight="Energy Independence"
            subtitle="Factoris Solutions LLP is a Kerala-based renewable energy and smart technology company dedicated to building cleaner, smarter communities."
          />
        </FadeIn>

        {/* Overview */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-1)' }}>Who We Are</h2>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                Factoris Solutions LLP is headquartered in Thrissur, Kerala, and operates at the intersection of renewable energy, smart grid technology, and modern surveillance systems. We provide integrated, turnkey solutions for government bodies, municipalities, panchayaths, and commercial clients.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-2)' }}>
                Our mission is simple: use clean energy and intelligent technology to create communities that are self-sufficient, sustainable, and future-ready. Every project we undertake is backed by international-quality standards and a commitment to long-term performance.
              </p>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium"
                style={{
                  borderColor: 'color-mix(in srgb, var(--neon-green) 30%, transparent)',
                  color: 'var(--neon-green)',
                  backgroundColor: 'color-mix(in srgb, var(--neon-green) 8%, transparent)'
                }}>
                <Shield size={16} /> ISO 9001:2015 Certified · Quality You Can Trust
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: 'Projects Delivered', color: 'green' },
                { value: '50+', label: 'Happy Clients', color: 'blue' },
                { value: '10+', label: 'Years Experience', color: 'green' },
                { value: '5MW+', label: 'Installed Capacity', color: 'blue' },
              ].map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.1}>
                  <StatCard {...s} />
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Vision, Mission, Values */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: <Target size={24} />, title: 'Our Vision', c: 'var(--neon-green)', desc: '100% Green Energy and fully energy-independent communities across Kerala — powered entirely by clean, renewable sources.' },
              { icon: <Leaf size={24} />, title: 'Our Mission', c: 'var(--neon-blue)', desc: 'To design and deliver world-class renewable energy and smart technology solutions that create measurable ecological and economic value.' },
              { icon: <Shield size={24} />, title: 'Our Values', c: 'var(--neon-green)', desc: 'Integrity, Innovation, Sustainability and a relentless commitment to quality — the pillars that drive everything we do.' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-8 rounded-2xl"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `color-mix(in srgb, ${item.c} 12%, transparent)`, color: item.c }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-1)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--text-1)' }}>Our Journey</h2>
          <div className="relative pl-8 max-w-2xl mx-auto mb-20" style={{ borderLeft: '1px solid var(--border)' }}>
            {timeline.map((t, i) => {
              const c = i % 2 === 0 ? 'var(--neon-green)' : 'var(--neon-blue)'
              return (
                <FadeIn key={t.year} delay={i * 0.1}>
                  <div className="mb-8 relative">
                    <div className="absolute -left-[2.1rem] top-1 w-3 h-3 rounded-full border-2"
                      style={{ borderColor: c, backgroundColor: 'var(--bg)' }} />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: c }}>{t.year}</span>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-2)' }}>{t.event}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </FadeIn>

        {/* Founder */}
        <FadeIn>
          <div className="rounded-3xl p-10 md:p-14 text-center max-w-lg mx-auto"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--neon-green) 15%, transparent), color-mix(in srgb, var(--neon-blue) 15%, transparent))',
                border: '2px solid color-mix(in srgb, var(--neon-green) 40%, transparent)'
              }}>
              <User size={40} style={{ color: 'var(--neon-green)' }} />
            </div>
            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-1)' }}>Mohammed Safeer</h3>
            <p className="text-sm font-medium mb-4" style={{ color: 'var(--neon-green)' }}>Founder, Factoris Solutions LLP</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
              A visionary entrepreneur with a passion for sustainable technology, Mohammed Safeer founded Factoris Solutions to revolutionize how Kerala generates, manages, and consumes energy.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
