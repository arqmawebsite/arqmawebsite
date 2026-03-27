'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
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

const selectClass = `
  w-full px-4 py-3 bg-transparent
  border-b border-[rgba(238,235,231,0.25)]
  text-[var(--color-cream)] text-[0.8rem] tracking-[0.05em]
  outline-none appearance-none cursor-pointer
  transition-colors duration-300
  focus:border-[var(--color-cream)]
`

const inputClass = `
  w-full px-0 py-3 bg-transparent
  border-b border-[rgba(238,235,231,0.25)]
  text-[var(--color-cream)] text-[0.8rem] tracking-[0.05em]
  outline-none placeholder-[rgba(238,235,231,0.35)]
  transition-colors duration-300
  focus:border-[var(--color-cream)]
`

const labelClass = `block text-[0.62rem] tracking-[0.2em] uppercase font-medium mb-2`

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
    <>
      {/* ── FULL-SCREEN CONTACT SECTION ───────────────────────── */}
      <section
        className="relative min-h-screen w-full overflow-hidden"
        aria-label="Contact ARQMA"
      >
        {/* Background image */}
        <Image
          src="/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-3.jpg"
          alt="ARQMA interior design Toronto — contact us"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.78)' }} />

        {/* Content grid */}
        <div className="relative z-10 container-wide min-h-screen flex items-start py-32 md:py-40">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: Info */}
            <AnimateOnScroll>
              <div>
                <p className="t-label mb-4" style={{ color: 'rgba(238,235,231,0.5)' }}>
                  Let&apos;s Connect
                </p>
                <h1
                  className="t-display font-serif mb-6"
                  style={{ color: 'var(--color-cream)', lineHeight: 1.1 }}
                >
                  Get in Touch
                </h1>
                <p
                  className="t-body mb-12"
                  style={{ color: 'rgba(238,235,231,0.72)', maxWidth: '420px', lineHeight: 1.9 }}
                >
                  We believe every project is unique. This form helps us understand your vision
                  and guide you toward the most suitable service.
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="t-label mb-1" style={{ color: 'rgba(238,235,231,0.45)' }}>
                      Phone
                    </p>
                    <a
                      href="tel:6476856421"
                      className="font-serif"
                      style={{ color: 'var(--color-cream)', fontSize: 'clamp(1rem, 1.3vw, 1.3rem)' }}
                    >
                      647 685 6421
                    </a>
                  </div>
                  <div>
                    <p className="t-label mb-1" style={{ color: 'rgba(238,235,231,0.45)' }}>
                      Email
                    </p>
                    <a
                      href="mailto:info@arqma.ca"
                      className="font-serif"
                      style={{ color: 'var(--color-cream)', fontSize: 'clamp(1rem, 1.3vw, 1.3rem)' }}
                    >
                      info@arqma.ca
                    </a>
                  </div>
                  <div>
                    <p className="t-label mb-1" style={{ color: 'rgba(238,235,231,0.45)' }}>
                      Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/arqmainteriors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif"
                      style={{ color: 'var(--color-cream)', fontSize: 'clamp(1rem, 1.3vw, 1.3rem)' }}
                    >
                      @arqmainteriors
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right: Form */}
            <AnimateOnScroll delay={0.12}>
              {submitted ? (
                <div className="flex flex-col justify-center h-full py-12">
                  <p className="t-label mb-4" style={{ color: 'rgba(238,235,231,0.5)' }}>
                    Thank You
                  </p>
                  <h2
                    className="t-heading font-serif mb-6"
                    style={{ color: 'var(--color-cream)' }}
                  >
                    We&apos;ve received your message.
                  </h2>
                  <p className="t-body" style={{ color: 'rgba(238,235,231,0.72)', maxWidth: '420px' }}>
                    We&apos;ll be in touch within 1–2 business days to discuss your project and
                    explore how we can help bring your vision to life.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="email" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (000) 000-0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                      Project Type *
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="" disabled style={{ background: 'var(--color-espresso)' }}>Select a service</option>
                        <option value="Full-Service Design" style={{ background: 'var(--color-espresso)' }}>Full-Service Design</option>
                        <option value="Design Consultation" style={{ background: 'var(--color-espresso)' }}>Design Consultation</option>
                        <option value="Not sure yet" style={{ background: 'var(--color-espresso)' }}>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Space Type */}
                  <div>
                    <label htmlFor="spaceType" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                      Space Type *
                    </label>
                    <select
                      id="spaceType"
                      name="spaceType"
                      required
                      value={form.spaceType}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled style={{ background: 'var(--color-espresso)' }}>Residential or Commercial?</option>
                      <option value="Residential" style={{ background: 'var(--color-espresso)' }}>Residential</option>
                      <option value="Commercial" style={{ background: 'var(--color-espresso)' }}>Commercial</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="projectDescription" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      rows={4}
                      value={form.projectDescription}
                      onChange={handleChange}
                      placeholder="Tell us about your space and what you're envisioning..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Current Stage */}
                  <div>
                    <label htmlFor="currentStage" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                      Current Stage *
                    </label>
                    <select
                      id="currentStage"
                      name="currentStage"
                      required
                      value={form.currentStage}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled style={{ background: 'var(--color-espresso)' }}>Where are you in the process?</option>
                      <option value="Just exploring" style={{ background: 'var(--color-espresso)' }}>Just exploring</option>
                      <option value="Planning to start soon" style={{ background: 'var(--color-espresso)' }}>Planning to start soon</option>
                      <option value="Already in progress" style={{ background: 'var(--color-espresso)' }}>Already in progress</option>
                    </select>
                  </div>

                  {/* Investment Range */}
                  <div>
                    <label htmlFor="investmentRange" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                      Investment Range *
                    </label>
                    <select
                      id="investmentRange"
                      name="investmentRange"
                      required
                      value={form.investmentRange}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled style={{ background: 'var(--color-espresso)' }}>Select a range</option>
                      <option value="$10,000–$50,000" style={{ background: 'var(--color-espresso)' }}>$10,000–$50,000</option>
                      <option value="$50,000–$200,000" style={{ background: 'var(--color-espresso)' }}>$50,000–$200,000</option>
                      <option value="$200,000–$500,000" style={{ background: 'var(--color-espresso)' }}>$200,000–$500,000</option>
                      <option value="$500,000+" style={{ background: 'var(--color-espresso)' }}>$500,000+</option>
                      <option value="Not sure yet" style={{ background: 'var(--color-espresso)' }}>Not sure yet</option>
                    </select>
                  </div>

                  {/* Start Timeline */}
                  <div>
                    <label htmlFor="startTimeline" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                      Start Timeline *
                    </label>
                    <select
                      id="startTimeline"
                      name="startTimeline"
                      required
                      value={form.startTimeline}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled style={{ background: 'var(--color-espresso)' }}>When are you looking to start?</option>
                      <option value="Immediately" style={{ background: 'var(--color-espresso)' }}>Immediately</option>
                      <option value="Within 1–3 months" style={{ background: 'var(--color-espresso)' }}>Within 1–3 months</option>
                      <option value="3–6 months" style={{ background: 'var(--color-espresso)' }}>3–6 months</option>
                      <option value="Just exploring" style={{ background: 'var(--color-espresso)' }}>Just exploring</option>
                    </select>
                  </div>

                  {/* Priority */}
                  <div>
                    <label htmlFor="priority" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                      What Matters Most *
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      required
                      value={form.priority}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled style={{ background: 'var(--color-espresso)' }}>Select your priority</option>
                      <option value="Aesthetic transformation" style={{ background: 'var(--color-espresso)' }}>Aesthetic transformation</option>
                      <option value="Functionality" style={{ background: 'var(--color-espresso)' }}>Functionality</option>
                      <option value="Investment optimization" style={{ background: 'var(--color-espresso)' }}>Investment optimization</option>
                      <option value="Full guidance and support" style={{ background: 'var(--color-espresso)' }}>Full guidance and support</option>
                      <option value="Other" style={{ background: 'var(--color-espresso)' }}>Other</option>
                    </select>
                  </div>

                  {/* Referral */}
                  <div>
                    <label htmlFor="referralSource" className={labelClass} style={{ color: 'rgba(238,235,231,0.5)' }}>
                      How Did You Hear About ARQMA? *
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      required
                      value={form.referralSource}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled style={{ background: 'var(--color-espresso)' }}>Select one</option>
                      <option value="Instagram" style={{ background: 'var(--color-espresso)' }}>Instagram</option>
                      <option value="Referral" style={{ background: 'var(--color-espresso)' }}>Referral</option>
                      <option value="Google" style={{ background: 'var(--color-espresso)' }}>Google</option>
                      <option value="Other" style={{ background: 'var(--color-espresso)' }}>Other</option>
                    </select>
                  </div>

                  {/* Error */}
                  {error && (
                    <p
                      className="t-body"
                      style={{ color: '#f87171' }}
                    >
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-light"
                      style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
