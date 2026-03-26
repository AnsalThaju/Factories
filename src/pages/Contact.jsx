import { useState } from 'react'
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from 'lucide-react'
import { SectionHeader, FadeIn } from '../components/UI'

const contactInfo = [
  { icon: <MapPin size={20} />, label: 'Address', value: 'Mannam Plaza Building, Monnappalam, Thrissur, Kerala – 680585, India', c: 'var(--neon-green)' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+91 9946359797', href: 'tel:+91 9946359797', c: 'var(--neon-blue)' },
  { icon: <Mail size={20} />, label: 'Email', value: 'iitdsstcr@gmail.com', href: 'mailto:iitdsstcr@gmail.com', c: 'var(--neon-green)' },
  { icon: <Globe size={20} />, label: 'Website', value: 'www.factoris.in', href: 'http://www.factoris.in', c: 'var(--neon-blue)' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      const subject = `Inquiry from ${form.name} - Factoris Solutions`
      const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0A%0AMessage:%0A${form.message}`
      window.open(`mailto:iitdsstcr@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`)
    }, 1200)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-1)',
    border: '1px solid var(--border)',
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            tag="Contact Us"
            title="Let's Build Something"
            highlight="Sustainable"
            subtitle="Reach out for a free consultation, site assessment, or quote. Our team is here to help."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map(info => (
              <FadeIn key={info.label}>
                <div className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `color-mix(in srgb, ${info.c} 12%, transparent)`, color: info.c }}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-3)' }}>{info.label}</div>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer"
                        className="text-sm transition-colors"
                        style={{ color: 'var(--text-2)' }}
                        onMouseEnter={e => e.target.style.color = 'var(--neon-green)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-2)'}>
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{info.value}</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Map */}
            <FadeIn>
              <div className="rounded-2xl overflow-hidden h-48" style={{ border: '1px solid var(--border)' }}>
                <iframe
                  title="Factoris Solutions Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.7!2d76.215!3d10.5276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMxJzM5LjQiTiA3NsKwMTInNTQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: 'color-mix(in srgb, var(--neon-green) 12%, transparent)', color: 'var(--neon-green)' }}>
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-1)' }}>Message Sent!</h3>
                    <p className="text-sm" style={{ color: 'var(--text-2)' }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-1)' }}>Send Us a Message</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-3)' }}>Full Name *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Mohammed Safeer" style={inputStyle}
                          onFocus={e => e.target.style.borderColor = 'var(--neon-green)'}
                          onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-3)' }}>Email Address *</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange}
                          placeholder="you@example.com" style={inputStyle}
                          onFocus={e => e.target.style.borderColor = 'var(--neon-green)'}
                          onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-3)' }}>Phone Number</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+91 9946359797" style={inputStyle}
                          onFocus={e => e.target.style.borderColor = 'var(--neon-green)'}
                          onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-3)' }}>Service Interested In</label>
                        <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
                          <option value="">Select a service</option>
                          <option value="solar-grid">Solar Grid Systems</option>
                          <option value="street-lighting">Solar Street Lighting</option>
                          <option value="battery">Battery Storage</option>
                          <option value="cctv">CCTV Surveillance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-3)' }}>Your Message *</label>
                      <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                        placeholder="Tell us about your project, location, requirements..."
                        style={{ ...inputStyle, resize: 'none' }}
                        onFocus={e => e.target.style.borderColor = 'var(--neon-green)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 disabled:opacity-60 neon-glow-green"
                      style={{ backgroundColor: 'var(--neon-green)', color: '#0a0a0a' }}>
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40 20" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
