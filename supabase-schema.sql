-- ARQMA Website — Supabase Schema
-- Run this in your Supabase SQL Editor at:
-- https://qxhidxkpqzgyvcrsptzs.supabase.co

-- ─── Contact Form Submissions ────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_submissions (
  id               UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at       TIMESTAMPTZ DEFAULT NOW(),
  full_name        TEXT NOT NULL,
  email            TEXT NOT NULL,
  phone            TEXT,
  project_type     TEXT,
  space_type       TEXT,
  project_description TEXT,
  current_stage    TEXT,
  investment_range TEXT,
  start_timeline   TEXT,
  priority         TEXT,
  referral_source  TEXT,
  status           TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed'))
);

-- RLS: only service role can read/write
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon (website form)
CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated (admin) can read
CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT TO authenticated USING (true);

-- ─── Newsletter Subscribers ───────────────────────────────────
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  first_name TEXT,
  email      TEXT NOT NULL UNIQUE,
  active     BOOLEAN DEFAULT true
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON newsletter_subscribers
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON newsletter_subscribers
  FOR SELECT TO authenticated USING (true);

-- ─── Indexes ─────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- ─── View: Contact submissions summary ───────────────────────
CREATE OR REPLACE VIEW contact_summary AS
SELECT
  id,
  created_at,
  full_name,
  email,
  phone,
  project_type,
  space_type,
  investment_range,
  start_timeline,
  status
FROM contact_submissions
ORDER BY created_at DESC;
