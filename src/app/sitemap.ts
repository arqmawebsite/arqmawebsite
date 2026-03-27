import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

const baseUrl = 'https://www.arqma.ca'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/projects`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/testimonials`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/connect`, priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  return [
    ...staticPages.map((p) => ({
      url: p.url,
      lastModified: new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...projectPages.map((p) => ({
      url: p.url,
      lastModified: new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
  ]
}
