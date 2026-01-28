"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/919929790897?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
      setMessage("")
      setIsOpen(false)
    }
  }

  const quickMessages = [
    "Hi, I'd like to know more about your services",
    "Can you help with Salesforce implementation?",
    "I need custom software development",
    "Tell me about your consulting services",
  ]

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <Card className="mb-4 w-80 shadow-lg">
            <CardHeader className="bg-sky-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Chat with Logic Clutch</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-sky-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Hi! How can we help you today?</p>

                <div className="space-y-2">
                  {quickMessages.map((msg, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(msg)}
                      className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {msg}
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full p-2 text-sm border rounded-md resize-none"
                    rows={3}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="w-full bg-sky-500 hover:bg-sky-600"
                    disabled={!message.trim()}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full bg-sky-500 hover:bg-sky-600 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </>
  )
}
