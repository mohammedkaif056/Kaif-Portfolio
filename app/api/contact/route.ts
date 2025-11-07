import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, captchaToken } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Verify hCaptcha token
    if (process.env.HCAPTCHA_SECRET_KEY) {
      const captchaResponse = await fetch(
        'https://hcaptcha.com/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `response=${captchaToken}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
        }
      )

      const captchaData = await captchaResponse.json()

      if (!captchaData.success) {
        return NextResponse.json(
          { error: 'Invalid CAPTCHA' },
          { status: 400 }
        )
      }
    }

    // Here you can integrate with your email service
    // Examples: SendGrid, Resend, Nodemailer, etc.
    
    // Example with console log (replace with actual email service):
    console.log('Contact Form Submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Example: Send email using SendGrid
    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // await sgMail.send({
    //   to: process.env.CONTACT_EMAIL,
    //   from: process.env.SENDGRID_VERIFIED_SENDER,
    //   subject: `Portfolio Contact: ${subject}`,
    //   text: `From: ${name} (${email})\n\n${message}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    // })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
