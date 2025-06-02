// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, phone, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Τα πεδία όνομα, email και μήνυμα είναι υποχρεωτικά' },
        { status: 400 },
      )
    }

    // Configure nodemailer - ΣΩΣΤΟ: createTransport (όχι createTransporter)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Test connection (προαιρετικό - για debugging)
    await transporter.verify()
    console.log('SMTP connection verified')

    // Email to you (notification)
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Νέο μήνυμα από την ιστοσελίδα - ${name}`,
      html: `
        <h3>Νέο μήνυμα επικοινωνίας</h3>
        <p><strong>Όνομα:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone || 'Δεν δόθηκε'}</p>
        <p><strong>Μήνυμα:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Λάβαμε το μήνυμά σας',
      html: `
        <h3>Γεια σας ${name},</h3>
        <p>Σας ευχαριστούμε για το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.</p>
        <p>Με εκτίμηση,<br>Η ομάδα μας</p>
      `,
    })

    return NextResponse.json({ message: 'Email στάλθηκε επιτυχώς' })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ message: 'Σφάλμα κατά την αποστολή email' }, { status: 500 })
  }
}
