"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Eye, Brain, Zap, CheckCircle, ArrowRight, Construction } from "lucide-react"

interface WhatsAppAICardProps {
  phoneNumber: string
}

export default function WhatsAppAICard({ phoneNumber }: WhatsAppAICardProps) {
  const handleWhatsAppClick = (message: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const aiSolutions = [
    {
      icon: <Eye className="h-5 w-5 text-primary" />,
      title: "LogicEye AI Analytics",
      description: "Computer Vision AI for real-time analytics and insights",
      message: "I'm interested in LogicEye AI Analytics for computer vision solutions",
    },
    {
      icon: <Construction className="h-5 w-5 text-primary" />,
      title: "ITMS Traffic Management",
      description: "Intelligent Traffic Management System for smart cities",
      message: "Tell me about ITMS - Intelligent Traffic Management System",
    },
    {
      icon: <Brain className="h-5 w-5 text-primary" />,
      title: "Custom AI Development",
      description: "Tailored AI solutions for your specific business needs",
      message: "I need custom AI development for my business requirements",
    },
  ]

  return (
    <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-xl text-green-800">AI Solutions via WhatsApp</CardTitle>
            <p className="text-sm text-green-600">Get instant AI consultation</p>
          </div>
        </div>
        <Badge variant="secondary" className="w-fit bg-green-100 text-green-700 border-green-200">
          <Zap className="h-3 w-3 mr-1" />
          AI-Powered Support
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {aiSolutions.map((solution, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-100 hover:border-green-200 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">{solution.icon}</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 text-sm">{solution.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{solution.description}</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleWhatsAppClick(solution.message)}
                className="flex-shrink-0 text-green-600 hover:text-green-700 hover:bg-green-100 p-2"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-green-700">
              <CheckCircle className="h-4 w-4" />
              <span>Expert AI consultation available</span>
            </div>
            <Button
              onClick={() =>
                handleWhatsAppClick(
                  "Hi! I'm interested in learning more about Logic Clutch's AI solutions and would like to schedule a consultation.",
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white"
              size="sm"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat Now
            </Button>
          </div>
        </div>

        <div className="text-center pt-2">
          <p className="text-xs text-gray-500">
            💬 Get instant responses about Computer Vision AI, LogicEye Analytics, and ITMS solutions
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
