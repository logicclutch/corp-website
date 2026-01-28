import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/images/logic-clutch-logo.jpeg" alt="Logic Clutch" width={40} height={40} className="rounded-lg" />
      <span className="text-xl font-bold gradient-text">Logic Clutch</span>
    </Link>
  )
}
