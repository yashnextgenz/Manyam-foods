import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const subscriptions = await db.newsletterSubscription.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })

    return NextResponse.json({ success: true, data: subscriptions })
  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch subscriptions' },
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

  const { email } = body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, error: 'Please provide a valid email address' },
      { status: 400 }
    )
  }

  try {
    const subscription = await db.newsletterSubscription.create({
      data: { email },
    })

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!', id: subscription.id },
      { status: 201 }
    )
  } catch (error) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { success: true, message: 'You are already subscribed!' },
        { status: 200 }
      )
    }
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { success: false, error: 'Subscription failed. Please try again.' },
      { status: 500 }
    )
  }
}