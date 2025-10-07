import { kv } from '@vercel/kv'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, role } = await request.json()

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate role
    const validRoles = ['hr-professional', 'startup-founder', 'enterprise-executive', 'legal-counsel', 'other']
    if (!role || !validRoles.includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role selection' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingEntry = await kv.get(`waitlist:${email}`)
    if (existingEntry) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    // Store the waitlist entry
    const waitlistEntry = {
      email,
      role,
      timestamp: Date.now(),
      ip: request.ip || 'unknown'
    }

    await kv.set(`waitlist:${email}`, waitlistEntry)

    // Also add to a list for easy retrieval
    await kv.lpush('waitlist:all', email)

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist!'
    })

  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve waitlist (for admin purposes)
export async function GET() {
  try {
    const emails = await kv.lrange('waitlist:all', 0, -1)
    const waitlistData = []
    
    for (const email of emails) {
      const entry = await kv.get(`waitlist:${email}`)
      if (entry) {
        waitlistData.push(entry)
      }
    }

    return NextResponse.json({
      success: true,
      data: waitlistData,
      count: waitlistData.length
    })
  } catch (error) {
    console.error('Waitlist retrieval error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
