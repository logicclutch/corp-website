import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"
import { ContactDatabase, type ContactData } from "@/lib/database"
import { getSessionId } from "@/lib/session"

// Validate contact form data
function validateContactData(data: any): { valid: boolean; errors?: Record<string, string> } {
  const errors: Record<string, string> = {}

  // Required fields
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name is required (minimum 2 characters)"
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Valid email address is required"
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = "Subject is required (minimum 3 characters)"
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message is required (minimum 10 characters)"
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors: Object.keys(errors).length > 0 ? errors : undefined,
  }
}

// Generate HTML email template for admin notification
function generateAdminEmailTemplate(data: ContactData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://logicclutch.com/images/logic-clutch-logo.png" alt="Logic Clutch Logo" style="max-width: 200px;">
      </div>
      <h2 style="color: #333; text-align: center;">New Contact Form Submission</h2>
      <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space: pre-wrap; background-color: #fff; padding: 10px; border-radius: 3px; border: 1px solid #eee;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
      </div>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center; color: #666; font-size: 12px;">
        <p>This message was sent from the contact form on the Logic Clutch website.</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
      </div>
    </div>
  `
}

// Generate HTML email template for auto-reply
function generateAutoReplyTemplate(data: ContactData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://logicclutch.com/images/logic-clutch-logo.png" alt="Logic Clutch Logo" style="max-width: 200px;">
      </div>
      <h2 style="color: #333; text-align: center;">Thank You for Contacting Us</h2>
      <p>Dear ${data.name},</p>
      <p>Thank you for reaching out to Logic Clutch. We have received your message regarding "${data.subject}".</p>
      <p>Our team will review your inquiry and get back to you as soon as possible, typically within 1-2 business days.</p>
      <p>For your reference, here's a copy of your message:</p>
      <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 5px; white-space: pre-wrap;">
        ${data.message.replace(/\n/g, "<br>")}
      </div>
      <p>If you have any urgent matters, please feel free to call us directly.</p>
      <p>Best regards,<br>The Logic Clutch Team</p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center; color: #666; font-size: 12px;">
        <p>This is an automated response to your contact form submission on the Logic Clutch website.</p>
        <p>© ${new Date().getFullYear()} Logic Clutch. All rights reserved.</p>
      </div>
    </div>
  `
}

// GET: Health check endpoint
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Contact API is operational",
  })
}

// POST: Handle contact form submission
export async function POST(request: Request) {
  try {
    // Get form data from request
    const formData = await request.json()

    // Validate form data
    const validation = validateContactData(formData)

    if (!validation.valid) {
      return NextResponse.json({ success: false, errors: validation.errors }, { status: 400 })
    }

    // Prepare contact data
    const contactData: ContactData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company?.trim() || "",
      phone: formData.phone?.trim() || "",
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }

    // Save to database if available
    if (ContactDatabase.isDatabaseAvailable()) {
      const dbResult = await ContactDatabase.saveContact(contactData)

      if (!dbResult.success) {
        console.warn("Failed to save contact to database:", dbResult.error)
        // Continue with email sending even if database save fails
      }
    }

    // Get session ID to clean up draft if needed
    const sessionId = await getSessionId()

    // Send admin notification email
    const adminEmailContent = generateAdminEmailTemplate(contactData)
    const adminEmailResult = await sendEmail({
      to: process.env.FROM_EMAIL || "info@logicclutch.com",
      subject: `New Contact Form: ${contactData.subject}`,
      text: `New contact from ${contactData.name} (${contactData.email}): ${contactData.message}`,
      html: adminEmailContent,
    })

    if (!adminEmailResult.success) {
      console.error("Failed to send admin notification email:", adminEmailResult.error)
      return NextResponse.json(
        { success: false, error: "Failed to send your message. Please try again later." },
        { status: 500 },
      )
    }

    // Send auto-reply email
    const autoReplyContent = generateAutoReplyTemplate(contactData)
    const autoReplyResult = await sendEmail({
      to: contactData.email,
      subject: `Thank you for contacting Logic Clutch`,
      text: `Dear ${contactData.name}, Thank you for contacting Logic Clutch. We have received your message and will respond shortly.`,
      html: autoReplyContent,
    })

    if (!autoReplyResult.success) {
      console.warn("Failed to send auto-reply email:", autoReplyResult.error)
      // Continue even if auto-reply fails, as the main admin notification was sent
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon.",
    })
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return NextResponse.json(
      { success: false, error: "We're experiencing technical difficulties. Please try again later." },
      { status: 500 },
    )
  }
}
