import {
  Database,
  Cloud,
  Code,
  Users,
  Monitor,
  Settings,
  Eye,
  UserPlus,
  Facebook,
  Twitter,
  Linkedin,
  type LucideIcon,
} from "lucide-react"

export interface NavItem {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
  external?: boolean
  children?: NavItem[]
}

export const siteConfig = {
  name: "Logic Clutch",
  description:
    "Enterprise technology consulting specializing in Master Data Management, Salesforce CRM, AI analytics and custom development.",
  url: "https://logicclutch.com",
  ogImage: "/images/og-image-logic-clutch.png",
  favicon: "/favicon.ico",
  address: "91, Shri Ram Enclave, Kallawala, Vatika Road, Jaipur 303905",
  phone: "+91 99297 90897",
  email: "info@logicclutch.com",
}

export const navMenuItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Master Data Management",
        href: "/services/mdm",
        description: "Informatica-powered single source of truth for your enterprise data",
        icon: Database,
      },
      {
        label: "Salesforce CRM Solutions",
        href: "/services/salesforce",
        description: "End-to-end Salesforce implementations and optimization",
        icon: Cloud,
      },
      {
        label: "On-Demand Development",
        href: "/services/development",
        description: "Scalable full-stack teams that deliver on your terms",
        icon: Code,
      },
      {
        label: "Resource Augmentation",
        href: "/services/augmentation",
        description: "Extend your in-house team with vetted specialists",
        icon: Users,
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "LogicEye",
        href: "https://www.logicclutch.ai/",
        description: "AI analytics and predictive insights platform",
        icon: Monitor,
        external: true,
      },
      {
        label: "ITMS",
        href: "https://products.logicclutch.com/",
        description: "Intelligent Traffic Management System",
        icon: Settings,
        external: true,
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "News", href: "/news" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export const services = [
  {
    icon: Database,
    title: "Master Data Management",
    description:
      "Design and implement Informatica-based MDM hubs that deliver reliable, governed data across the enterprise.",
    link: "/services/mdm",
    heroImage: "/images/informatica-mdm-expertise.png",
  },
  {
    icon: Cloud,
    title: "Salesforce CRM Solutions",
    description:
      "Unlock the full power of Sales, Service and Marketing Clouds with customized solutions and integrations.",
    link: "/services/salesforce",
    heroImage: "/images/salesforce-consulting-new.png",
  },
  {
    icon: Code,
    title: "On-Demand Development",
    description: "Access elastic teams of senior engineers to accelerate delivery of web, mobile and cloud products.",
    link: "/services/development",
    heroImage: "/images/on-demand-development-hero.png",
  },
  {
    icon: UserPlus,
    title: "Resource Augmentation",
    description: "Rapidly scale your capacity with certified developers, architects, QA engineers and PMs.",
    link: "/services/augmentation",
    heroImage: "/images/resource-augmentation-new.png",
  },
]

export const products = [
  {
    icon: Eye,
    title: "LogicEye",
    description: "AI-powered analytics platform turning raw data into actionable intelligence.",
    link: "https://www.logicclutch.ai/",
    image: "/images/logiceye-web.png",
    external: true,
  },
  {
    icon: Settings,
    title: "ITMS",
    description: "Intelligent Traffic Management System for smart city infrastructure and traffic optimization.",
    link: "https://products.logicclutch.com/",
    image: "/images/itms-web.png",
    external: true,
  },
]

export const clientLogos = [
  {
    name: "TomTom",
    logo: "/images/client-tomtom.png",
    alt: "TomTom - Global leader in navigation and mapping technology",
    industry: "Navigation & Mapping",
    description: "Leading provider of navigation and mapping products, traffic information and connected car services.",
  },
  {
    name: "Tata Consultancy Services",
    logo: "/images/client-tcs.png",
    alt: "TCS - Global IT services and consulting leader",
    industry: "IT Services & Consulting",
    description: "One of the world's largest IT services companies providing digital transformation solutions.",
  },
  {
    name: "Kingston Technology",
    logo: "/images/client-kingston-new.png",
    alt: "Kingston Technology - Memory and storage solutions provider",
    industry: "Technology Hardware",
    description: "World's largest independent manufacturer of memory products and technology solutions.",
  },
  {
    name: "ParkNSecure",
    logo: "/images/client-parknsecure.png",
    alt: "ParkNSecure - Smart parking solutions provider",
    industry: "Smart Parking Solutions",
    description: "Innovative parking management and security solutions for modern urban infrastructure.",
  },
  {
    name: "Aventior",
    logo: "/images/client-aventior.png",
    alt: "Aventior - Technology solutions company",
    industry: "Technology Solutions",
    description: "Specialized technology solutions provider focusing on enterprise digital transformation.",
  },
  {
    name: "Sopra Steria",
    logo: "/images/client-sodio.png",
    alt: "Sopra Steria - European leader in digital transformation",
    industry: "Digital Consulting & Services",
    description:
      "Major European consulting, digital services and software development company specializing in digital transformation.",
  },
  {
    name: "LoginRadius",
    logo: "/images/client-circular-blue.png",
    alt: "LoginRadius - Customer identity and access management platform",
    industry: "Identity & Access Management",
    description: "Leading customer identity and access management (CIAM) platform serving enterprises worldwide.",
  },
  {
    name: "Western Union",
    logo: "/images/client-w-logo.png",
    alt: "Western Union - Global financial services and communications company",
    industry: "Financial Services",
    description: "Global leader in cross-border, cross-currency money movement and payments technology.",
  },
  {
    name: "Capgemini",
    logo: "/images/client-blue-drop.png",
    alt: "Capgemini - Global consulting and technology services leader",
    industry: "Consulting & Technology Services",
    description: "Global leader in consulting, technology services and digital transformation solutions.",
  },
  {
    name: "Valuefy",
    logo: "/images/client-geometric-black.png",
    alt: "Valuefy - Wealth management technology solutions",
    industry: "Wealth Management Technology",
    description: "Leading provider of comprehensive wealth management technology solutions and digital platforms.",
  },
  {
    name: "InfoMinds",
    logo: "/images/client-infominds.png",
    alt: "InfoMinds - Information technology and consulting services",
    industry: "IT Consulting & Services",
    description: "Innovative IT consulting company specializing in digital solutions and technology transformation.",
  },
  {
    name: "SAPBTM",
    logo: "/images/client-sapbtm.png",
    alt: "SAPBTM - SAP business technology and management solutions",
    industry: "Enterprise Software Solutions",
    description: "Specialized provider of SAP business technology and management solutions for enterprise clients.",
  },
  {
    name: "Shree Madhav Palace",
    logo: "/images/client-shree-madhav.png",
    alt: "Shree Madhav Palace - Hospitality and event management",
    industry: "Hospitality & Events",
    description: "Premium hospitality and event management company providing luxury services and experiences.",
  },
  {
    name: "SQLI Digital Experience",
    logo: "/images/client-sqli.png",
    alt: "SQLI Digital Experience - Digital transformation and experience solutions",
    industry: "Digital Experience Solutions",
    description:
      "Leading digital experience company specializing in digital transformation and customer experience solutions.",
  },
  {
    name: "Experience Solutions",
    logo: "/images/client-experience-19.png",
    alt: "Experience Solutions - Customer experience and digital solutions provider",
    industry: "Customer Experience Technology",
    description:
      "Innovative customer experience technology company focused on delivering exceptional digital experiences.",
  },
  {
    name: "Enterprise Technology Partner",
    logo: "/images/client-diamond-logo.png",
    alt: "Enterprise Technology Partner - Strategic technology consulting",
    industry: "Strategic Technology Consulting",
    description:
      "Strategic technology consulting partner providing comprehensive enterprise solutions and advisory services.",
  },
]

export const caseStudies = [
  {
    id: "1",
    title: "Computer Vision AI Transforms Industrial Safety with PPE Detection & Geo-Fencing",
    client: "Manufacturing",
    industry: "Manufacturing & Industrial Automation",
    challenge:
      "A leading automotive manufacturing company with multiple production facilities faced critical safety compliance challenges. Workers frequently entered hazardous zones without proper Personal Protective Equipment (PPE), leading to safety violations, potential accidents, and regulatory compliance issues. The company needed real-time monitoring across 15 production lines, 8 warehouses, and 3 assembly plants. Traditional manual safety inspections were inefficient, covering only 20% of work areas daily, and incident reporting was reactive rather than preventive. The company was losing $2.3M annually due to safety-related downtime, insurance claims, and regulatory fines.",
    solution:
      "Logic Clutch developed a comprehensive Computer Vision AI solution integrating advanced PPE detection with intelligent geo-fencing security systems. Our solution deployed 450+ high-resolution cameras across all facilities, powered by custom-trained deep learning models capable of detecting helmets, safety vests, gloves, safety glasses, and steel-toed boots with 98.7% accuracy. The geo-fencing system created virtual boundaries around hazardous areas including chemical storage zones, heavy machinery operations, and high-voltage electrical areas. Real-time alerts were sent to supervisors and workers via mobile apps, digital displays, and audio announcements. The system integrated with existing access control systems, automatically restricting entry to non-compliant personnel. Advanced analytics dashboards provided insights into safety patterns, compliance trends, and risk hotspots across all facilities.",
    results: [
      "99.2% reduction in safety violations within 6 months of deployment",
      "87% decrease in workplace accidents and near-miss incidents",
      "Real-time PPE compliance monitoring across 100% of work areas",
      "65% reduction in safety-related insurance premiums",
      "$4.2M annual savings from prevented accidents and improved compliance",
      "Automated incident reporting reduced response time from 45 minutes to 2 minutes",
      "100% regulatory compliance achieved across all facilities",
      "Employee safety awareness increased by 78% through gamification features",
      "Integration with 12 existing enterprise systems including ERP and HRM",
      "ROI of 340% achieved within 18 months",
    ],
    image: "/images/case-study-ppe-detection.jpeg",
    alt: "Computer vision AI system detecting PPE compliance with safety equipment recognition overlays on construction workers",
    tags: ["Computer Vision", "AI", "Industrial Automation", "Safety"],
    duration: "14 months",
    teamSize: "18 specialists",
  },
  {
    id: "2",
    title: "Custom CRM Revolution: Lens Manufacturer Achieves 300% Sales Growth",
    client: "Optical Manufacturing",
    industry: "Optical & Lens Manufacturing",
    challenge:
      "A global leader in precision optical lens manufacturing was struggling with a fragmented customer management system that couldn't handle their complex B2B relationships, intricate product configurations, and multi-tier distribution network. Their existing generic CRM solution failed to manage the unique requirements of lens manufacturing including prescription tracking, coating specifications, material sourcing, quality certifications, and regulatory compliance across 45 countries. Sales teams spent 60% of their time on administrative tasks rather than selling. Customer data was scattered across 8 different systems, leading to inconsistent pricing, delayed quotes, and lost opportunities. The company was losing $12M annually due to inefficient processes and missed sales opportunities.",
    solution:
      "Logic Clutch designed and built a completely customized CRM solution tailored specifically for the optical lens manufacturing industry. The system featured advanced product configurators for complex lens specifications, automated pricing engines considering material costs, manufacturing complexity, and market dynamics. Integration with optical design software allowed real-time feasibility analysis and manufacturing cost estimation. The CRM included specialized modules for prescription management, regulatory compliance tracking, quality certification workflows, and multi-currency international sales management. Advanced analytics provided insights into market trends, customer behavior, and product performance. Mobile applications enabled field sales teams to create quotes, track orders, and access technical specifications offline. The system integrated with existing ERP, manufacturing execution systems, and supply chain management platforms.",
    results: [
      "300% increase in sales revenue within 24 months",
      "Quote generation time reduced from 3 days to 15 minutes",
      "Customer satisfaction scores improved by 85%",
      "Sales team productivity increased by 220%",
      "Order processing accuracy improved to 99.8%",
      "Customer retention rate increased from 72% to 94%",
      "Average deal size increased by 45% through better upselling",
      "Time-to-market for new products reduced by 60%",
      "Inventory optimization resulted in 35% reduction in carrying costs",
      "International sales grew by 180% with multi-currency support",
      "Compliance reporting time reduced from 40 hours to 2 hours monthly",
      "ROI of 420% achieved within 30 months",
    ],
    image: "/images/case-study-crm-growth.png",
    alt: "Business growth analytics dashboard showing upward trending charts and global expansion metrics for CRM success",
    tags: ["Custom CRM", "Manufacturing", "B2B Sales", "Product Configuration"],
    duration: "16 months",
    teamSize: "22 specialists",
  },
  {
    id: "3",
    title: "E-commerce Platform Transformation: 500% Revenue Growth Through Advanced Development",
    client: "E-commerce",
    industry: "E-commerce & Retail Technology",
    challenge:
      "A rapidly growing e-commerce company specializing in premium lifestyle products was facing critical scalability issues with their legacy platform. During peak shopping seasons, the website experienced frequent crashes, slow loading times (8+ seconds), and checkout failures resulting in 45% cart abandonment rates. The platform couldn't handle their expanding product catalog of 50,000+ items, complex inventory management across 12 warehouses, or integration with 15+ payment gateways and shipping providers. Mobile experience was poor with only 23% mobile conversion rates. The company needed to launch in 8 new international markets but lacked multi-currency, multi-language, and tax compliance capabilities. Customer service was overwhelmed with order tracking inquiries, and the recommendation engine was generating only 12% of sales.",
    solution:
      "Logic Clutch assembled a dedicated team of 15 full-stack developers who completely rebuilt the e-commerce platform using modern microservices architecture. The new platform featured advanced caching mechanisms, CDN integration, and auto-scaling capabilities to handle traffic spikes. We implemented AI-powered product recommendations, dynamic pricing engines, and personalized shopping experiences. The mobile-first responsive design included progressive web app (PWA) capabilities for app-like performance. Advanced inventory management with real-time synchronization across all channels, automated reordering, and demand forecasting was integrated. The platform supported multiple currencies, languages, tax systems, and shipping methods for international expansion. Customer service was enhanced with chatbots, automated order tracking, and self-service portals.",
    results: [
      "500% increase in annual revenue within 18 months",
      "Page load times improved from 8 seconds to 1.2 seconds",
      "Cart abandonment reduced from 45% to 18%",
      "Mobile conversion rates increased from 23% to 67%",
      "99.9% uptime achieved during peak shopping seasons",
      "Customer acquisition cost reduced by 40% through better SEO",
      "Average order value increased by 55% via AI recommendations",
      "International sales grew to 35% of total revenue",
      "Customer service inquiries reduced by 60% through automation",
      "Inventory turnover improved by 75% with demand forecasting",
      "Platform can now handle 10x traffic without performance degradation",
      "Time-to-market for new features reduced by 80%",
    ],
    image: "/images/case-study-ecommerce-new.png",
    alt: "E-commerce platform transformation infographic showing mobile shopping interface with 500% revenue growth chart and upward trending arrow",
    tags: ["E-commerce", "Full-Stack Development", "AI Recommendations", "Scalability"],
    duration: "12 months",
    teamSize: "15 developers",
  },
  {
    id: "4",
    title: "Healthcare AI Analytics: 40% Improvement in Patient Outcomes Through Predictive Intelligence",
    client: "Healthcare",
    industry: "Healthcare & Medical Technology",
    challenge:
      "A large healthcare network operating 8 hospitals and 25 clinics was struggling with fragmented patient data, reactive care delivery, and increasing readmission rates. Patient information was scattered across multiple Electronic Health Record (EHR) systems, making it difficult for healthcare providers to get a complete view of patient history. The network faced challenges with bed management, staff scheduling, and resource allocation. Readmission rates were 18% above national averages, costing the organization $15M annually in penalties. Physicians spent 65% of their time on documentation rather than patient care. The organization needed predictive analytics to identify high-risk patients, optimize resource utilization, and improve care coordination across the entire network.",
    solution:
      "Logic Clutch developed a comprehensive AI-powered healthcare analytics platform using our LogicEye technology, specifically customized for healthcare applications. The solution integrated data from 12 different EHR systems, medical devices, lab systems, and imaging platforms to create unified patient profiles. Advanced machine learning algorithms analyzed patient data to predict readmission risks, identify potential complications, and recommend preventive interventions. The platform included real-time dashboards for clinical decision support, automated alerts for critical conditions, and predictive models for bed management and staff scheduling. Natural language processing extracted insights from clinical notes, and computer vision analyzed medical images for early detection of conditions. The system ensured HIPAA compliance with advanced encryption and access controls.",
    results: [
      "40% improvement in patient outcomes through predictive interventions",
      "65% reduction in 30-day readmission rates",
      "Real-time monitoring of 100% of patients across the network",
      "Clinical decision-making time reduced by 50%",
      "Bed utilization efficiency improved by 35%",
      "Staff scheduling optimization reduced overtime costs by 45%",
      "Early detection of sepsis improved by 78% with AI alerts",
      "Documentation time reduced by 40% through automation",
      "Patient satisfaction scores increased by 32%",
      "Cost per patient reduced by 28% through optimized care paths",
      "Medication errors reduced by 85% with AI-powered checks",
      "ROI of 280% achieved within 24 months",
    ],
    image: "/images/case-study-healthcare-ai.png",
    alt: "Healthcare AI analytics visualization showing doctor with AI brain technology and medical data insights",
    tags: ["Healthcare AI", "Predictive Analytics", "LogicEye", "Patient Care"],
    duration: "18 months",
    teamSize: "16 specialists",
  },
]

export const complianceLogos = [
  {
    name: "NVIDIA Inception Program",
    logo: "/images/nvidia-inception-badge.png",
    alt: "NVIDIA Inception Program partner logo",
    url: "https://www.nvidia.com/en-us/startups/",
  },
  {
    name: "Microsoft for Startups",
    logo: "/images/microsoft-startup-badge.jpeg",
    alt: "Microsoft for Startups partner logo",
    url: "https://www.microsoft.com/en-us/startups/",
  },
  {
    name: "Tacodi Partnership",
    logo: "/images/logo-tacodi-partner.png",
    alt: "Tacodi partnership logo - communicate smarter",
    url: "https://tacodi.com/",
  },
]

export const footerLinks = {
  services: services.map((s) => ({ label: s.title, href: s.link })),
  products: products.map((p) => ({ label: p.title, href: p.link, external: p.external })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
  social: [
    { icon: Linkedin, href: "https://linkedin.com/company/logicclutch", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/logicclutch", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/logicclutch", label: "Facebook" },
  ],
}

export const leadership = [
  {
    name: "Sneha Sharma",
    role: "Founder & Director",
    bio: "15+ years experienced in consulting and serial entrepreneur. A woman leader who believes in ethical business practices and driving meaningful change through technology.",
    image: "/images/leader-sneha-sharma.jpeg",
    alt: "Sneha Sharma, Founder & Director of Logic Clutch",
    linkedin: "https://www.linkedin.com/in/snehasharma1121/",
  },
  {
    name: "Anjali Jain",
    role: "Director of Inbound Operations",
    bio: "Electrical Engineer by education who believes in firm teamwork and transparency. Dedicated to operational excellence and building strong collaborative processes.",
    image: "/images/leader-anjali-jain.jpeg",
    alt: "Anjali Jain, Director of Inbound Operations at Logic Clutch",
    linkedin: "https://www.linkedin.com/in/anjalijain1707/",
  },
  {
    name: "Vikram Jain",
    role: "Director - Program Management Global",
    bio: "16+ years experienced in IT industry with global exposure. Holds Executive MBA from IIM, Raipur. Expert in managing complex global programs and driving strategic initiatives.",
    image: "/images/leader-vikram-jain.png",
    alt: "Vikram Jain, Director - Program Management Global at Logic Clutch",
    linkedin: "https://www.linkedin.com/in/jainvikram1512/",
  },
]

export const testimonials = [
  {
    quote: "Logic Clutch transformed our data management strategy. Their Informatica expertise is unmatched.",
    name: "John Smith",
    title: "CTO",
    companyLogo: "/images/logo-tech-generic.png",
    companyLogoAlt: "Technology company logo",
  },
  {
    quote: "The Salesforce implementation exceeded our expectations. Sales productivity increased by 40%.",
    name: "Sarah Davis",
    title: "VP of Sales",
    companyLogo: "/images/logo-retail-generic.png",
    companyLogoAlt: "Retail company logo",
  },
  {
    quote: "Their development team integrated seamlessly with ours. Delivery speed improved dramatically.",
    name: "Mike Johnson",
    title: "Engineering Manager",
    companyLogo: "/images/logo-pharma-generic.png",
    companyLogoAlt: "Pharmaceutical company logo",
  },
]

export const newsArticles = [
  {
    id: "servicenow-google-cloud-ai-partnership",
    title: "ServiceNow and Google Cloud Enhance Partnership with AI Tools",
    excerpt:
      "ServiceNow and Google Cloud are expanding their partnership to enhance generative AI capabilities across enterprise technology. This integration will make...",
    author: "Vikram Jain",
    date: "Jul 25, 2025",
    readTime: "3 min read",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=400&text=ServiceNow+Google+Cloud+Partnership",
  },
  {
    id: "logiceye-computer-vision-update",
    title: "LogicEye Introduces Advanced Computer Vision Analytics",
    excerpt:
      "Our flagship LogicEye platform now features enhanced computer vision capabilities for real-time object detection and behavioral analysis...",
    author: "Sneha Sharma",
    date: "Jul 22, 2025",
    readTime: "4 min read",
    category: "Product Update",
    image: "/placeholder.svg?height=200&width=400&text=LogicEye+Computer+Vision+Update",
  },
  {
    id: "itms-smart-city-deployment",
    title: "ITMS Deployed in Major Smart City Initiative",
    excerpt:
      "Our Intelligent Traffic Management System has been successfully deployed in a major metropolitan area, reducing traffic congestion by 35%...",
    author: "Anjali Jain",
    date: "Jul 20, 2025",
    readTime: "5 min read",
    category: "Case Study",
    image: "/placeholder.svg?height=200&width=400&text=ITMS+Smart+City+Deployment",
  },
  {
    id: "salesforce-best-practices-2025",
    title: "Salesforce Implementation Best Practices for 2025",
    excerpt:
      "As Salesforce continues to evolve, we share our insights on the latest best practices for successful CRM implementations...",
    author: "Vikram Jain",
    date: "Jul 18, 2025",
    readTime: "6 min read",
    category: "Insights",
    image: "/placeholder.svg?height=200&width=400&text=Salesforce+Best+Practices+2025",
  },
  {
    id: "logic-clutch-microsoft-startup-program",
    title: "Logic Clutch Joins Microsoft for Startups Program",
    excerpt:
      "We're excited to announce our acceptance into the Microsoft for Startups program, providing us with enhanced cloud resources and support...",
    author: "Sneha Sharma",
    date: "Jul 15, 2025",
    readTime: "2 min read",
    category: "Company News",
    image: "/placeholder.svg?height=200&width=400&text=Microsoft+Startups+Program",
  },
  {
    id: "ai-enterprise-transformation-trends",
    title: "AI-Driven Enterprise Transformation: 2025 Trends",
    excerpt:
      "Exploring the key trends shaping AI adoption in enterprise environments and how organizations can prepare for the future...",
    author: "Anjali Jain",
    date: "Jul 12, 2025",
    readTime: "7 min read",
    category: "Industry Analysis",
    image: "/placeholder.svg?height=200&width=400&text=AI+Enterprise+Transformation+Trends",
  },
]
