'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

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

const inputClass = `
  w-full px-0 py-3 bg-transparent
  border-b border-[rgba(66,53,44,0.2)]
  text-[var(--color-espresso)] text-[0.85rem] tracking-[0.02em]
  outline-none placeholder-[rgba(66,53,44,0.3)]
  transition-colors duration-300
  focus:border-[var(--color-espresso)]
`

const selectClass = `
  w-full px-0 py-3 bg-transparent
  border-b border-[rgba(66,53,44,0.2)]
  text-[var(--color-espresso)] text-[0.85rem] tracking-[0.02em]
  outline-none appearance-none cursor-pointer
  transition-colors duration-300
  focus:border-[var(--color-espresso)]
`

const labelClass = `block text-[0.62rem] tracking-[0.18em] uppercase font-medium mb-2 text-[var(--color-taupe)]`

export default function ConnectPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  return (
    <div style={{ background: 'var(--color-cream)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* ── LEFT: Image + Info ─────────────────────────────── */}
        <div className="hidden lg:flex flex-col sticky top-0 h-screen overflow-hidden">
          {/* Image fills top ~75% */}
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-3.jpg"
              alt="ARQMA interior design project"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(42,31,26,0.6) 100%)' }}
            />
            {/* Label over image */}
            <div className="absolute bottom-8 left-10">
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.6)' }}>Hidden Creek Residence</p>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.4)' }}>Toronto, Canada</p>
            </div>
          </div>

          {/* Contact info strip */}
          <div
            className="px-10 py-8 flex flex-col gap-5"
            style={{ background: 'var(--color-espresso)' }}
          >
            <div className="flex items-center gap-12">
              <div>
                <p className="t-label mb-1" style={{ color: 'rgba(238,235,231,0.4)' }}>Phone</p>
                <a href="tel:6476856421" className="t-body" style={{ color: 'var(--color-cream)' }}>
                  647 685 6421
                </a>
              </div>
              <div>
                <p className="t-label mb-1" style={{ color: 'rgba(238,235,231,0.4)' }}>Email</p>
                <a href="mailto:info@arqma.ca" className="t-body" style={{ color: 'var(--color-cream)' }}>
                  info@arqma.ca
                </a>
              </div>
              <div>
                <p className="t-label mb-1" style={{ color: 'rgba(238,235,231,0.4)' }}>Instagram</p>
                <a
                  href="https://www.instagram.com/arqmainteriors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-body"
                  style={{ color: 'var(--color-cream)' }}
                >
                  @arqmainteriors
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form ──────────────────────────────────────── */}
        <div
          className="px-8 md:px-14 lg:px-16 py-28 md:py-36 lg:py-20 lg:pt-32 overflow-y-auto"
          style={{ background: 'var(--color-cream)' }}
        >
          <AnimateOnScroll>
            <p className="t-label mb-4" style={{ color: 'var(--color-taupe)', opacity: 0.6 }}>
              Get in Touch
            </p>
            <h1
              className="t-display font-serif mb-4"
              style={{ color: 'var(--color-espresso)', lineHeight: 1.1 }}
            >
              Let&apos;s talk about<br />your project.
            </h1>
            <p className="t-body mb-14" style={{ color: 'var(--color-taupe)', maxWidth: '420px', lineHeight: 1.9 }}>
              Fill out the form below and we&apos;ll get back to you within 1–2 business days to
              discuss your vision.
            </p>
          </AnimateOnScroll>

          {/* Mobile contact info */}
          <div className="lg:hidden mb-12 pb-12" style={{ borderBottom: '1px solid rgba(66,53,44,0.1)' }}>
            <div className="flex flex-col gap-4">
              <a href="tel:6476856421" className="t-body" style={{ color: 'var(--color-espresso)' }}>647 685 6421</a>
              <a href="mailto:info@arqma.ca" className="t-body" style={{ color: 'var(--color-espresso)' }}>info@arqma.ca</a>
              <a href="https://www.instagram.com/arqmainteriors" target="_blank" rel="noopener noreferrer" className="t-label" style={{ color: 'var(--color-taupe)' }}>@arqmainteriors</a>
            </div>
          </div>

          {submitted ? (
            <AnimateOnScroll>
              <div className="py-16">
                <p className="t-label mb-4" style={{ color: 'var(--color-taupe)', opacity: 0.6 }}>Thank You</p>
                <h2 className="t-heading font-serif mb-6" style={{ color: 'var(--color-espresso)' }}>
                  Message received.
                </h2>
                <p className="t-body mb-10" style={{ color: 'var(--color-taupe)', maxWidth: '400px', lineHeight: 1.9 }}>
                  We&apos;ll be in touch within 1–2 business days to discuss your project and explore how
                  we can help bring your vision to life.
                </p>
                <Link href="/" className="btn-primary">Back to Home</Link>
              </div>
            </AnimateOnScroll>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10" noValidate>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange} placeholder="Your full name" className={inputClass} />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000" className={inputClass} />
                </div>
              </div>

              {/* Project Type + Space Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="projectType" className={labelClass}>Service *</label>
                  <select id="projectType" name="projectType" required value={form.projectType} onChange={handleChange} className={selectClass}>
                    <option value="" disabled>Select a service</option>
                    <option value="Full-Service Design">Full-Service Design</option>
                    <option value="Design Consultation">Design Consultation</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="spaceType" className={labelClass}>Space Type *</label>
                  <select id="spaceType" name="spaceType" required value={form.spaceType} onChange={handleChange} className={selectClass}>
                    <option value="" disabled>Residential or Commercial?</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="projectDescription" className={labelClass}>Tell Us About Your Project *</label>
                <textarea
                  id="projectDescription" name="projectDescription" required rows={4}
                  value={form.projectDescription} onChange={handleChange}
                  placeholder="Describe your space, style vision, and what you're hoping to achieve..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Stage + Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="currentStage" className={labelClass}>Current Stage *</label>
                  <select id="currentStage" name="currentStage" required value={form.currentStage} onChange={handleChange} className={selectClass}>
                    <option value="" disabled>Where are you in the process?</option>
                    <option value="Just exploring">Just exploring</option>
                    <option value="Planning to start soon">Planning to start soon</option>
                    <option value="Already in progress">Already in progress</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="startTimeline" className={labelClass}>Start Timeline *</label>
                  <select id="startTimeline" name="startTimeline" required value={form.startTimeline} onChange={handleChange} className={selectClass}>
                    <option value="" disabled>When to start?</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1–3 months">Within 1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              {/* Investment + Priority */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="investmentRange" className={labelClass}>Investment Range *</label>
                  <select id="investmentRange" name="investmentRange" required value={form.investmentRange} onChange={handleChange} className={selectClass}>
                    <option value="" disabled>Select a range</option>
                    <option value="$10,000–$50,000">$10,000–$50,000</option>
                    <option value="$50,000–$200,000">$50,000–$200,000</option>
                    <option value="$200,000–$500,000">$200,000–$500,000</option>
                    <option value="$500,000+">$500,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="priority" className={labelClass}>What Matters Most *</label>
                  <select id="priority" name="priority" required value={form.priority} onChange={handleChange} className={selectClass}>
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
              <div>
                <label htmlFor="referralSource" className={labelClass}>How Did You Hear About Us? *</label>
                <select id="referralSource" name="referralSource" required value={form.referralSource} onChange={handleChange} className={selectClass}>
                  <option value="" disabled>Select one</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Referral">Referral</option>
                  <option value="Google">Google</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Error */}
              {error && (
                <p className="t-body" style={{ color: '#b91c1c' }}>{error}</p>
              )}

              {/* Submit */}
              <div className="pt-4 pb-8">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                  style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer', minWidth: '200px' }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  )
}
