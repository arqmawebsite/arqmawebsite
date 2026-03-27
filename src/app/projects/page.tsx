import type { Metadata } from 'next'
import ProjectsGallery from '@/components/ProjectsGallery'

export const metadata: Metadata = {
  title: 'Projects — ARQMA Interior Design Toronto',
  description:
    'Browse ARQMA\'s portfolio of residential and commercial interior design projects in Toronto. Thoughtfully curated spaces that reflect each client\'s individuality.',
  alternates: { canonical: 'https://www.arqma.ca/projects' },
}

export default function ProjectsPage() {
  return <ProjectsGallery />
}
