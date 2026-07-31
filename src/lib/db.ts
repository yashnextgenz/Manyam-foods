type ContactSubmission = {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt: string
  updatedAt: string
}

type NewsletterSubscription = {
  id: string
  email: string
  createdAt: string
  updatedAt: string
}

const contactSubmissions: ContactSubmission[] = []
const newsletterSubscriptions: NewsletterSubscription[] = []

const now = () => new Date().toISOString()

export const db = {
  contactSubmission: {
    findMany: async ({ orderBy, take }: { orderBy?: { createdAt?: string }; take?: number } = {}) => {
      const items = [...contactSubmissions]
      if (orderBy?.createdAt === 'desc') {
        items.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      }

      return items.slice(0, take ?? items.length)
    },
    create: async ({ data }: { data: Omit<ContactSubmission, 'id' | 'createdAt' | 'updatedAt'> }) => {
      const record: ContactSubmission = {
        id: `contact-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        ...data,
        createdAt: now(),
        updatedAt: now(),
      }

      contactSubmissions.push(record)
      return record
    },
  },
  newsletterSubscription: {
    findMany: async ({ orderBy, take }: { orderBy?: { createdAt?: string }; take?: number } = {}) => {
      const items = [...newsletterSubscriptions]
      if (orderBy?.createdAt === 'desc') {
        items.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      }

      return items.slice(0, take ?? items.length)
    },
    create: async ({ data }: { data: Omit<NewsletterSubscription, 'id' | 'createdAt' | 'updatedAt'> }) => {
      const normalizedEmail = data.email.toLowerCase()
      const exists = newsletterSubscriptions.some((item) => item.email.toLowerCase() === normalizedEmail)

      if (exists) {
        const error = new Error('Duplicate email') as Error & { code?: string }
        error.code = 'P2002'
        throw error
      }

      const record: NewsletterSubscription = {
        id: `newsletter-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        ...data,
        createdAt: now(),
        updatedAt: now(),
      }

      newsletterSubscriptions.push(record)
      return record
    },
  },
}