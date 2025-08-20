export const runtime = "edge";
import { NextResponse } from "next/server"
import { testEmailSending } from "@/lib/email"

export async function GET() {
  try {
    const result = await testEmailSending()

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      data: result.result,
    })
  } catch (error) {
    console.error("Error in test email API:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
