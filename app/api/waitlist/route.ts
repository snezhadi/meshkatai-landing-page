import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

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

    // Check if Supabase is configured
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      // Fallback: just log the entry
      console.log('Waitlist signup (Supabase not configured):', {
        email,
        role,
        timestamp: Date.now(),
        ip: request.ip || 'unknown'
      })
      
      return NextResponse.json({
        success: true,
        message: 'Successfully added to waitlist! (Logged locally)'
      })
    }

    // Check if email already exists
    try {
      const { data: existingUser, error: selectError } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email)
        .single()

      if (existingUser && !selectError) {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 409 }
        )
      }
    } catch (error) {
      // Continue if no existing user found (this is expected for new users)
    }

    // Create new record in Supabase
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            email,
            role,
            ip_address: request.ip || 'unknown',
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase insert error:', error)
        throw error
      }

      return NextResponse.json({
        success: true,
        message: 'Successfully added to waitlist!'
      })
    } catch (error) {
      console.error('Supabase creation error:', error)
      
      // Fallback: log the entry
      console.log('Waitlist signup (Supabase failed):', {
        email,
        role,
        timestamp: Date.now(),
        ip: request.ip || 'unknown'
      })

      return NextResponse.json({
        success: true,
        message: 'Successfully added to waitlist! (Logged locally)'
      })
    }

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
    // Check if Supabase is configured
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({
        success: true,
        data: [],
        count: 0,
        message: 'Supabase not configured - data logged locally'
      })
    }

    // Retrieve all records from Supabase
    const { data: waitlistData, error } = await supabase
      .from('waitlist')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase retrieval error:', error)
      throw error
    }

    return NextResponse.json({
      success: true,
      data: waitlistData || [],
      count: waitlistData?.length || 0
    })
  } catch (error) {
    console.error('Waitlist retrieval error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
