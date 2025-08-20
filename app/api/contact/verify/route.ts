export const runtime = "edge";

import { NextResponse } from "next/server"
import { verifyEmailConfig } from "@/lib/email"

export async function GET() {
  try {
    const result = await verifyEmailConfig()

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      config: result.config,
    })
  } catch (error) {
    console.error("Error in email verification API:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
