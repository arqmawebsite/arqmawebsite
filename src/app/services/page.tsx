import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ConsultationTimeline from '@/components/ConsultationTimeline'
import FullDesignPhases from '@/components/FullDesignPhases'

export const metadata: Metadata = {
  title: 'Services — ARQMA Interior Design Toronto | Canada & USA',
  description:
    'ARQMA offers interior design services across Canada and the United States: Full-Service Design, Curated Partnerships, E-Design, and Strategy Sessions. In-person and remote services available.',
  alternates: { canonical: 'https://www.arqma.ca/services' },
}


const overviewCards = [
  {
    number: '01',
    title: 'ARQMA Design Strategy Session',
    subtitle: 'Investment: $600 + HST',
    desc: 'A focused, one-time consultation for clients who need expert direction and clarity before committing to a full project.',
    anchor: '#strategy',
  },
  {
    number: '02',
    title: 'ARQMA E-Design',
    subtitle: 'Essential & Signature',
    desc: 'Tailored digital design packages for clients who prefer to manage implementation themselves — with professional guidance and clear deliverables.',
    anchor: '#e-design',
  },
  {
    number: '03',
    title: 'Full-Service Design',
    subtitle: 'End-to-End Guidance',
    desc: 'A comprehensive, fully guided experience from first concept to final styling — for clients who want expert direction at every stage.',
    anchor: '#full-service',
  },
  {
    number: '04',
    title: 'Curated Partnerships',
    subtitle: 'Design + Collaboration',
    desc: 'For clients with an existing team in place. ARQMA steps in as the design authority, providing creative direction and cohesion across all parties.',
    anchor: '#curated-partnerships',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section-full w-full overflow-hidden relative" aria-label="Services hero">
        <Image
          src="/images/projects/mb-beauty/MBBEAULTY-SAL-CREATORS-1.jpg"
          alt="ARQMA interior design services Toronto"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="overlay-dark" />
        <div className="absolute bottom-16 left-[5vw] z-20">
          <p className="t-label mb-4" style={{ color: 'rgba(238,235,231,0.6)' }}>What We Offer</p>
          <h1 className="t-hero font-serif" style={{ color: 'var(--color-cream)' }}>Services</h1>
        </div>
      </section>

      {/* ── HOW WE CAN WORK TOGETHER (espresso) ──────────────── */}
      <section
        className="section-pad-xl"
        style={{ background: 'var(--color-espresso)' }}
        aria-label="How we can work together"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <p className="t-label mb-5" style={{ color: 'rgba(238,235,231,0.45)' }}>Our Services</p>
            <h2
              className="t-heading font-serif"
              style={{ color: 'var(--color-cream)', maxWidth: '580px', marginBottom: '1.5rem' }}
            >
              How We Can Work Together
            </h2>
            <p
              className="t-body"
              style={{
                color: 'rgba(238,235,231,0.6)',
                maxWidth: '560px',
                lineHeight: 2,
                marginBottom: 'clamp(3rem, 5vw, 5rem)',
              }}
            >
              Every project is different — in scale, timeline, and vision. ARQMA offers a range of
              services designed to meet you wherever you are, with the level of guidance that fits your needs.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {overviewCards.map((card, i) => (
              <AnimateOnScroll key={card.number} delay={i * 0.08}>
                <Link
                  href={card.anchor}
                  className="flex flex-col h-full group"
                  style={{
                    border: '1px solid rgba(238,235,231,0.1)',
                    background: 'rgba(238,235,231,0.03)',
                    padding: 'clamp(2rem, 3.5vw, 3.5rem)',
                  }}
                >
                  <p className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.28)' }}>{card.number}</p>
                  <h3 className="t-subheading font-serif mb-3" style={{ color: 'var(--color-cream)' }}>
                    {card.title}
                  </h3>
                  <p className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.38)' }}>{card.subtitle}</p>
                  <p className="t-body mb-10" style={{ color: 'rgba(238,235,231,0.62)', lineHeight: 2 }}>{card.desc}</p>
                  <p
                    className="t-label mt-auto flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
                    style={{ color: 'rgba(238,235,231,0.45)' }}
                  >
                    Learn More <span>→</span>
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGY SESSION (cream) — Service 01 ─────────────── */}
      <section
        id="strategy"
        className="section-pad-xl"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Strategy session details"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <div style={{ borderBottom: '1px solid rgba(66,53,44,0.1)', paddingBottom: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              <p className="t-label" style={{ color: 'var(--color-taupe)', letterSpacing: '0.26em', marginBottom: '1.25rem' }}>
                Service 01
              </p>
              <h2 className="t-heading font-serif" style={{ color: 'var(--color-espresso)', marginBottom: '1.75rem' }}>
                ARQMA Design Strategy Session
              </h2>
              <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '640px', lineHeight: 2.1, marginBottom: '1rem' }}>
                Making design decisions shouldn&apos;t feel overwhelming — but with so many options
                and details to consider, it often does.
              </p>
              <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '640px', lineHeight: 2.1, marginBottom: '1rem' }}>
                This session is designed to bring clarity, confidence, and direction to your space —
                whether you&apos;re selecting finishes, choosing furniture, refining your layout,
                or navigating key design decisions.
              </p>
              <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '640px', lineHeight: 2.1, marginBottom: '1.75rem' }}>
                Together, we define a clear path forward — so you can move ahead with confidence,
                and create a space that feels cohesive and intentional.
              </p>
              <p className="t-label" style={{ color: 'var(--color-wine)', letterSpacing: '0.22em', marginBottom: '0.5rem' }}>
                Investment: $600 + HST
              </p>
              <p className="t-label" style={{ color: 'rgba(66,53,44,0.4)', letterSpacing: '0.16em' }}>
                Available in-person and remotely — serving clients across Canada and the United States
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div style={{ width: '100%', height: 'clamp(220px, 28vw, 420px)', position: 'relative', overflow: 'hidden', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              <Image src="/images/services/strategy/15.png" alt="ARQMA Strategy Session" fill className="object-cover" sizes="90vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(66,53,44,0.06)' }} />
            </div>
          </AnimateOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(3rem, 8vw, 9rem)' }}>
            <AnimateOnScroll>
              <p className="t-label" style={{ color: 'rgba(66,53,44,0.4)', letterSpacing: '0.24em', marginBottom: '1.5rem' }}>What This Is Ideal For</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
                {['Selecting finishes, materials, and key design elements','Furniture layout and selection guidance','Lighting and fixture decisions','Refining the layout and functionality of your space','Gaining clarity before making important design investments'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', listStyle: 'none' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.65rem', width: '1.25rem', height: '1px', background: 'var(--color-wine)', opacity: 0.45, display: 'block' }} />
                    <span className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="t-label" style={{ color: 'rgba(66,53,44,0.4)', letterSpacing: '0.24em', marginBottom: '1.5rem' }}>What You&apos;ll Receive</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
                {['A clear design direction tailored to your space and goals','Expert guidance on key decisions (finishes, furniture, layout, or fixtures)','Curated recommendations to support your next steps','A focused plan to move forward with confidence'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', listStyle: 'none' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.65rem', width: '1.25rem', height: '1px', background: 'var(--color-wine)', opacity: 0.45, display: 'block' }} />
                    <span className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://arqmaservices.setmore.com/services/fc25ee5d-0356-4bf1-a1d6-7110cce8fa7f" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block' }}>
                Book a Strategy Session
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="t-label" style={{ color: 'rgba(66,53,44,0.4)', letterSpacing: '0.24em', marginBottom: '2rem' }}>Client Journey</p>
              <div>
                {[
                  { step: '1.', title: 'Project Intake — Questionnaire', desc: "You'll complete a short form sharing your space, needs, and priorities — along with photos, measurements, and inspiration. This allows us to fully understand your space and what you're looking to achieve." },
                  { step: '2.', title: 'Strategy Alignment Call (up to 30 min)', desc: "We review your space together, clarify your goals, and define the key areas we'll focus on during the session. This ensures our time together is fully intentional and aligned." },
                  { step: '3.', title: 'Design Preparation', desc: 'Based on your project, we prepare targeted design direction — which may include layout guidance, furniture suggestions, finishes, or key design recommendations. Everything is tailored to support your specific decisions.' },
                  { step: '4.', title: 'Strategy Session (Up to 1 hour)', desc: "During our live session, we work through your space together in real time — refining ideas, making decisions, and bringing clarity to your project. You'll leave with a clear direction and actionable next steps." },
                  { step: '5.', title: 'Follow-Up Support (Up to 20–30 min)', desc: "After the session, you'll receive a summary of key decisions and guidance — along with the opportunity to clarify any final questions." },
                ].map(({ step, title, desc }, i, arr) => (
                  <div key={step} style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(66,53,44,0.1)' : 'none', display: 'grid', gridTemplateColumns: '2rem 1fr', gap: '1rem', alignItems: 'start' }}>
                    <span className="t-label" style={{ color: 'rgba(66,53,44,0.3)', paddingTop: '0.2rem' }}>{step}</span>
                    <div>
                      <p className="font-serif" style={{ color: 'var(--color-espresso)', fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', lineHeight: 1.4, marginBottom: '0.6rem' }}>{title}</p>
                      <p style={{ color: 'var(--color-taupe)', fontSize: '0.82rem', lineHeight: 1.85, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── E-DESIGN (espresso) — Service 02 ─────────────────────── */}
      <section
        id="e-design"
        style={{ background: 'var(--color-espresso)', paddingTop: 'clamp(6rem, 12vw, 11rem)', paddingBottom: 'clamp(6rem, 12vw, 11rem)' }}
        aria-label="E-Design service"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <div style={{ borderBottom: '0.5px solid rgba(238,235,231,0.12)', paddingBottom: 'clamp(2.5rem, 4vw, 4.5rem)', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.28em', marginBottom: '1.5rem' }}>
                Service 02
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem' }}>
                <div>
                  <h2 className="t-heading font-serif" style={{ color: 'var(--color-cream)', lineHeight: 1.08, marginBottom: '1.1rem' }}>ARQMA E-Design</h2>
                  <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.22em' }}>Essential &amp; Signature</p>
                </div>
                <p className="t-body" style={{ color: 'rgba(238,235,231,0.6)', maxWidth: '460px', lineHeight: 2.2, letterSpacing: '0.02em' }}>
                  Tailored digital design packages for clients who prefer to manage implementation themselves — with professional guidance and clear, actionable deliverables.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── E-Design Essential 02.1 ───────── */}
          <AnimateOnScroll>
            <p className="t-label" style={{ color: 'rgba(238,235,231,0.28)', letterSpacing: '0.26em', marginBottom: '1.5rem' }}>02.1</p>
            <h3 className="t-subheading font-serif" style={{ color: 'var(--color-cream)', marginBottom: '0.4rem' }}>E-Design Essential</h3>
            <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.18em', marginBottom: '1.25rem' }}>For Up to 2 rooms</p>
            <p className="t-body" style={{ color: 'rgba(238,235,231,0.62)', maxWidth: '640px', lineHeight: 2.1, marginBottom: '0.9rem' }}>
              Creating a cohesive, well-designed space goes beyond simply choosing furniture — it requires clarity, direction, and thoughtful planning.
            </p>
            <p className="t-body" style={{ color: 'rgba(238,235,231,0.62)', maxWidth: '640px', lineHeight: 2.1, marginBottom: '0.9rem' }}>
              When you&apos;re furnishing your home, it&apos;s easy to feel unsure where to begin. Without a clear strategy, decisions become fragmented — and the space never fully comes together.
            </p>
            <p className="t-body" style={{ color: 'rgba(238,235,231,0.62)', maxWidth: '640px', lineHeight: 2.1, marginBottom: 'clamp(2rem, 3vw, 3rem)' }}>
              This service is designed to provide a clear layout, furniture direction, and a cohesive design strategy tailored to how you live — so you can make confident decisions, avoid costly mistakes, and create a space that feels intentional from the start.
            </p>
          </AnimateOnScroll>

          {/* Essential editorial strip */}
          <AnimateOnScroll>
            <div style={{ width: '100%', height: 'clamp(200px, 24vw, 380px)', position: 'relative', overflow: 'hidden', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              <Image src="/images/services/e-design-essential/1.png" alt="ARQMA E-Design Essential service" fill className="object-cover" sizes="90vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,31,26,0.18)' }} />
            </div>
          </AnimateOnScroll>

          {/* Essential: ideal for + what you'll receive + client journey */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(3rem, 8vw, 9rem)', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
            <AnimateOnScroll>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.26em', marginBottom: '1.5rem' }}>This service is ideal if you:</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
                {['Are unsure where to start when furnishing your space','Want a cohesive, intentional design — not a mix of random pieces',"Don't have time to research and plan everything on your own",'Want expert guidance before investing in furniture and key elements'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.6rem', width: '1.25rem', height: '1px', background: 'rgba(238,235,231,0.3)', display: 'block' }} />
                    <span style={{ color: 'rgba(238,235,231,0.62)', fontSize: '0.85rem', lineHeight: 1.75, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.26em', marginBottom: '1.5rem' }}>What You&apos;ll Receive</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {['Conceptual layout floor plans options — A clear layout strategy tailored to your space','Shopping list (furniture + key elements) — A curated furniture selection aligned with your style and needs','Moodboard — A cohesive design direction to guide your decisions','Visual support through conceptual 3D renderings, helping you clearly understand how everything comes together','A focused plan to help you move forward with confidence'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.6rem', width: '1.25rem', height: '1px', background: 'rgba(238,235,231,0.3)', display: 'block' }} />
                    <span style={{ color: 'rgba(238,235,231,0.62)', fontSize: '0.85rem', lineHeight: 1.75, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="t-label" style={{ color: 'rgba(238,235,231,0.4)', letterSpacing: '0.22em', marginBottom: '2rem' }}>Investment: $950 + HST</p>
              <a href="https://arqmaservices.setmore.com/services/d50ea8eb-95e1-473b-8fab-5e9031907deb" target="_blank" rel="noopener noreferrer" className="btn-light" style={{ display: 'inline-block' }}>
                Book E-Design Essential
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.26em', marginBottom: '2rem' }}>Client Journey</p>
              <div>
                {[
                  { step: '1.', title: 'Project Intake', desc: 'You will fill out a short form with measurements, photos/videos, and inspiration. This step helps us understand your space, your style, and your goals.' },
                  { step: '2.', title: 'Project Setup', desc: 'We organize your measurements and references and begin translating them into initial layout floor plan options.' },
                  { step: '3.', title: 'Alignment Call (Up to 30 min)', desc: 'Together we review your space, clarify any missing or unclear information, and align on the design direction and approach.' },
                  { step: '4.', title: 'Design Direction Development', desc: 'We develop layout options and select furniture pieces tailored to your needs, space, and style.' },
                  { step: '5.', title: 'Design Review Session (up to 1.5 hours)', desc: 'Together we review layout options and refine the design in real time, including: Furniture selection, Layout optimization, Functional solutions tailored to your routine.' },
                  { step: '6.', title: 'Follow-up Session (Up to 20–30 min)', desc: 'We clarify any final questions and ensure everything feels clear and ready to move forward. You receive guidance to make confident decisions during the session.' },
                ].map(({ step, title, desc }, i, arr) => (
                  <div key={step} style={{ paddingTop: '1.4rem', paddingBottom: '1.4rem', borderBottom: i < arr.length - 1 ? '0.5px solid rgba(238,235,231,0.1)' : 'none', display: 'grid', gridTemplateColumns: '2rem 1fr', gap: '1rem', alignItems: 'start' }}>
                    <span className="t-label" style={{ color: 'rgba(238,235,231,0.28)', paddingTop: '0.2rem' }}>{step}</span>
                    <div>
                      <p className="font-serif" style={{ color: 'var(--color-cream)', fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', lineHeight: 1.4, marginBottom: '0.5rem' }}>{title}</p>
                      <p style={{ color: 'rgba(238,235,231,0.55)', fontSize: '0.82rem', lineHeight: 1.85, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Essential image row */}
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2" style={{ marginBottom: 'clamp(4rem, 8vw, 8rem)' }}>
              {['2', '3', '4', '5'].map((n) => (
                <div key={n} style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
                  <Image src={`/images/services/e-design-essential/${n}.png`} alt={`ARQMA E-Design Essential — example ${n}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,31,26,0.1)' }} />
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Divider */}
          <div style={{ height: '0.5px', background: 'rgba(238,235,231,0.1)', marginBottom: 'clamp(4rem, 7vw, 7rem)' }} />

          {/* ── E-Design Signature 02.2 ───────── */}
          <AnimateOnScroll>
            <p className="t-label" style={{ color: 'rgba(238,235,231,0.28)', letterSpacing: '0.26em', marginBottom: '1.5rem' }}>02.2</p>
            <h3 className="t-subheading font-serif" style={{ color: 'var(--color-cream)', marginBottom: '0.4rem' }}>E-Design Signature</h3>
            <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.18em', marginBottom: '1.25rem' }}>Full Digital Design Package</p>
            <p className="t-body" style={{ color: 'rgba(238,235,231,0.62)', maxWidth: '640px', lineHeight: 2.1, marginBottom: '0.9rem' }}>
              A more in-depth, strategic design experience for spaces that require a higher level of detail — with a thoughtful approach to customization, serving clients remotely.
            </p>
            <p className="t-body" style={{ color: 'rgba(238,235,231,0.62)', maxWidth: '640px', lineHeight: 2.1, marginBottom: '0.9rem' }}>
              If you&apos;re renovating a kitchen, updating a bathroom, or rethinking a closet, you&apos;re making decisions that impact how you live every day — and that will stay with you for years.
            </p>
            <p className="t-body" style={{ color: 'rgba(238,235,231,0.5)', maxWidth: '640px', lineHeight: 2.1, marginBottom: 'clamp(2rem, 3vw, 3rem)' }}>
              This service is ideal for clients who are looking to improve their space without undergoing a major renovation, and who feel comfortable managing the implementation on their own. It provides expert guidance on layout, aesthetics, and key design decisions.
            </p>
          </AnimateOnScroll>

          {/* Signature editorial strip */}
          <AnimateOnScroll>
            <div style={{ width: '100%', height: 'clamp(200px, 24vw, 380px)', position: 'relative', overflow: 'hidden', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              <Image src="/images/services/e-design-signature/6.png" alt="ARQMA E-Design Signature service" fill className="object-cover" sizes="90vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,31,26,0.18)' }} />
            </div>
          </AnimateOnScroll>

          {/* Signature: ideal for + what you'll receive + client journey */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(3rem, 8vw, 9rem)', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
            <AnimateOnScroll>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.26em', marginBottom: '1.5rem' }}>What This Is Ideal For</p>
              <p style={{ color: 'rgba(238,235,231,0.62)', fontSize: '0.85rem', lineHeight: 1.85, fontFamily: 'var(--font-sans)', fontWeight: 300, marginBottom: '0.9rem' }}>
                This service is designed for those who want a refined, customized result — through a more strategic and efficient approach.
              </p>
              <p style={{ color: 'rgba(238,235,231,0.62)', fontSize: '0.85rem', lineHeight: 1.85, fontFamily: 'var(--font-sans)', fontWeight: 300, marginBottom: '1rem' }}>
                Rather than starting from scratch with fully bespoke solutions, we work with proven systems and elevate them through thoughtful design:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {['Adapting them to your space and your needs', 'Refining layouts and functionality', 'Layering design decisions to create a cohesive, intentional outcome'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', listStyle: 'none' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.6rem', width: '1.25rem', height: '1px', background: 'rgba(238,235,231,0.3)', display: 'block' }} />
                    <span style={{ color: 'rgba(238,235,231,0.62)', fontSize: '0.85rem', lineHeight: 1.75, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ color: 'rgba(238,235,231,0.35)', fontSize: '0.78rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', fontWeight: 300, marginBottom: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.04em' }}>
                1 week of technical support post-session
              </p>

              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.26em', marginBottom: '1.5rem' }}>What You&apos;ll Receive</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  'Layout plans tailored to your space — designed to optimize flow, functionality, and how you live',
                  'A curated selection of finishes, materials, and key elements, aligned with your style and project goals',
                  'A cohesive design concept to guide the overall direction and ensure consistency across every decision',
                  'Visual support through conceptual 3D renderings, helping you clearly understand how everything comes together',
                  'Key elevations highlighting essential overall dimensions and primary finishes',
                  'A clear, actionable plan to move your project forward with confidence',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', listStyle: 'none' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.6rem', width: '1.25rem', height: '1px', background: 'rgba(238,235,231,0.3)', display: 'block' }} />
                    <span style={{ color: 'rgba(238,235,231,0.62)', fontSize: '0.85rem', lineHeight: 1.75, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="t-label" style={{ color: 'rgba(238,235,231,0.4)', letterSpacing: '0.22em', marginBottom: '2rem' }}>Investment starting at $1,600 + HST</p>
              <Link href="/connect" className="btn-light" style={{ display: 'inline-block' }}>Book E-Design Signature</Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.26em', marginBottom: '2rem' }}>Client Journey</p>
              <div>
                {[
                  { step: '1.', title: 'Project Intake', desc: "You'll complete a detailed form sharing your space, needs, and goals — along with photos, measurements, and inspiration. This allows us to fully understand your project and define the right approach from the start." },
                  { step: '2.', title: 'Project Setup', desc: 'We review and organize all information, beginning to shape the foundation of your design direction.' },
                  { step: '3.', title: 'Strategy Alignment Call (Up to 45 min)', desc: "We align on priorities, budget considerations, and the level of detail required — ensuring we're fully aligned before moving into development." },
                  { step: '4.', title: 'Design Development', desc: 'We develop custom layout solutions and explore elements such as built-ins and ready-made cabinetry, custom panelings, bathroom and kitchen layouts, storage optimization, and functional details specific to your space.' },
                  { step: '5.', title: 'Design Review Session (up to 2 hours)', desc: 'We walk through the design together, refining decisions in real time and ensuring every element works cohesively — covering layout adjustments, material and configuration discussions, and functional improvements.' },
                  { step: '6.', title: 'Follow-up Session (up to 1 hour)', desc: 'We clarify final details and any remaining questions, to ensure that you feel fully confident moving into implementation.' },
                ].map(({ step, title, desc }, i, arr) => (
                  <div key={step} style={{ paddingTop: '1.4rem', paddingBottom: '1.4rem', borderBottom: i < arr.length - 1 ? '0.5px solid rgba(238,235,231,0.1)' : 'none', display: 'grid', gridTemplateColumns: '2rem 1fr', gap: '1rem', alignItems: 'start' }}>
                    <span className="t-label" style={{ color: 'rgba(238,235,231,0.28)', paddingTop: '0.2rem' }}>{step}</span>
                    <div>
                      <p className="font-serif" style={{ color: 'var(--color-cream)', fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)', lineHeight: 1.4, marginBottom: '0.5rem' }}>{title}</p>
                      <p style={{ color: 'rgba(238,235,231,0.55)', fontSize: '0.82rem', lineHeight: 1.85, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Signature image row */}
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['7', '8', '9', '10'].map((n) => (
                <div key={n} style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
                  <Image src={`/images/services/e-design-signature/${n}.png`} alt={`ARQMA E-Design Signature — example ${n}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,31,26,0.1)' }} />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── FULL-SERVICE DESIGN (wine) — Service 03 ──────────────── */}
      <section
        id="full-service"
        style={{ background: 'var(--color-wine)', paddingTop: 'clamp(6rem, 12vw, 11rem)', paddingBottom: 'clamp(6rem, 12vw, 11rem)' }}
        aria-label="Full-service design details"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <div style={{ borderBottom: '0.5px solid rgba(238,235,231,0.12)', paddingBottom: 'clamp(2.5rem, 4vw, 4.5rem)', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.28em', marginBottom: '1.5rem' }}>
                Service 03
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem' }}>
                <div>
                  <h2 className="t-heading font-serif" style={{ color: 'var(--color-cream)', lineHeight: 1.08, marginBottom: '1.1rem' }}>
                    Full-Service Design
                  </h2>
                  <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.22em' }}>
                    Design Phase: 2 to 4 Months
                  </p>
                </div>
                <p className="t-body" style={{ color: 'rgba(238,235,231,0.6)', maxWidth: '460px', lineHeight: 2.2, letterSpacing: '0.02em' }}>
                  A complete, end-to-end experience — for clients who want expert direction
                  at every stage, from first concept to final styling.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <p className="t-body" style={{ color: 'rgba(238,235,231,0.65)', maxWidth: '620px', lineHeight: 2.2, letterSpacing: '0.02em', marginBottom: '1.25rem' }}>
              For projects that require a complete, intentional transformation — from concept to execution.
            </p>
            <p className="t-body" style={{ color: 'rgba(238,235,231,0.65)', maxWidth: '620px', lineHeight: 2.2, letterSpacing: '0.02em', marginBottom: '1.25rem' }}>
              Our Full Interior Design Service is a comprehensive, fully guided experience designed for clients who want expert direction, a cohesive vision, and support throughout every stage of the project.
            </p>
            <p className="t-body" style={{ color: 'rgba(238,235,231,0.65)', maxWidth: '620px', lineHeight: 2.2, letterSpacing: '0.02em', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              From spatial planning and design development to technical documentation, contractor coordination, and final styling, we guide the entire process with clarity, intention, and care — ensuring every decision works together toward a beautifully resolved result.
            </p>
          </AnimateOnScroll>

          {/* Editorial image strip */}
          <AnimateOnScroll>
            <div style={{ width: '100%', height: 'clamp(220px, 28vw, 420px)', position: 'relative', overflow: 'hidden', marginBottom: 'clamp(3.5rem, 6vw, 6rem)' }}>
              <Image
                src="/images/services/full-service/11.png"
                alt="ARQMA full-service interior design"
                fill
                className="object-cover"
                sizes="90vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(81,44,50,0.15)' }} />
            </div>
          </AnimateOnScroll>

          {/* Deliverables + phases */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(3.5rem, 8vw, 9rem)' }}>
            <AnimateOnScroll>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.26em', marginBottom: '2rem' }}>
                What You&apos;ll Receive
              </p>
              <div>
                {[
                  { title: 'Strategic Discovery & Design Direction', desc: 'A deep understanding of your goals, lifestyle, and vision to define a clear design direction.' },
                  { title: 'Spatial Planning & Layout Strategy', desc: 'Thoughtfully developed layouts that optimize flow, function, and everyday experience.' },
                  { title: 'Concept Development & Visualization', desc: 'A cohesive design concept supported by curated materials, finishes, and 3D visualizations.' },
                  { title: 'Design Refinement', desc: 'Collaborative review and adjustments to ensure every detail feels aligned and intentional.' },
                  { title: 'Technical Documentation', desc: 'Detailed drawings and specifications to guide a precise and seamless execution.' },
                  { title: 'Implementation Guidance', desc: 'Ongoing support and expert direction throughout the execution process.' },
                  { title: 'Final Styling', desc: 'Curated finishing touches that bring the space together into a polished, elevated result.' },
                ].map(({ title, desc }) => (
                  <div key={title}>
                    <div style={{ height: '0.5px', background: 'rgba(238,235,231,0.1)' }} />
                    <div style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}>
                      <p style={{ color: 'rgba(238,235,231,0.78)', fontSize: '0.82rem', lineHeight: 1.4, letterSpacing: '0.02em', fontFamily: 'var(--font-serif)', marginBottom: '0.35rem' }}>
                        {title}
                      </p>
                      <p style={{ color: 'rgba(238,235,231,0.45)', fontSize: '0.78rem', lineHeight: 1.75, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
                <div style={{ height: '0.5px', background: 'rgba(238,235,231,0.1)' }} />
              </div>
              <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <p style={{ color: 'rgba(238,235,231,0.62)', fontSize: '0.82rem', lineHeight: 1.85, fontFamily: 'var(--font-sans)', fontWeight: 300, marginBottom: '0.5rem' }}>
                  Every project is uniquely tailored to reflect your space, vision, scope, and desired level of involvement.
                </p>
                <p style={{ color: 'rgba(238,235,231,0.62)', fontSize: '0.82rem', lineHeight: 1.85, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                  Following your discovery call, we prepare a detailed proposal outlining the project scope, design phases, and overall investment.
                </p>
              </div>
              <Link href="/connect" className="btn-light" style={{ display: 'inline-block' }}>
                Start Your Project
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="t-label" style={{ color: 'rgba(238,235,231,0.38)', letterSpacing: '0.26em', marginBottom: '2rem' }}>
                Client Journey
              </p>
              <FullDesignPhases />
            </AnimateOnScroll>
          </div>

          {/* Bottom image pair */}
          <AnimateOnScroll>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              style={{ marginTop: 'clamp(3.5rem, 6vw, 6rem)' }}
            >
              {['/images/services/full-service/12.png', '/images/services/full-service/13.png'].map((src, i) => (
                <div key={i} style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image
                    src={src}
                    alt="ARQMA full-service interior design detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(81,44,50,0.12)' }} />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CURATED PARTNERSHIPS (cream) — Service 04 ─────────── */}
      <section
        id="curated-partnerships"
        className="section-pad-xl"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Curated partnerships service"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <div style={{ borderBottom: '1px solid rgba(66,53,44,0.1)', paddingBottom: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              <p className="t-label" style={{ color: 'var(--color-taupe)', letterSpacing: '0.26em', marginBottom: '1.25rem' }}>
                Service 04
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
                <div>
                  <h2 className="t-heading font-serif" style={{ color: 'var(--color-espresso)', marginBottom: '0.75rem' }}>
                    Curated Partnerships
                  </h2>
                  <p className="t-label" style={{ color: 'var(--color-wine)', letterSpacing: '0.22em' }}>
                    Partnerships with Builders &amp; Contractors
                  </p>
                </div>
                <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '480px', lineHeight: 2 }}>
                  We believe the best projects happen through strong collaboration.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '680px', lineHeight: 2.1, marginBottom: '1.25rem' }}>
              At ARQMA, we work alongside builders and contractors to ensure that design and execution are fully aligned — creating a smoother process, better results, and a more efficient experience for everyone involved.
            </p>
            <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '680px', lineHeight: 2.1, marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              Whether you already have a project in mind or are looking to establish a long-term partnership, we&apos;re open to building a workflow that supports both your team and your clients.
            </p>
          </AnimateOnScroll>

          {/* Editorial image */}
          <AnimateOnScroll>
            <div style={{ width: '100%', height: 'clamp(220px, 28vw, 420px)', position: 'relative', overflow: 'hidden', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
              <Image
                src="/images/projects/wellthera/RP409155.jpg"
                alt="ARQMA curated partnership interior design"
                fill
                className="object-cover"
                sizes="90vw"
                style={{ objectPosition: 'center 55%' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(66,53,44,0.08)' }} />
            </div>
          </AnimateOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(3rem, 8vw, 8rem)' }}>
            <AnimateOnScroll>
              {/* How We Work Together */}
              <p className="t-label" style={{ color: 'rgba(66,53,44,0.4)', letterSpacing: '0.24em', marginBottom: '1rem' }}>How We Work Together</p>
              <p className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                Every collaboration is tailored to the project and team involved.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
                {[
                  'We align early to understand your process and project needs',
                  'We adapt our design workflow to integrate seamlessly with your execution',
                  'We support decision-making to keep projects moving efficiently',
                  'We provide clear documentation and guidance to reduce friction on site',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', listStyle: 'none' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.65rem', width: '1.25rem', height: '1px', background: 'var(--color-wine)', opacity: 0.45, display: 'block' }} />
                    <span className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.9, marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
                The goal is simple: make your work easier, while elevating the final result.
              </p>

              {/* For Your Clients */}
              <p className="t-label" style={{ color: 'rgba(66,53,44,0.4)', letterSpacing: '0.24em', marginBottom: '1rem' }}>For Your Clients</p>
              <p className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                Our role is to enhance your client experience by:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
                {[
                  'Helping them make confident design decisions',
                  'Creating cohesive, well-thought-out spaces',
                  'Reducing uncertainty during the process',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', listStyle: 'none' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.65rem', width: '1.25rem', height: '1px', background: 'var(--color-wine)', opacity: 0.45, display: 'block' }} />
                    <span className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.9 }}>
                This leads to smoother projects and more satisfied clients.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              {/* What We Bring */}
              <p className="t-label" style={{ color: 'rgba(66,53,44,0.4)', letterSpacing: '0.24em', marginBottom: '1rem' }}>What We Bring</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  'Clear and buildable design solutions',
                  'Thoughtful planning that supports real-world execution',
                  'Ongoing communication throughout the project',
                  'Support during implementation when needed',
                ].map((item, i, arr) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      listStyle: 'none',
                      paddingTop: '1.1rem',
                      paddingBottom: '1.1rem',
                      borderBottom: i < arr.length - 1 ? '1px solid rgba(66,53,44,0.08)' : 'none',
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: '0.65rem', width: '1.25rem', height: '1px', background: 'var(--color-wine)', opacity: 0.45, display: 'block' }} />
                    <span className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.8 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'clamp(2.5rem, 4vw, 4rem)' }}>
                <p className="t-label" style={{ color: 'rgba(66,53,44,0.4)', letterSpacing: '0.24em', marginBottom: '1rem' }}>Let&apos;s Work Together</p>
                <p className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 2, marginBottom: '1.25rem' }}>
                  If you&apos;re a builder or contractor looking for a design partner, we&apos;d love to connect. We&apos;re happy to walk through your process, understand your needs, and define a collaboration that works for both your team and your clients.
                </p>
                <p className="t-label" style={{ color: 'rgba(66,53,44,0.4)', letterSpacing: '0.24em', marginBottom: '0.75rem' }}>Investment</p>
                <p className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.9, marginBottom: '0.5rem' }}>
                  Every project is uniquely tailored to reflect your space, vision, and desired level of involvement.
                </p>
                <p className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.9, marginBottom: 'clamp(2rem, 3vw, 3rem)' }}>
                  Following your discovery call, we prepare a detailed proposal outlining scope, design phases, and overall investment.
                </p>
                <Link href="/connect" className="btn-primary" style={{ display: 'inline-block' }}>
                  Get in Touch
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>


      {/* ── FLEXIBLE TO YOUR PROJECT (wine) ──────────────────── */}
      <section
        style={{ background: 'var(--color-wine)', paddingTop: 'clamp(5rem, 9vw, 8rem)', paddingBottom: 'clamp(5rem, 9vw, 8rem)' }}
        aria-label="Flexible services"
      >
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }}>
            <AnimateOnScroll>
              <p className="t-label mb-5" style={{ color: 'rgba(238,235,231,0.45)' }}>
                Flexible to Your Project
              </p>
              <h2 className="t-heading font-serif mb-6" style={{ color: 'var(--color-cream)', lineHeight: 1.1 }}>
                Not sure which service fits your needs?
              </h2>
              <p className="t-body" style={{ color: 'rgba(238,235,231,0.68)', lineHeight: 2.1 }}>
                Our services are designed to adapt — to the scale, timeline, and vision of each
                individual project. We&apos;re happy to discuss your specific goals and help you
                identify the right approach. Whether remote or in-person, we make the process
                clear and straightforward from the very first conversation.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  'Available in-person across Ontario',
                  'Remote services across Canada & the USA',
                  'Services can be combined and adapted',
                  'Clear process from first contact to delivery',
                ].map((point, i, arr) => (
                  <div
                    key={point}
                    style={{
                      paddingTop: '1.4rem',
                      paddingBottom: '1.4rem',
                      borderBottom: i < arr.length - 1 ? '0.5px solid rgba(238,235,231,0.1)' : 'none',
                      display: 'flex',
                      gap: '1.25rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: '0.55rem', width: '1rem', height: '1px', background: 'rgba(238,235,231,0.35)', display: 'block' }} />
                    <span style={{ color: 'rgba(238,235,231,0.7)', fontSize: '0.88rem', lineHeight: 1.7, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative section-pad-xl overflow-hidden"
        aria-label="Get started"
      >
        <Image
          src="/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-5.jpg"
          alt="ARQMA interior design Toronto"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.62)' }} />

        <div className="container-narrow relative z-10 text-center">
          <AnimateOnScroll>
            <p className="mb-6" style={{ color: 'rgba(238,235,231,0.7)', fontSize: '0.82rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
              Not sure which service is right for you?
            </p>
            <h2 className="t-hero font-serif italic mb-10" style={{ color: 'var(--color-cream)' }}>
              Let&apos;s design a space that elevates your business.
            </h2>
            <p className="t-body mb-12" style={{ color: 'rgba(238,235,231,0.68)', maxWidth: '480px', margin: '0 auto 3rem', lineHeight: 2 }}>
              Fill out our brief form and we&apos;ll recommend the most suitable service
              for your goals and timeline.
            </p>
            <Link href="/connect" className="btn-light">
              Start Your Project
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
