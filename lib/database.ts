import { neon } from "@neondatabase/serverless"

// Check if DATABASE_URL is available
const getDatabaseConnection = () => {
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL environment variable is not set. Database features will be disabled.")
    return null
  }

  try {
    return neon(process.env.DATABASE_URL)
  } catch (error) {
    console.error("Failed to create database connection:", error)
    return null
  }
}

const sql = getDatabaseConnection()

export interface ContactData {
  id?: number
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  status?: string
  created_at?: string
  updated_at?: string
}

export interface ContactDraftData {
  id?: number
  session_id: string
  name?: string
  email?: string
  company?: string
  phone?: string
  subject?: string
  message?: string
  form_completion_percentage?: number
  last_field_updated?: string
  created_at?: string
  updated_at?: string
}

export class ContactDatabase {
  // Check if database is available
  static isDatabaseAvailable(): boolean {
    return sql !== null
  }

  // Save final contact submission
  static async saveContact(data: ContactData): Promise<{ success: boolean; id?: number; error?: string }> {
    if (!sql) {
      console.warn("Database not available, skipping contact save")
      return { success: false, error: "Database not configured" }
    }

    try {
      const result = await sql`
        INSERT INTO contacts (name, email, company, phone, subject, message, status)
        VALUES (${data.name}, ${data.email}, ${data.company || ""}, ${data.phone || ""}, ${data.subject}, ${data.message}, 'new')
        RETURNING id
      `

      return { success: true, id: result[0]?.id }
    } catch (error) {
      console.error("Error saving contact:", error)
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
  }

  // Save or update draft data
  static async saveDraft(data: ContactDraftData): Promise<{ success: boolean; error?: string }> {
    if (!sql) {
      console.warn("Database not available, skipping draft save")
      return { success: false, error: "Database not configured" }
    }

    try {
      // Calculate form completion percentage
      const fields = ["name", "email", "subject", "message"]
      const filledFields = fields.filter(
        (field) =>
          data[field as keyof ContactDraftData] && String(data[field as keyof ContactDraftData]).trim().length > 0,
      )
      const completionPercentage = Math.round((filledFields.length / fields.length) * 100)

      await sql`
        INSERT INTO contact_drafts (
          session_id, name, email, company, phone, subject, message, 
          form_completion_percentage, last_field_updated
        )
        VALUES (
          ${data.session_id}, ${data.name || ""}, ${data.email || ""}, 
          ${data.company || ""}, ${data.phone || ""}, ${data.subject || ""}, 
          ${data.message || ""}, ${completionPercentage}, ${data.last_field_updated || ""}
        )
        ON CONFLICT (session_id) 
        DO UPDATE SET
          name = EXCLUDED.name,
          email = EXCLUDED.email,
          company = EXCLUDED.company,
          phone = EXCLUDED.phone,
          subject = EXCLUDED.subject,
          message = EXCLUDED.message,
          form_completion_percentage = EXCLUDED.form_completion_percentage,
          last_field_updated = EXCLUDED.last_field_updated,
          updated_at = CURRENT_TIMESTAMP
      `

      return { success: true }
    } catch (error) {
      console.error("Error saving draft:", error)
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
  }

  // Get draft data by session ID
  static async getDraft(sessionId: string): Promise<{ success: boolean; data?: ContactDraftData; error?: string }> {
    if (!sql) {
      console.warn("Database not available, returning empty draft")
      return { success: true, data: null }
    }

    try {
      const result = await sql`
        SELECT * FROM contact_drafts 
        WHERE session_id = ${sessionId}
        ORDER BY updated_at DESC 
        LIMIT 1
      `

      return { success: true, data: result[0] || null }
    } catch (error) {
      console.error("Error getting draft:", error)
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
  }

  // Get all contacts (for admin purposes)
  static async getAllContacts(
    limit = 50,
    offset = 0,
  ): Promise<{ success: boolean; data?: ContactData[]; error?: string }> {
    if (!sql) {
      return { success: false, error: "Database not configured" }
    }

    try {
      const result = await sql`
        SELECT * FROM contacts 
        ORDER BY created_at DESC 
        LIMIT ${limit} OFFSET ${offset}
      `

      return { success: true, data: result }
    } catch (error) {
      console.error("Error getting contacts:", error)
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
  }

  // Get draft analytics
  static async getDraftAnalytics(): Promise<{
    success: boolean
    data?: {
      total_drafts: number
      avg_completion: number
      abandoned_forms: number
      completed_forms: number
    }
    error?: string
  }> {
    if (!sql) {
      return { success: false, error: "Database not configured" }
    }

    try {
      const result = await sql`
        SELECT 
          COUNT(*) as total_drafts,
          ROUND(AVG(form_completion_percentage), 2) as avg_completion,
          COUNT(CASE WHEN form_completion_percentage < 100 THEN 1 END) as abandoned_forms,
          COUNT(CASE WHEN form_completion_percentage = 100 THEN 1 END) as completed_forms
        FROM contact_drafts
        WHERE updated_at > NOW() - INTERVAL '30 days'
      `

      return { success: true, data: result[0] }
    } catch (error) {
      console.error("Error getting draft analytics:", error)
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
  }
}

export { sql }
