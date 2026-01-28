import { Users, Database, Cloud, Eye, Car, Code } from "lucide-react"

// Site Configuration
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

// Company Information
export const companyInfo = {
  name: "Logic Clutch",
  tagline: "Transforming Enterprises Through Intelligent Technology Solutions",
  description:
    "Logic Clutch is a leading enterprise technology consulting firm specializing in Master Data Management, Salesforce CRM solutions, AI-powered analytics, and custom software development. Our team of senior executives and developers has worked with Fortune 500 companies to deliver transformative digital solutions.",
  founded: "2018",
  headquarters: "Jaipur, India",
  employees: "50-100",
  industries: [
    "Technology Consulting",
    "Data Management",
    "AI & Machine Learning",
    "CRM Solutions",
    "Custom Software Development",
  ],
  certifications: [
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant",
    "GDPR Compliant",
    "Salesforce Partner",
    "Informatica Partner",
  ],
}

// Leadership Team
export const leadership = [
  {
    id: "sneha-sharma",
    name: "Sneha Sharma",
    position: "Founder & Director",
    role: "Founder & Director",
    bio: "15+ years experienced in consulting and serial entrepreneur. A woman leader who believes in ethical business practices and driving meaningful change through technology.",
    image: "/images/leader-sneha-sharma.jpeg",
    alt: "Sneha Sharma, Founder & Director of Logic Clutch",
    linkedin: "https://www.linkedin.com/in/snehasharma1121/",
    expertise: ["Strategic Leadership", "Business Development", "Technology Consulting", "Entrepreneurship"],
  },
  {
    id: "anjali-jain",
    name: "Anjali Jain",
    position: "Director of Inbound Operations",
    role: "Director of Inbound Operations",
    bio: "Electrical Engineer by education who believes in firm teamwork and transparency. Dedicated to operational excellence and building strong collaborative processes.",
    image: "/images/leader-anjali-jain.jpeg",
    alt: "Anjali Jain, Director of Inbound Operations at Logic Clutch",
    linkedin: "https://www.linkedin.com/in/anjalijain1707/",
    expertise: ["Operations Management", "Team Leadership", "Process Optimization", "Quality Assurance"],
  },
  {
    id: "vikram-jain",
    name: "Vikram Jain",
    position: "Director - Program Management Global",
    role: "Director - Program Management Global",
    bio: "16+ years experienced in IT industry with global exposure. Holds Executive MBA from IIM, Raipur. Expert in managing complex global programs and driving strategic initiatives.",
    image: "/images/leader-vikram-jain.png",
    alt: "Vikram Jain, Director - Program Management Global at Logic Clutch",
    linkedin: "https://www.linkedin.com/in/jainvikram1512/",
    expertise: ["Program Management", "Global Operations", "Strategic Planning", "Client Relations"],
  },
]

// Navigation Menu Items - Updated Press link to external URL
export const navMenuItems = [
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
        icon: Eye,
        external: true,
      },
      {
        label: "ITMS",
        href: "https://products.logicclutch.com/",
        description: "Intelligent Traffic Management System",
        icon: Car,
        external: true,
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "News", href: "/news" },
  { label: "Press", href: "https://www.logicclutch.com/press", external: true },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

// Services Data
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
    icon: Users,
    title: "Resource Augmentation",
    description: "Rapidly scale your capacity with certified developers, architects, QA engineers and PMs.",
    link: "/services/augmentation",
    heroImage: "/images/resource-augmentation-new.png",
  },
]

// Products Data
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
    icon: Car,
    title: "ITMS",
    description: "Intelligent Traffic Management System for smart city infrastructure and traffic optimization.",
    link: "https://products.logicclutch.com/",
    image: "/images/itms-web.png",
    external: true,
  },
]

