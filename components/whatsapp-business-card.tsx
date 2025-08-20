"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Clock, CheckCircle } from "lucide-react"

interface WhatsAppBusinessCardProps {
  phoneNumber?: string
  businessName?: string
  description?: string
  features?: string[]
  className?: string
}

export default function WhatsAppBusinessCard({
  phoneNumber = "+919929790897",
  businessName = "Logic Clutch Support",
  description = "Get instant answers about AI, Computer Vision, and smart technology solutions",
  features = [
    "Computer Vision AI & LogicEye Analytics",
    "ITMS - Intelligent Traffic Management",
    "Instant response during business hours",
    "Expert AI consultation available",
    "Project discussion and quotes",
    "Technical support and guidance",
  ],
  className = "",
}: WhatsAppBusinessCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about Logic Clutch services. Can you help me?",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#25D366]/10 rounded-lg">
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{businessName}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-[#25D366] flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Available Mon-Fri: 9:00 AM - 6:00 PM IST</span>
        </div>

        <div className="flex gap-3 pt-2">
          <Button onClick={handleWhatsAppClick} className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat on WhatsApp
          </Button>
          <Button
            onClick={handleCallClick}
            variant="outline"
            size="icon"
            className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white bg-transparent"
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
