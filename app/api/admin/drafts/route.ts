import { NextResponse } from "next/server"
import { sql } from "@/lib/database"

export async function GET() {
  try {
    const result = await sql`
      SELECT * FROM contact_drafts 
      ORDER BY updated_at DESC 
      LIMIT 100
    `

    return NextResponse.json({
      success: true,
      data: result,
      count: result.length,
    })
  } catch (error) {
    console.error("Admin drafts API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch drafts",
        error: error instanceof Error ? error.message : "Unknown error",
        data: [],
      },
      { status: 500 },
    )
  }
}
