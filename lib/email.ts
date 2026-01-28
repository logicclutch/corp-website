// lib/email.ts

export async function sendEmail(_data: any) {
  // TEMPORARILY DISABLED FOR CLOUDFLARE EDGE
  // TODO: Replace with Edge-safe email provider (Resend / SendGrid / Worker)
  console.log("📭 Email temporarily disabled");
  return { success: true };
}

/*import nodemailer from "nodemailer"

// Email configuration
interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
  from: string
}

// Get email configuration from environment variables
function getEmailConfig(): EmailConfig | null {
  try {
    // Check for required environment variables
    const requiredVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "FROM_EMAIL"]
    const missingVars = requiredVars.filter((varName) => !process.env[varName])

    if (missingVars.length > 0) {
      console.error(`Missing required environment variables: ${missingVars.join(", ")}`)
      return null
    }

    // Parse SMTP_SECURE as boolean
    const secureValue = process.env.SMTP_SECURE?.toLowerCase()
    const secure = secureValue === "true" || secureValue === "1" || secureValue === "yes"

    // Parse SMTP_PORT as number
    const port = Number.parseInt(process.env.SMTP_PORT || "587", 10)

    return {
      host: process.env.SMTP_HOST!,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASSWORD!,
      },
      from: process.env.FROM_EMAIL!,
    }
  } catch (error) {
    console.error("Error getting email configuration:", error)
    return null
  }
}

// Create a transporter
function createTransporter() {
  const config = getEmailConfig()

  if (!config) {
    console.error("Email configuration is not available")
    return null
  }

  try {
    return nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    })
  } catch (error) {
    console.error("Error creating email transporter:", error)
    return null
  }
}

// Verify SMTP connection
export async function verifyEmailConfig(): Promise<{ success: boolean; message: string; config?: any }> {
  try {
    const config = getEmailConfig()

    if (!config) {
      return {
        success: false,
        message: "Email configuration is not available. Check environment variables.",
      }
    }

    const transporter = createTransporter()

    if (!transporter) {
      return {
        success: false,
        message: "Failed to create email transporter",
      }
    }

    // Verify connection configuration
    await transporter.verify()

    // Return success with sanitized config (no password)
    const sanitizedConfig = {
      host: config.host,
      port: config.port,
      secure: config.secure,
      user: config.auth.user,
      from: config.from,
    }

    return {
      success: true,
      message: "SMTP connection verified successfully",
      config: sanitizedConfig,
    }
  } catch (error) {
    console.error("SMTP verification failed:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error verifying SMTP connection",
    }
  }
}

// Interface for email data
interface EmailData {
  to: string
  subject: string
  text: string
  html: string
}

// Send email
export async function sendEmail(
  emailData: EmailData,
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const config = getEmailConfig()

    if (!config) {
      return { success: false, error: "Email configuration is not available" }
    }

    const transporter = createTransporter()

    if (!transporter) {
      return { success: false, error: "Failed to create email transporter" }
    }

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: config.from,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    })

    console.log("Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error sending email",
    }
  }
}

// Test email sending
export async function testEmailSending(): Promise<{ success: boolean; result?: any; error?: string }> {
  try {
    const config = getEmailConfig()

    if (!config) {
      return { success: false, error: "Email configuration is not available" }
    }

    // Create test email content
    const testSubject = "Logic Clutch Email Test"
    const timestamp = new Date().toISOString()

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://logicclutch.com/images/logic-clutch-logo.png" alt="Logic Clutch Logo" style="max-width: 200px;">
        </div>
        <h2 style="color: #333; text-align: center;">Email System Test</h2>
        <p>This is a test email from the Logic Clutch website.</p>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
        <p><strong>SMTP Configuration:</strong></p>
        <ul>
          <li>Host: ${config.host}</li>
          <li>Port: ${config.port}</li>
          <li>Secure: ${config.secure}</li>
          <li>User: ${config.auth.user}</li>
        </ul>
        <p>If you received this email, your email system is working correctly!</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center; color: #666; font-size: 12px;">
          <p>This is an automated test email from Logic Clutch.</p>
        </div>
      </div>
    `

    const textContent = `
      Logic Clutch Email Test
      
      This is a test email from the Logic Clutch website.
      
      Timestamp: ${timestamp}
      
      SMTP Configuration:
      - Host: ${config.host}
      - Port: ${config.port}
      - Secure: ${config.secure}
      - User: ${config.auth.user}
      
      If you received this email, your email system is working correctly!
      
      This is an automated test email from Logic Clutch.
    `

    // Send test email to the configured FROM_EMAIL address
    const result = await sendEmail({
      to: config.from,
      subject: testSubject,
      text: textContent,
      html: htmlContent,
    })

    if (!result.success) {
      return { success: false, error: result.error }
    }

    return {
      success: true,
      result: {
        messageId: result.messageId,
        recipient: config.from,
        timestamp,
      },
    }
  } catch (error) {
    console.error("Error in test email sending:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error in test email sending",
    }
  }
}
*/