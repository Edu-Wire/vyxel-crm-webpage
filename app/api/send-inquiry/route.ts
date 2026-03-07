import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { to, from, subject, text } = body

    if (!to || !from || !subject || !text) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(from) || !emailRegex.test(to)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPortRaw = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpHost || !smtpPortRaw || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error: 'SMTP is not configured',
          message: 'Missing SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS in environment',
        },
        { status: 500 }
      )
    }

    const smtpPort = Number.parseInt(smtpPortRaw, 10)
    if (Number.isNaN(smtpPort)) {
      return NextResponse.json({ error: 'Invalid SMTP_PORT' }, { status: 500 })
    }

    // Hostinger/most SMTP servers will reject spoofed "from" addresses.
    // So we send *from* your authenticated mailbox, and set the user's email as replyTo.
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.verify()

    const info = await transporter.sendMail({
      from: `Vyxel Inquiry <${smtpUser}>`,
      to,
      subject,
      text,
      replyTo: from,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2779F0, #2AA8F3); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Inquiry</h1>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="background: white; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
              <h3 style="color: #2779F0; margin: 0 0 10px 0;">Inquiry Details</h3>
              <pre style="white-space: pre-wrap; font-family: monospace; background: #f5f5f5; padding: 10px; border-radius: 3px; margin: 0;">${text}</pre>
            </div>
            <div style="text-align: center; color: #666; font-size: 12px;">
              <p>You can reply directly to: ${from}</p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Inquiry sent successfully', messageId: info.messageId },
      { status: 200 }
    )

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      {
        error: 'Failed to send inquiry',
        message: 'Please try again later or contact us directly',
        details: errorMessage,
      },
      { status: 500 }
    )
  }
}
