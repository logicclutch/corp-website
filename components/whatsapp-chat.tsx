"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, Clock } from "lucide-react"

interface WhatsAppChatProps {
  phoneNumber: string
  businessName?: string
}

export default function WhatsAppChat({ phoneNumber, businessName = "Logic Clutch" }: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState("")

  // Quick message suggestions (shortened list)
  const quickMessages = [
    "Tell me about Computer Vision AI solutions",
    "I'm interested in LogicEye AI Analytics",
    "I want to know about ITMS Traffic Management",
    "Tell me about Salesforce implementation",
    "Schedule a consultation call",
  ]

  const handleQuickMessage = (message: string) => {
    setSelectedMessage(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  const handleCustomMessage = () => {
    if (selectedMessage.trim()) {
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(selectedMessage)}`
      window.open(whatsappUrl, "_blank")
      setIsOpen(false)
      setSelectedMessage("")
    }
  }

  // Auto-close after 30 seconds of inactivity
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 30000)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-green-500 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-medium">{businessName}</CardTitle>
                    <div className="flex items-center gap-1 text-xs opacity-90">
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                      Online now
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 max-h-96 overflow-y-auto">
              {/* Welcome Message */}
              <div className="p-4 border-b bg-gray-50">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm text-gray-800">
                        👋 Hi! I'm here to help you with AI solutions, Computer Vision, and technology consulting.
                      </p>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Typically replies instantly
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Messages */}
              <div className="p-4 space-y-3">
                <p className="text-sm font-medium text-gray-700 mb-3">Quick questions:</p>
                {quickMessages.map((message, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickMessage(message)}
                    className="w-full text-left justify-start h-auto p-3 text-sm hover:bg-green-50 hover:border-green-200"
                  >
                    <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0 text-green-500" />
                    <span className="text-wrap">{message}</span>
                  </Button>
                ))}
              </div>

              {/* Custom Message Input */}
              <div className="p-4 border-t bg-gray-50">
                <div className="space-y-3">
                  <textarea
                    value={selectedMessage}
                    onChange={(e) => setSelectedMessage(e.target.value)}
                    placeholder="Type your custom message..."
                    className="w-full p-3 border rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={3}
                  />
                  <Button
                    onClick={handleCustomMessage}
                    disabled={!selectedMessage.trim()}
                    className="w-full bg-green-500 hover:bg-green-600"
                    size="sm"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 bg-gray-100 text-center">
                <p className="text-xs text-gray-500">Powered by WhatsApp Business</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
