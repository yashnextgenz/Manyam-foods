import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const submissions = await db.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })

    return NextResponse.json({ success: true, data: submissions })
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body' },
      { status: 400 }
    )
  }

  const { name, email, phone, subject, message } = body

  if (!name || !email || !phone || !subject || !message) {
    return NextResponse.json(
      { success: false, error: 'All fields are required' },
      { status: 400 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, error: 'Please provide a valid email address' },
      { status: 400 }
    )
  }

  try {
    const submission = await db.contactSubmission.create({
      data: { name, email, phone, subject, message },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been submitted successfully!',
        id: submission.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    )
  }
}