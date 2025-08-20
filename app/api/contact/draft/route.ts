import { NextResponse } from "next/server"
import { ContactDatabase, type ContactDraftData } from "@/lib/database"
import { getOrCreateSessionId } from "@/lib/session"

// GET: Retrieve draft data for the current session
export async function GET(request: Request) {
  try {
    // Get session ID from cookies
    const sessionId = await getOrCreateSessionId()

    if (!sessionId) {
      return NextResponse.json({ success: false, error: "Session ID not available" }, { status: 400 })
    }

    // Get draft data from database
    const result = await ContactDatabase.getDraft(sessionId)

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      data: result.data || null,
    })
  } catch (error) {
    console.error("Error retrieving draft:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

// POST: Save draft data for the current session
export async function POST(request: Request) {
  try {
    // Get session ID from cookies
    const sessionId = await getOrCreateSessionId()

    if (!sessionId) {
      return NextResponse.json({ success: false, error: "Session ID not available" }, { status: 400 })
    }

    // Get form data from request
    const formData = await request.json()

    // Prepare draft data
    const draftData: ContactDraftData = {
      session_id: sessionId,
      ...formData,
    }

    // Save draft to database
    const result = await ContactDatabase.saveDraft(draftData)

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error("Error saving draft:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
