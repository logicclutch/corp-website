
import { NextResponse } from "next/server"
import { ContactDatabase } from "@/lib/database"

export async function GET() {
  try {
    // Check if database is available
    if (!ContactDatabase.isDatabaseAvailable()) {
      return NextResponse.json({ success: false, error: "Database not configured" }, { status: 503 })
    }

    // Get analytics data
    const result = await ContactDatabase.getDraftAnalytics()

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      data: result.data,
    })
  } catch (error) {
    console.error("Error in analytics API:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
