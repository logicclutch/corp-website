import { cookies } from "next/headers"
import { v4 as uuidv4 } from "uuid"

const SESSION_COOKIE_NAME = "logic_clutch_session_id"
const SESSION_DURATION_DAYS = 30

export async function getOrCreateSessionId(): Promise<string | null> {
  try {
    const cookieStore = cookies()

    // Try to get existing session ID
    let sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value

    // If no session ID exists, create a new one
    if (!sessionId) {
      sessionId = uuidv4()

      // Set the session cookie
      cookieStore.set({
        name: SESSION_COOKIE_NAME,
        value: sessionId,
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * SESSION_DURATION_DAYS, // 30 days
        sameSite: "lax",
      })
    }

    return sessionId
  } catch (error) {
    console.error("Error managing session:", error)
    return null
  }
}

export async function getSessionId(): Promise<string | null> {
  try {
    const cookieStore = cookies()
    return cookieStore.get(SESSION_COOKIE_NAME)?.value || null
  } catch (error) {
    console.error("Error getting session ID:", error)
    return null
  }
}
