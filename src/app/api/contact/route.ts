import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type { ContactFormData } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase environment variables')
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

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
    } = body

    // Validate required fields
    if (
      !full_name ||
      !email ||
      !phone ||
      !project_type ||
      !space_type ||
      !project_description ||
      !current_stage ||
      !investment_range ||
      !start_timeline ||
      !priority ||
      !referral_source
    ) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const submission: Omit<ContactFormData, 'id' | 'created_at' | 'status'> = {
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
    }

    const { error } = await supabase
      .from('contact_submissions')
      .insert([submission])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to save your submission. Please try again.' },
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
