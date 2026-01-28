export const runtime = 'edge';

import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json();

  // Email is now a NO-OP but won't crash
  await sendEmail(body);

  return Response.json({
    success: true,
    message: "Contact request received",
  });
}

/* import { NextResponse } from "next/server"
import { ContactDatabase } from "@/lib/database"


export async function GET(request: Request) {
  try {
    // Check if database is available
    if (!ContactDatabase.isDatabaseAvailable()) {
      return NextResponse.json({ success: false, error: "Database not configured" }, { status: 503 })
    }

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "50", 10)
    const offset = Number.parseInt(searchParams.get("offset") || "0", 10)

    // Get contacts from database
    const result = await ContactDatabase.getAllContacts(limit, offset)

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      data: result.data,
    })
  } catch (error) {
    console.error("Error in contacts API:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
} */
