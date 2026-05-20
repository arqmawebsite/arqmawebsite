import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = 'info@arqma.ca'
const FROM_EMAIL = 'ARQMA Website <onboarding@resend.dev>'

function row(label: string, value: string | undefined) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:10px 16px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#7a6a5f;font-weight:600;white-space:nowrap;vertical-align:top;width:200px;border-bottom:1px solid #eee;">
        ${label}
      </td>
      <td style="padding:10px 16px;font-size:14px;color:#42352c;vertical-align:top;border-bottom:1px solid #eee;">
        ${value}
      </td>
    </tr>`
}

function buildHtml(b: Record<string, string>) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f5f2ee;font-family:Georgia,serif;">
  <div style="max-width:680px;margin:40px auto;background:#ffffff;border-top:4px solid #42352c;">

    <!-- Header -->
    <div style="background:#42352c;padding:32px 40px;">
      <p style="margin:0;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(238,235,231,0.5);">New Project Enquiry</p>
      <h1 style="margin:8px 0 0;font-size:26px;color:#eeebe7;font-weight:400;letter-spacing:-0.01em;">
        ${b.full_name || 'New Submission'}
      </h1>
    </div>

    <!-- Contact quick-view -->
    <div style="background:#eeebe7;padding:20px 40px;display:flex;gap:40px;">
      <div>
        <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#7a6a5f;">Email</p>
        <a href="mailto:${b.email}" style="color:#42352c;font-size:14px;text-decoration:none;">${b.email}</a>
      </div>
      ${b.phone ? `<div style="margin-left:40px;">
        <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#7a6a5f;">Phone</p>
        <a href="tel:${b.phone}" style="color:#42352c;font-size:14px;text-decoration:none;">${b.phone}</a>
      </div>` : ''}
    </div>

    <!-- All fields -->
    <table style="width:100%;border-collapse:collapse;padding:0 0 8px;">
      ${row('Service', b.project_type)}
      ${row('Space Type', b.space_type)}
      ${row('Project Location', b.project_location)}
      ${row('Current Stage', b.current_stage)}
      ${row('Start Timeline', b.start_timeline)}
      ${row('Investment Range', b.investment_range)}
      ${row('What Matters Most', b.priority)}
      ${row('Property Status', b.property_status)}
      ${row('Involvement Level', b.involvement_level)}
      ${row('How They Found Us', b.referral_source)}
    </table>

    <!-- Project description -->
    ${b.project_description ? `
    <div style="padding:24px 40px;border-top:2px solid #eee;">
      <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#7a6a5f;font-weight:600;">
        What They Want to Create
      </p>
      <p style="margin:0;font-size:15px;color:#42352c;line-height:1.75;font-style:italic;">
        "${b.project_description}"
      </p>
    </div>` : ''}

    <!-- Footer note -->
    <div style="background:#42352c;padding:20px 40px;margin-top:24px;">
      <p style="margin:0;font-size:11px;color:rgba(238,235,231,0.45);letter-spacing:0.1em;">
        Submitted via arqma.ca/connect — reply directly to this email to reach ${b.full_name}.
      </p>
    </div>
  </div>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      full_name,
      email,
      phone,
      project_type,
      space_type,
      project_description,
      current_stage,
      investment_range,
      start_timeline,
      priority,
      referral_source,
      property_status,
      involvement_level,
      project_location,
    } = body

    // Only name + email are truly required
    if (!full_name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const fields: Record<string, string> = {
      full_name,
      email,
      phone,
      project_type,
      space_type,
      project_description,
      current_stage,
      investment_range,
      start_timeline,
      priority,
      referral_source,
      property_status,
      involvement_level,
      project_location,
    }

    // Send email via Resend
    const { error: resendError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Project Enquiry — ${full_name}${project_type ? ` (${project_type})` : ''}`,
      html: buildHtml(fields),
    })

    if (resendError) {
      console.error('Resend error:', resendError)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
