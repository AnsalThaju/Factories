import { Sun, Battery, Zap, Camera, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader, FadeIn } from '../components/UI'

const services = [
  {
    id: 'solar-grid',
    icon: <Sun size={36} />,
    title: 'Solar Grid Systems',
    c: 'var(--neon-green)',
    tagline: 'Harnessing Sunlight at Scale',
    description: 'Our end-to-end solar grid systems are engineered for maximum efficiency and long-term reliability. From feasibility studies to commissioning, we handle every step.',
    benefits: ['Custom-designed rooftop & ground-mount arrays', 'Grid-tied and off-grid configurations', 'Net metering and KSEB export integration', 'Remote performance monitoring', '25-year panel performance warranty'],
    useCases: ['Panchayath Offices', 'Government Buildings', 'Schools & Hospitals', 'Commercial Complexes'],
  },
  {
    id: 'street-lighting',
    icon: <Zap size={36} />,
    title: 'Solar Street Lighting',
    c: 'var(--neon-blue)',
    tagline: 'Illuminating Communities, Sustainably',
    description: 'Smart solar street lighting systems with autonomous dusk-to-dawn operation, motion sensing, and remote management — zero electricity bills.',
    benefits: ['All-in-one and split solar street light designs', 'Lithium-ion battery with 5-year lifespan', 'Smart dimming and motion-activated modes', 'IP67 weatherproof construction', 'IoT-enabled remote monitoring dashboard'],
    useCases: ['Municipal Roads', 'Village Panchayaths', 'Parking Areas', 'Campuses'],
  },
  {
    id: 'battery-storage',
    icon: <Battery size={36} />,
    title: 'Battery Storage Systems',
    c: 'var(--neon-green)',
    tagline: 'Power When You Need It Most',
    description: 'Advanced Battery Energy Storage Systems (BESS) for uninterrupted power, peak shaving, and grid energy export. Store surplus energy and use it on demand.',
    benefits: ['Lithium-ion and LFP battery technologies', 'Scalable capacity from 5kWh to 5MWh', 'Seamless grid-tie and island-mode switching', 'Real-time SOC monitoring and BMS', 'DISCOM-compliant energy export ready'],
    useCases: ['Healthcare Facilities', 'Data Centers', 'Cold Storages', 'Commercial Buildings'],
  },
  {
    id: 'cctv',
    icon: <Camera size={36} />,
    title: 'CCTV Surveillance Systems',
    c: 'var(--neon-blue)',
    tagline: 'Intelligent Security for Smart Communities',
    description: 'AI-powered IP and HD surveillance systems that provide 24/7 security for public spaces, institutions and commercial areas with smart analytics.',
    benefits: ['Full HD, 4K and PTZ IP cameras', 'AI motion detection and facial recognition', 'Night vision and low-light capabilities', 'Cloud and NVR-based storage options', 'Remote mobile app monitoring'],
    useCases: ['Public Roads & Junctions', 'Schools & Colleges', 'Offices & Factories', 'Housing Complexes'],
  },
]

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            tag="Our Services"
            title="Integrated Energy"
            highlight="& Security Solutions"
            subtitle="Comprehensive technology offerings to build smarter, safer, and more sustainable communities."
          />
        </FadeIn>

        <div className="space-y-10">
          {services.map((svc, i) => (
            <FadeIn key={svc.id} delay={i * 0.1}>
              <div id={svc.id} className="card-hover rounded-3xl p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                {/* Left */}
                <div className="lg:col-span-1">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `color-mix(in srgb, ${svc.c} 12%, transparent)`, color: svc.c }}>
                    {svc.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-1)' }}>{svc.title}</h2>
                  <p className="text-sm font-medium mb-4" style={{ color: svc.c }}>{svc.tagline}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{svc.description}</p>
                </div>

                {/* Benefits */}
                <div className="lg:col-span-1">
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-3)' }}>Key Benefits</h3>
                  <ul className="space-y-3">
                    {svc.benefits.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                        <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: svc.c }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="lg:col-span-1">
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-3)' }}>Use Cases</h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {svc.useCases.map(u => (
                      <span key={u} className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                        style={{
                          borderColor: `color-mix(in srgb, ${svc.c} 30%, transparent)`,
                          color: svc.c,
                          backgroundColor: `color-mix(in srgb, ${svc.c} 8%, transparent)`
                        }}>
                        {u}
                      </span>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-200"
                    style={{ color: svc.c }}>
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
