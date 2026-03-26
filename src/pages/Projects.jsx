import { Link } from 'react-router-dom'
import { TrendingDown, Leaf, Zap, Award, ArrowRight } from 'lucide-react'
import { SectionHeader, FadeIn } from '../components/UI'

const projects = [
  { title: 'Panchayath Solar Grid – Thrissur District', type: 'Solar Grid', client: 'Gram Panchayath', capacity: '25 kW', savings: '₹2.5L/year', c: 'var(--neon-green)', desc: 'Complete rooftop solar installation for the Panchayath office building. Surplus exported to the grid.', tags: ['Solar PV', 'Net Metering', 'KSEB Export'] },
  { title: 'Municipality Solar Street Lighting', type: 'Street Lighting', client: 'Town Municipality', capacity: '85 Units', savings: '₹4.8L/year', c: 'var(--neon-blue)', desc: '85 smart solar street lights installed across key municipal roads. Motion-activated smart dimming.', tags: ['Smart Dimming', 'IoT Monitoring', 'Zero Running Cost'] },
  { title: 'Government Hospital BESS + Solar', type: 'Battery + Solar', client: 'Government Hospital', capacity: '50kW + 100kWh', savings: '₹6L/year', c: 'var(--neon-green)', desc: 'Hybrid solar + battery storage system ensuring 24/7 uninterrupted power for critical operations.', tags: ['Uninterrupted Power', 'LFP Battery', 'Critical Load'] },
  { title: 'Smart Surveillance – Municipal Junction', type: 'CCTV', client: 'Town Municipality', capacity: '32 Cameras', savings: 'Enhanced Safety', c: 'var(--neon-blue)', desc: 'AI-enabled IP camera surveillance at 8 key traffic junctions. Integrated with police monitoring center.', tags: ['AI Detection', 'Night Vision', 'Police Integration'] },
  { title: 'School Campus Solar', type: 'Solar Grid', client: 'Government High School', capacity: '15 kW', savings: '₹1.2L/year', c: 'var(--neon-green)', desc: 'Rooftop solar providing clean energy for the school campus. Acts as a live demonstration model.', tags: ['Educational', 'Rooftop', 'Green Campus'] },
  { title: 'Panchayath Community Lighting', type: 'Street Lighting', client: 'Village Panchayath', capacity: '40 Units', savings: '₹2L/year', c: 'var(--neon-blue)', desc: 'Solar street lighting for rural panchayath roads, providing safe reliable lighting with zero infrastructure cost.', tags: ['Rural', 'Self-Sufficient', 'Dusk-to-Dawn'] },
]

const impactStats = [
  { icon: <TrendingDown size={22} />, value: '₹25L+', label: 'Annual Savings Generated', c: 'var(--neon-green)' },
  { icon: <Leaf size={22} />, value: '500T+', label: 'CO₂ Avoided per Year', c: 'var(--neon-blue)' },
  { icon: <Zap size={22} />, value: '1.2M+', label: 'kWh Clean Energy Produced', c: 'var(--neon-green)' },
  { icon: <Award size={22} />, value: '30+', label: 'Government Projects', c: 'var(--neon-blue)' },
]

export default function Projects() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            tag="Our Projects"
            title="Delivering Impact Across"
            highlight="Kerala"
            subtitle="Real projects, measurable results. From village panchayaths to town municipalities — we're building a greener Kerala."
          />
        </FadeIn>

        {/* Impact Stats */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {impactStats.map(stat => (
              <div key={stat.label} className="card-hover p-6 rounded-2xl text-center"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="flex justify-center mb-3" style={{ color: stat.c }}>{stat.icon}</div>
                <div className="text-2xl font-bold mb-1" style={{ color: stat.c }}>{stat.value}</div>
                <div className="text-xs" style={{ color: 'var(--text-2)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <FadeIn key={proj.title} delay={i * 0.08}>
              <div className="card-hover rounded-2xl flex flex-col h-full overflow-hidden"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                {/* Header */}
                <div className="p-6 pb-4" style={{ borderBottom: `1px solid color-mix(in srgb, ${proj.c} 20%, transparent)` }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ color: proj.c, backgroundColor: `color-mix(in srgb, ${proj.c} 12%, transparent)` }}>
                      {proj.type}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-3)' }}>{proj.client}</span>
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-1)' }}>{proj.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{proj.desc}</p>
                </div>
                {/* Stats */}
                <div className="px-6 py-4 grid grid-cols-2 gap-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <div>
                    <div className="text-xs mb-1" style={{ color: 'var(--text-3)' }}>Capacity</div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>{proj.capacity}</div>
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ color: 'var(--text-3)' }}>Savings</div>
                    <div className="text-sm font-semibold" style={{ color: proj.c }}>{proj.savings}</div>
                  </div>
                </div>
                {/* Tags */}
                <div className="px-6 py-4 flex flex-wrap gap-2 mt-auto">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md border"
                      style={{
                        borderColor: `color-mix(in srgb, ${proj.c} 30%, transparent)`,
                        color: proj.c,
                        backgroundColor: `color-mix(in srgb, ${proj.c} 6%, transparent)`
                      }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-16">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-1)' }}>Ready to start your project?</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-2)' }}>Contact us today for a free consultation and site assessment.</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 neon-glow-green"
              style={{ backgroundColor: 'var(--neon-green)', color: '#0a0a0a' }}>
              Get a Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
