'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type FormState = {
  fullName: string
  email: string
  phone: string
  projectType: string
  spaceType: string
  projectDescription: string
  currentStage: string
  investmentRange: string
  startTimeline: string
  priority: string
  referralSource: string
}

const initialForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  spaceType: '',
  projectDescription: '',
  currentStage: '',
  investmentRange: '',
  startTimeline: '',
  priority: '',
  referralSource: '',
}

const fieldStyle: React.CSSProperties = {
  marginBottom: '2.75rem',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.6rem',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  fontWeight: 500,
  color: 'rgba(100,81,67,0.6)',
  marginBottom: '0.6rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.6rem 0',
  background: 'transparent',
  border: 'none',
  borderBottom: '0.5px solid rgba(66,53,44,0.2)',
  color: 'var(--color-espresso)',
  fontSize: '0.88rem',
  letterSpacing: '0.025em',
  outline: 'none',
  transition: 'border-color 0.3s ease',
}

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  cursor: 'pointer',
}

export default function ConnectPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          project_type: form.projectType,
          space_type: form.spaceType,
          project_description: form.projectDescription,
          current_stage: form.currentStage,
          investment_range: form.investmentRange,
          start_timeline: form.startTimeline,
          priority: form.priority,
          referral_source: form.referralSource,
        }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Submission failed.')
      }
      setSubmitted(true)
      setForm(initialForm)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const getDynamicInput = (name: string): React.CSSProperties => ({
    ...inputStyle,
    borderBottomColor: focusedField === name ? 'var(--color-espresso)' : 'rgba(66,53,44,0.2)',
  })

  const getDynamicSelect = (name: string): React.CSSProperties => ({
    ...selectStyle,
    borderBottomColor: focusedField === name ? 'var(--color-espresso)' : 'rgba(66,53,44,0.2)',
  })

  return (
    <div style={{ background: 'var(--color-cream)', minHeight: '100svh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', minHeight: '100svh' }} className="lg-split">

        {/* ── LEFT: Full-height image — desktop only ─────────── */}
        <div
          className="hidden lg:block"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '42%',
            height: '100vh',
            zIndex: 0,
          }}
        >
          <Image
            src="/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-3.jpg"
            alt="ARQMA interior design project"
            fill
            className="object-cover"
            sizes="42vw"
            priority
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(42,31,26,0.18) 0%, transparent 40%, rgba(42,31,26,0.65) 100%)',
            }}
          />

          {/* Project label */}
          <div style={{ position: 'absolute', bottom: '7rem', left: 'clamp(2rem,4vw,3rem)' }}>
            <p className="t-label" style={{ color: 'rgba(238,235,231,0.5)', marginBottom: '0.25rem' }}>
              Hidden Creek Residence
            </p>
            <p className="t-label" style={{ color: 'rgba(238,235,231,0.35)' }}>Toronto, Canada</p>
          </div>

          {/* Contact strip — bottom of image */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 'clamp(1.25rem,2vw,1.75rem) clamp(2rem,4vw,3rem)',
              background: 'var(--color-espresso)',
            }}
          >
            <div style={{ display: 'flex', gap: 'clamp(2rem,3vw,3.5rem)', flexWrap: 'wrap' }}>
              {[
                { label: 'Phone', value: '647 685 6421', href: 'tel:6476856421' },
                { label: 'Email', value: 'info@arqma.ca', href: 'mailto:info@arqma.ca' },
                { label: 'Instagram', value: '@arqmainteriors', href: 'https://www.instagram.com/arqmainteriors' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', marginBottom: '0.3rem', letterSpacing: '0.2em' }}>
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.label === 'Instagram' ? '_blank' : undefined}
                    rel={item.label === 'Instagram' ? 'noopener noreferrer' : undefined}
                    className="t-body"
                    style={{ color: 'rgba(238,235,231,0.78)', letterSpacing: '0.03em' }}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form panel ──────────────────────────────── */}
        <div
          style={{
            marginLeft: '42%',
            paddingLeft: 'clamp(48px, 7vw, 96px)',
            paddingRight: 'clamp(32px, 4vw, 64px)',
            paddingTop: 'clamp(100px, 12vw, 160px)',
            paddingBottom: 'clamp(80px, 10vw, 120px)',
            background: 'var(--color-cream)',
          }}
          className="lg-right-panel"
        >
          <div style={{ maxWidth: '560px' }}>

            {/* Heading */}
            <p
              className="t-label"
              style={{ color: 'rgba(100,81,67,0.55)', letterSpacing: '0.24em', marginBottom: '1.25rem' }}
            >
              Get in Touch
            </p>
            <h1
              className="font-serif"
              style={{
                color: 'var(--color-espresso)',
                fontSize: 'clamp(2rem, 3.5vw, 3.8rem)',
                lineHeight: 1.18,
                letterSpacing: '-0.01em',
                marginBottom: '1.5rem',
              }}
            >
              Let&apos;s talk about<br />your project.
            </h1>
            <p
              className="t-body"
              style={{
                color: 'var(--color-taupe)',
                maxWidth: '400px',
                lineHeight: 2,
                marginBottom: 'clamp(3rem, 5vw, 4.5rem)',
              }}
            >
              Fill out the form below and we&apos;ll get back to you within 1–2 business days
              to discuss your vision.
            </p>

            {/* Mobile contact info */}
            <div
              className="lg-hide"
              style={{
                marginBottom: '3rem',
                paddingBottom: '3rem',
                borderBottom: '1px solid rgba(66,53,44,0.1)',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <a href="tel:6476856421" className="t-body" style={{ color: 'var(--color-espresso)' }}>647 685 6421</a>
              <a href="mailto:info@arqma.ca" className="t-body" style={{ color: 'var(--color-espresso)' }}>info@arqma.ca</a>
              <a href="https://www.instagram.com/arqmainteriors" target="_blank" rel="noopener noreferrer" className="t-label" style={{ color: 'var(--color-taupe)' }}>@arqmainteriors</a>
            </div>

            {/* ── Success state ── */}
            {submitted ? (
              <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                <p className="t-label" style={{ color: 'rgba(100,81,67,0.55)', letterSpacing: '0.24em', marginBottom: '1.25rem' }}>
                  Thank You
                </p>
                <h2
                  className="font-serif"
                  style={{ color: 'var(--color-espresso)', fontSize: 'clamp(1.6rem, 2.5vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}
                >
                  Message received.
                </h2>
                <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '380px', lineHeight: 2, marginBottom: '2.5rem' }}>
                  We&apos;ll be in touch within 1–2 business days to discuss your project and explore
                  how we can bring your vision to life.
                </p>
                <Link href="/" className="btn-primary">Back to Home</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {/* Full Name */}
                <div style={fieldStyle}>
                  <label htmlFor="fullName" style={labelStyle}>Full Name *</label>
                  <input
                    id="fullName" name="fullName" type="text" required
                    value={form.fullName} onChange={handleChange}
                    placeholder="Your full name"
                    style={getDynamicInput('fullName')}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Email + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '2.75rem' }}>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email Address *</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      style={getDynamicInput('email')}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="+1 (000) 000-0000"
                      style={getDynamicInput('phone')}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Service + Space Type */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '2.75rem' }}>
                  <div>
                    <label htmlFor="projectType" style={labelStyle}>Service *</label>
                    <select
                      id="projectType" name="projectType" required
                      value={form.projectType} onChange={handleChange}
                      style={getDynamicSelect('projectType')}
                      onFocus={() => setFocusedField('projectType')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Full-Service Design">Full-Service Design</option>
                      <option value="Design Consultation">Design Consultation</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="spaceType" style={labelStyle}>Space Type *</label>
                    <select
                      id="spaceType" name="spaceType" required
                      value={form.spaceType} onChange={handleChange}
                      style={getDynamicSelect('spaceType')}
                      onFocus={() => setFocusedField('spaceType')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" disabled>Residential or Commercial?</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div style={fieldStyle}>
                  <label htmlFor="projectDescription" style={labelStyle}>Tell Us About Your Project *</label>
                  <textarea
                    id="projectDescription" name="projectDescription" required rows={4}
                    value={form.projectDescription} onChange={handleChange}
                    placeholder="Describe your space, style vision, and what you're hoping to achieve..."
                    style={{ ...getDynamicInput('projectDescription'), resize: 'none' }}
                    onFocus={() => setFocusedField('projectDescription')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Stage + Timeline */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '2.75rem' }}>
                  <div>
                    <label htmlFor="currentStage" style={labelStyle}>Current Stage *</label>
                    <select
                      id="currentStage" name="currentStage" required
                      value={form.currentStage} onChange={handleChange}
                      style={getDynamicSelect('currentStage')}
                      onFocus={() => setFocusedField('currentStage')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" disabled>Where are you in the process?</option>
                      <option value="Just exploring">Just exploring</option>
                      <option value="Planning to start soon">Planning to start soon</option>
                      <option value="Already in progress">Already in progress</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="startTimeline" style={labelStyle}>Start Timeline *</label>
                    <select
                      id="startTimeline" name="startTimeline" required
                      value={form.startTimeline} onChange={handleChange}
                      style={getDynamicSelect('startTimeline')}
                      onFocus={() => setFocusedField('startTimeline')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" disabled>When to start?</option>
                      <option value="Immediately">Immediately</option>
                      <option value="Within 1–3 months">Within 1–3 months</option>
                      <option value="3–6 months">3–6 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                {/* Investment + Priority */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '2.75rem' }}>
                  <div>
                    <label htmlFor="investmentRange" style={labelStyle}>Investment Range *</label>
                    <select
                      id="investmentRange" name="investmentRange" required
                      value={form.investmentRange} onChange={handleChange}
                      style={getDynamicSelect('investmentRange')}
                      onFocus={() => setFocusedField('investmentRange')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" disabled>Select a range</option>
                      <option value="$10,000–$50,000">$10,000–$50,000</option>
                      <option value="$50,000–$200,000">$50,000–$200,000</option>
                      <option value="$200,000–$500,000">$200,000–$500,000</option>
                      <option value="$500,000+">$500,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="priority" style={labelStyle}>What Matters Most *</label>
                    <select
                      id="priority" name="priority" required
                      value={form.priority} onChange={handleChange}
                      style={getDynamicSelect('priority')}
                      onFocus={() => setFocusedField('priority')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" disabled>Select your priority</option>
                      <option value="Aesthetic transformation">Aesthetic transformation</option>
                      <option value="Functionality">Functionality</option>
                      <option value="Investment optimization">Investment optimization</option>
                      <option value="Full guidance and support">Full guidance and support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Referral */}
                <div style={fieldStyle}>
                  <label htmlFor="referralSource" style={labelStyle}>How Did You Hear About Us?</label>
                  <select
                    id="referralSource" name="referralSource"
                    value={form.referralSource} onChange={handleChange}
                    style={getDynamicSelect('referralSource')}
                    onFocus={() => setFocusedField('referralSource')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="" disabled>Select one</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Referral">Referral</option>
                    <option value="Google">Google</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Error */}
                {error && (
                  <p className="t-body" style={{ color: '#b91c1c', marginBottom: '1.5rem' }}>{error}</p>
                )}

                {/* Submit */}
                <div style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{
                      opacity: submitting ? 0.6 : 1,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      minWidth: '200px',
                      padding: '1rem 3rem',
                    }}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>

      {/* Mobile: show contact info at bottom */}
      <div
        className="lg:hidden"
        style={{
          background: 'var(--color-espresso)',
          padding: 'clamp(2rem,5vw,3rem) clamp(1.5rem,5vw,3rem)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {[
            { label: 'Phone', value: '647 685 6421', href: 'tel:6476856421' },
            { label: 'Email', value: 'info@arqma.ca', href: 'mailto:info@arqma.ca' },
            { label: 'Instagram', value: '@arqmainteriors', href: 'https://www.instagram.com/arqmainteriors' },
          ].map((item) => (
            <div key={item.label}>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', marginBottom: '0.3rem', letterSpacing: '0.2em' }}>
                {item.label}
              </p>
              <a
                href={item.href}
                target={item.label === 'Instagram' ? '_blank' : undefined}
                rel={item.label === 'Instagram' ? 'noopener noreferrer' : undefined}
                className="t-body"
                style={{ color: 'rgba(238,235,231,0.78)' }}
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
