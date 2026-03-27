import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactFormData = {
  id?: string
  created_at?: string
  full_name: string
  email: string
  phone: string
  project_type: string
  space_type: string
  project_description: string
  current_stage: string
  investment_range: string
  start_timeline: string
  priority: string
  referral_source: string
  status?: string
}

export type NewsletterData = {
  id?: string
  created_at?: string
  first_name: string
  email: string
}
