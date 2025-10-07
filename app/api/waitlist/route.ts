import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'

// Initialize Airtable (will use environment variables)
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID || '')

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

    // Check if Airtable is configured
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      // Fallback: just log the entry
      console.log('Waitlist signup (Airtable not configured):', {
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

    // Check if email already exists in Airtable
    try {
      const existingRecords = await base(process.env.AIRTABLE_TABLE_NAME || 'Waitlist')
        .select({
          filterByFormula: `{Email} = "${email}"`,
          maxRecords: 1
        })
        .firstPage()

      if (existingRecords.length > 0) {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 409 }
        )
      }
    } catch (error) {
      console.error('Error checking existing email:', error)
      // Continue with creation if check fails
    }

    // Create new record in Airtable
    try {
      await base(process.env.AIRTABLE_TABLE_NAME || 'Waitlist').create([
        {
          fields: {
            Email: email,
            Role: role,
            'Signup Date': new Date().toISOString(),
            'IP Address': request.ip || 'unknown'
          }
        }
      ])

      return NextResponse.json({
        success: true,
        message: 'Successfully added to waitlist!'
      })
    } catch (error) {
      console.error('Airtable creation error:', error)
      
      // Fallback: log the entry
      console.log('Waitlist signup (Airtable failed):', {
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
    // Check if Airtable is configured
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      return NextResponse.json({
        success: true,
        data: [],
        count: 0,
        message: 'Airtable not configured - data logged locally'
      })
    }

    // Retrieve all records from Airtable
    const records = await base(process.env.AIRTABLE_TABLE_NAME || 'Waitlist')
      .select({
        sort: [{ field: 'Signup Date', direction: 'desc' }]
      })
      .all()

    const waitlistData = records.map(record => ({
      id: record.id,
      email: record.get('Email'),
      role: record.get('Role'),
      signupDate: record.get('Signup Date'),
      ipAddress: record.get('IP Address')
    }))

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
