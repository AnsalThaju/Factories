import { motion } from 'framer-motion'

export function SectionHeader({ tag, title, highlight, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      {tag && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 border"
          style={{
            color: 'var(--neon-green)',
            borderColor: 'color-mix(in srgb, var(--neon-green) 30%, transparent)',
            backgroundColor: 'color-mix(in srgb, var(--neon-green) 8%, transparent)'
          }}>
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-1)' }}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>{subtitle}</p>
      )}
    </div>
  )
}

export function FadeIn({ children, delay = 0, y = 30, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StatCard({ value, label, color = 'green' }) {
  return (
    <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div className="text-3xl md:text-4xl font-bold mb-1"
        style={{ color: color === 'green' ? 'var(--neon-green)' : 'var(--neon-blue)' }}>
        {value}
      </div>
      <div className="text-sm" style={{ color: 'var(--text-2)' }}>{label}</div>
    </div>
  )
}
