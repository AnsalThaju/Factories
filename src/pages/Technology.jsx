import { Activity, Cpu, Database, Wifi, Server, BarChart2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeader, FadeIn } from '../components/UI'

const systems = [
  {
    icon: <Activity size={26} />, title: 'Smart Energy Monitoring', c: 'var(--neon-green)',
    desc: 'Real-time monitoring of energy generation, consumption, and grid export via IoT sensors and cloud dashboards. Accessible from any device, anywhere.',
    specs: [{ label: 'Update Frequency', value: 'Every 5 seconds' }, { label: 'Data Retention', value: '10 Years' }, { label: 'Alerts', value: 'SMS + Email + App' }, { label: 'Access', value: 'Web & Mobile' }],
  },
  {
    icon: <Database size={26} />, title: 'Battery Management System (BMS)', c: 'var(--neon-blue)',
    desc: 'Advanced BMS provides intelligent charge/discharge management, thermal protection, and SOC tracking for maximum battery lifespan.',
    specs: [{ label: 'Cell Balancing', value: 'Active & Passive' }, { label: 'Protection', value: 'OV / UV / OC / Temp' }, { label: 'Communication', value: 'CAN / RS485 / Modbus' }, { label: 'Life Cycle', value: '4000+ Cycles' }],
  },
  {
    icon: <Wifi size={26} />, title: 'Grid Export & Net Metering', c: 'var(--neon-green)',
    desc: 'Seamless integration with KSEB grid for net metering and energy export. Surplus solar power is fed back to the grid and credited on your electricity bill.',
    specs: [{ label: 'Standard', value: 'KSEB Compliant' }, { label: 'Metering', value: 'Bi-directional' }, { label: 'Protection', value: 'Anti-islanding' }, { label: 'Reporting', value: 'Monthly Export Reports' }],
  },
  {
    icon: <Cpu size={26} />, title: 'AI-Based Surveillance', c: 'var(--neon-blue)',
    desc: 'Machine learning-powered video analytics for intelligent threat detection, crowd monitoring, license plate recognition and anomaly alerts.',
    specs: [{ label: 'Detection', value: 'Face + Motion + LPR' }, { label: 'Processing', value: 'Edge + Cloud Hybrid' }, { label: 'Accuracy', value: '98.5%+' }, { label: 'Storage', value: 'NVR + Cloud Backup' }],
  },
  {
    icon: <Server size={26} />, title: 'SCADA / Control Center', c: 'var(--neon-green)',
    desc: 'Supervisory Control and Data Acquisition (SCADA) system enabling centralized control of multiple distributed energy assets from a single interface.',
    specs: [{ label: 'Nodes', value: 'Unlimited Sites' }, { label: 'Control', value: 'Remote Switching' }, { label: 'Integration', value: 'Modbus, MQTT, REST' }, { label: 'Uptime', value: '99.9% SLA' }],
  },
  {
    icon: <BarChart2 size={26} />, title: 'Energy Analytics Platform', c: 'var(--neon-blue)',
    desc: 'Data-driven energy analytics providing generation forecasts, consumption patterns, carbon offset calculations, and ROI reports for all your assets.',
    specs: [{ label: 'Forecasting', value: 'ML-based Solar Prediction' }, { label: 'Reports', value: 'Daily / Monthly / Annual' }, { label: 'Carbon', value: 'CO₂ Offset Tracking' }, { label: 'Export', value: 'PDF / Excel / API' }],
  },
]

export default function Technology() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            tag="Technology"
            title="The Intelligence Behind"
            highlight="Smart Energy"
            subtitle="Our proprietary technology stack combines IoT, AI, and cloud computing to deliver intelligent, connected energy ecosystems."
          />
        </FadeIn>

        {/* Architecture Diagram */}
        <FadeIn>
          <div className="mb-16 rounded-3xl p-8 md:p-12 overflow-hidden"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <h2 className="text-center text-lg font-bold mb-8" style={{ color: 'var(--text-1)' }}>System Architecture Overview</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap text-sm">
              {[
                { label: 'Solar Panels', sub: 'Generation Source', c: 'var(--neon-green)' },
                { arrow: true },
                { label: 'Inverter + BMS', sub: 'Power Control', c: 'var(--neon-green)' },
                { arrow: true },
                { label: 'Smart Meter', sub: 'Measurement', c: 'var(--neon-blue)' },
                { arrow: true },
                { label: 'IoT Gateway', sub: 'Data Collection', c: 'var(--neon-blue)' },
                { arrow: true },
                { label: 'Cloud Platform', sub: 'Analytics & Control', c: 'var(--neon-green)' },
              ].map((node, i) =>
                node.arrow ? (
                  <div key={i} className="text-2xl font-bold" style={{ color: 'var(--border-2)' }}>→</div>
                ) : (
                  <div key={i} className="text-center px-5 py-4 rounded-xl border" style={{
                    borderColor: `color-mix(in srgb, ${node.c} 40%, transparent)`,
                    backgroundColor: `color-mix(in srgb, ${node.c} 6%, transparent)`,
                    minWidth: 110
                  }}>
                    <div className="font-semibold text-xs" style={{ color: 'var(--text-1)' }}>{node.label}</div>
                    <div className="text-xs mt-1" style={{ color: node.c, opacity: 0.8 }}>{node.sub}</div>
                  </div>
                )
              )}
            </div>
            <div className="text-center mt-8 text-xs" style={{ color: 'var(--text-3)' }}>
              All data flows are encrypted end-to-end · Real-time processing · 99.9% uptime guaranteed
            </div>
          </div>
        </FadeIn>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {systems.map((sys, i) => (
            <FadeIn key={sys.title} delay={i * 0.08}>
              <div className="card-hover h-full rounded-2xl p-6 flex flex-col"
                style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `color-mix(in srgb, ${sys.c} 12%, transparent)`, color: sys.c }}>
                  {sys.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-1)' }}>{sys.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-2)' }}>{sys.desc}</p>
                <div className="mt-auto grid grid-cols-2 gap-2">
                  {sys.specs.map(s => (
                    <div key={s.label} className="rounded-lg p-2.5"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${sys.c} 6%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${sys.c} 25%, transparent)`
                      }}>
                      <div className="text-xs mb-0.5" style={{ color: 'var(--text-3)' }}>{s.label}</div>
                      <div className="text-xs font-semibold" style={{ color: sys.c }}>{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="text-center rounded-2xl p-10" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-1)' }}>Want a Technical Deep-Dive?</h3>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: 'var(--text-2)' }}>Schedule a free technical consultation with our engineering team to evaluate the right solution for your needs.</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 neon-glow-green"
              style={{ backgroundColor: 'var(--neon-green)', color: '#0a0a0a' }}>
              Talk to Our Engineers <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
