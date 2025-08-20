import Image from "next/image"
import { siteConfig } from "@/lib/data"

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/images/logic-clutch-logo-new.png"
        alt={`${siteConfig.name} Logo`}
        width={40}
        height={40}
        className="h-8 w-auto"
      />
      <span className="font-bold text-xl text-foreground">{siteConfig.name}</span>
    </div>
  )
}
