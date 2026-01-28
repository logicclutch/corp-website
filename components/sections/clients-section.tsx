import Image from "next/image"

const clients = [
  { name: "TomTom", logo: "/images/client-tomtom.png" },
  { name: "TCS", logo: "/images/client-tcs.png" },
  { name: "Kingston", logo: "/images/client-kingston-new.png" },
  { name: "Geometric", logo: "/images/client-geometric-black.png" },
  { name: "SQLI", logo: "/images/client-sqli.png" },
  { name: "Shree Madhav", logo: "/images/client-shree-madhav.png" },
  { name: "Experience 19", logo: "/images/client-experience-19.png" },
  { name: "ParkNSecure", logo: "/images/client-parknsecure.png" },
  { name: "Aventior", logo: "/images/client-aventior.png" },
  { name: "Blue Drop", logo: "/images/client-blue-drop.png" },
  { name: "InfoMinds", logo: "/images/client-infominds.png" },
  { name: "SAPBTM", logo: "/images/client-sapbtm.png" },
]

export default function ClientsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to partner with innovative companies across various industries, helping them achieve their
            technology goals and drive business success.
          </p>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-sky-600">Fortune 500</div>
            <div className="text-sm text-muted-foreground">Companies Trust Us</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-sky-600">Global</div>
            <div className="text-sm text-muted-foreground">Client Base</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-sky-600">Long-term</div>
            <div className="text-sm text-muted-foreground">Partnerships</div>
          </div>
        </div>
      </div>
    </section>
  )
}
