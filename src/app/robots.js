import { MetadataRoute } from 'next'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://manyamfoods.com/sitemap.xml',
  }
}