// Client Logos and Information
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
      "A leading automotive manufacturing company with multiple production facilities faced critical safety compliance challenges. Workers frequently entered hazardous zones without proper Personal Protective Equipment (PPE), leading to safety violations, potential accidents, and regulatory compliance issues.",
    solution:
      "Logic Clutch developed a comprehensive Computer Vision AI solution integrating advanced PPE detection with intelligent geo-fencing security systems. Our solution deployed 450+ high-resolution cameras across all facilities, powered by custom-trained deep learning models capable of detecting helmets, safety vests, gloves, safety glasses, and steel-toed boots with 98.7% accuracy.",
    results: [
      "99.2% reduction in safety violations within 6 months of deployment",
      "87% decrease in workplace accidents and near-miss incidents",
      "Real-time PPE compliance monitoring across 100% of work areas",
      "65% reduction in safety-related insurance premiums",
      "$4.2M annual savings from prevented accidents and improved compliance",
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
      "A global leader in precision optical lens manufacturing was struggling with a fragmented customer management system that couldn't handle their complex B2B relationships, intricate product configurations, and multi-tier distribution network.",
    solution:
      "Logic Clutch designed and built a completely customized CRM solution tailored specifically for the optical lens manufacturing industry. The system featured advanced product configurators for complex lens specifications, automated pricing engines considering material costs, manufacturing complexity, and market dynamics.",
    results: [
      "300% increase in sales revenue within 24 months",
      "Quote generation time reduced from 3 days to 15 minutes",
      "Customer satisfaction scores improved by 85%",
      "Sales team productivity increased by 220%",
      "Order processing accuracy improved to 99.8%",
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
      "A rapidly growing e-commerce company specializing in premium lifestyle products was facing critical scalability issues with their legacy platform. During peak shopping seasons, the website experienced frequent crashes, slow loading times (8+ seconds), and checkout failures resulting in 45% cart abandonment rates.",
    solution:
      "Logic Clutch assembled a dedicated team of 15 full-stack developers who completely rebuilt the e-commerce platform using modern microservices architecture. The new platform featured advanced caching mechanisms, CDN integration, and auto-scaling capabilities to handle traffic spikes.",
    results: [
      "500% increase in annual revenue within 18 months",
      "Page load times improved from 8 seconds to 1.2 seconds",
      "Cart abandonment reduced from 45% to 18%",
      "Mobile conversion rates increased from 23% to 67%",
      "99.9% uptime achieved during peak shopping seasons",
      "Platform can now handle 10x traffic without performance degradation",
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
      "A large healthcare network operating 8 hospitals and 25 clinics was struggling with fragmented patient data, reactive care delivery, and increasing readmission rates. Patient information was scattered across multiple Electronic Health Record (EHR) systems.",
    solution:
      "Logic Clutch developed a comprehensive AI-powered healthcare analytics platform using our LogicEye technology, specifically customized for healthcare applications. The solution integrated data from 12 different EHR systems, medical devices, lab systems, and imaging platforms to create unified patient profiles.",
    results: [
      "40% improvement in patient outcomes through predictive interventions",
      "65% reduction in 30-day readmission rates",
      "Real-time monitoring of 100% of patients across the network",
      "Clinical decision-making time reduced by 50%",
      "Bed utilization efficiency improved by 35%",
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

// Updated footer links to use external press URL
export const footerLinks = {
  services: services.map((s) => ({ label: s.title, href: s.link })),
  products: products.map((p) => ({ label: p.title, href: p.link, external: p.external })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "News", href: "/news" },
    { label: "Press", href: "https://www.logicclutch.com/press", external: true },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
  social: [
    { icon: "Linkedin", href: "https://linkedin.com/company/logicclutch", label: "LinkedIn" },
    { icon: "Twitter", href: "https://twitter.com/logicclutch", label: "Twitter" },
    { icon: "Facebook", href: "https://facebook.com/logicclutch", label: "Facebook" },
  ],
}

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

// Press Releases (kept for internal pages that might still reference them)
export const pressReleases = [
  {
    id: "series-a-funding",
    title: "Logic Clutch Secures $15M Series A Funding to Accelerate AI and Data Management Solutions",
    excerpt:
      "Investment led by prominent venture capital firm will fuel expansion of LogicEye AI platform and global market reach.",
    content: `Logic Clutch, a leading enterprise technology consulting firm, today announced the successful completion of its Series A funding round, raising $15 million from a consortium of investors led by TechVenture Capital.`,
    publishedAt: "2024-01-20",
    category: "Funding",
    image: "/images/hero-image-main.png",
    downloadUrl: "/press/series-a-funding.pdf",
  },
  {
    id: "healthcare-partnership",
    title: "Logic Clutch Partners with Leading Healthcare Network to Deploy AI-Powered Patient Monitoring",
    excerpt:
      "LogicEye platform implementation across 15 facilities expected to improve patient outcomes and operational efficiency.",
    content: `Logic Clutch today announced a strategic partnership with MedHealth Network, one of the region's largest healthcare providers.`,
    publishedAt: "2024-01-12",
    category: "Partnership",
    image: "/images/case-study-healthcare-ai.png",
    downloadUrl: "/press/healthcare-partnership.pdf",
  },
]

// Media Kit (kept for internal pages)
export const mediaKit = {
  companyOverview: {
    description:
      "Logic Clutch is a leading enterprise technology consulting firm specializing in AI-powered solutions, Master Data Management, and Salesforce CRM implementations. Founded in 2018, the company has rapidly grown to serve Fortune 500 clients across multiple industries.",
    keyFacts: [
      "Founded: 2018",
      "Headquarters: Jaipur, India",
      "Employees: 50-100",
      "Industries Served: 12+",
      "Fortune 500 Clients: 25+",
      "Revenue Growth: 300% YoY",
    ],
    awards: [
      "Salesforce Partner Excellence Award 2024",
      "Microsoft Startup Partner of the Year 2023",
      "NVIDIA Inception Program Member",
      "ISO 27001 Certified",
      "SOC 2 Type II Compliant",
    ],
  },
  logoAssets: [
    {
      name: "Primary Logo (PNG)",
      description: "High-resolution PNG logo for digital use",
      url: "/images/logic-clutch-logo-new.png",
      format: "PNG",
      size: "2000x800px",
    },
    {
      name: "Logo with Text (PNG)",
      description: "Logo with company name for presentations",
      url: "/images/logic-clutch-logo.png",
      format: "PNG",
      size: "1500x600px",
    },
    {
      name: "Favicon",
      description: "Website favicon",
      url: "/favicon.ico",
      format: "ICO",
      size: "32x32px",
    },
  ],
  productImages: [
    {
      name: "LogicEye Platform",
      description: "Screenshot of LogicEye AI platform interface",
      url: "/images/logiceye-web.png",
      format: "PNG",
      category: "Product",
    },
    {
      name: "ITMS Dashboard",
      description: "ITMS traffic management dashboard",
      url: "/images/itms-web.png",
      format: "PNG",
      category: "Product",
    },
    {
      name: "Salesforce Implementation",
      description: "Custom Salesforce solution screenshot",
      url: "/images/salesforce-consulting-new.png",
      format: "PNG",
      category: "Service",
    },
  ],
  executivePhotos: [
    {
      name: "Sneha Sharma - Founder & Director",
      url: "/images/leader-sneha-sharma.jpeg",
      format: "JPEG",
      role: "Founder & Director",
    },
    {
      name: "Anjali Jain - Director of Operations",
      url: "/images/leader-anjali-jain.jpeg",
      format: "JPEG",
      role: "Director of Inbound Operations",
    },
    {
      name: "Vikram Jain - Director Program Management",
      url: "/images/leader-vikram-jain.png",
      format: "PNG",
      role: "Director - Program Management Global",
    },
  ],
  contactInfo: {
    press: {
      name: "Media Relations Team",
      email: "press@logicclutch.com",
      phone: "+91 99297 90897",
    },
    general: {
      email: "info@logicclutch.com",
      phone: "+91 99297 90897",
      address: "91, Shri Ram Enclave, Kallawala, Vatika Road, Jaipur 303905",
    },
  },
}

// Clients (same as clientLogos for backward compatibility)
export const clients = clientLogos
