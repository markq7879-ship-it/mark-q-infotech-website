import { 
  Code2, ShieldCheck, Landmark, Server, 
  Search, BarChart3, Smartphone, Database, 
  HelpCircle, MessageSquare, Phone, Mail, MapPin 
} from 'lucide-react';

export const ABOUT_TEXT = {
  title: "Mark-Q Infotech – Secure Software Engineering & Banking Technology Solutions",
  content: "Mark-Q Infotech has been engineering high-throughput software, core banking solutions, and enterprise cybersecurity architectures from Hyderabad. What began as a specialized consultancy in cybersecurity and vulnerability assessment (VAPT) has grown into a full-scale IT solution agency serving clients across India and internationally. Our dedicated engineering team focuses on security-first web applications, real-time banking transaction engines, and robust IT asset management systems built for compliance, scale, and long-term reliability."
};

export const SERVICES_LIST = [
  {
    id: "software",
    icon: Code2,
    title: "Software Engineering & Web Applications",
    description: "We build custom, high-performance web platforms and microservices using React, TypeScript, and Go. Engineered with clean, scalable code and modern responsive design.",
    linkText: "View Web Engineering Portfolio →",
    path: "/services"
  },
  {
    id: "banking",
    icon: Landmark,
    title: "Banking Technology & CBS V2",
    description: "Modular core banking platforms handling KYC, AML, CASA, Fixed Deposits, Forex, General Ledger, and instant teller clearing built for fintech stability.",
    linkText: "Explore Banking Systems →",
    path: "/services"
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity & VAPT Audits",
    description: "Vulnerability Assessment & Penetration Testing (VAPT), source code security reviews, zero-trust architecture, and compliance reporting.",
    linkText: "See Security Case Studies →",
    path: "/services"
  },
  {
    id: "infra",
    icon: Server,
    title: "IT Infrastructure & Asset Management (ITAM)",
    description: "Centralized tracking for servers, network hardware, CCTV, endpoints, and automated backup pipelines across multi-location facilities.",
    linkText: "Explore ITAM Solutions →",
    path: "/services"
  }
];

export const STATS_LIST = [
  { number: "12+", label: "Engineers & Specialists" },
  { number: "2024", label: "Founded In" },
  { number: "50+", label: "Enterprise Projects" },
  { number: "5+", label: "City Served" }
];

export const PROCESS_STEPS = [
  { step: "1", title: "Discovery & Audit", desc: "We analyze your system requirements, security posture, and business objectives upfront." },
  { step: "2", title: "Architecture & UI/UX", desc: "Our engineers craft secure system blueprints and intuitive visual interfaces." },
  { step: "3", title: "Development", desc: "We write clean, test-driven code using modern frameworks like Go, React, and PostgreSQL." },
  { step: "4", title: "Testing & VAPT", desc: "Every module undergoes rigorous speed benchmarks and penetration testing before deployment." },
  { step: "5", title: "Deployment & Support", desc: "We execute smooth production releases and offer continuous long-term monitoring." }
];

export const TECH_ITEMS = [
  { name: "React.js", category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", category: "Language", icon: "📘" },
  { name: "Go (Golang)", category: "Backend", icon: "🔵" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "Docker", category: "DevOps", icon: "🐋" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
  { name: "Razorpay / PayU", category: "Payments", icon: "💳" }
];

export const FAQS = [
  {
    q: "How long does a custom software or banking integration take?",
    a: "Standard business platforms typically launch within 2 to 4 weeks. Complex enterprise applications such as Core Banking System (CBS) modules or custom ITAM platforms take between 6 to 12 weeks depending on integration requirements."
  },
  {
    q: "Do you provide VAPT security certification after audits?",
    a: "Yes. Our cybersecurity audits include comprehensive vulnerability reports, code patch guidance, and re-testing to provide a formal security audit clearance."
  },
  {
    q: "Will our web application be optimized for high traffic and mobile devices?",
    a: "Absolutely. Every application we engineer is fully mobile-responsive, SEO-optimized, and built to handle high concurrent requests using optimized backend APIs."
  },
  {
    q: "Do you offer post-launch support and infrastructure maintenance?",
    a: "Yes, we provide dedicated SLA-backed maintenance packages including round-the-clock monitoring, backup management, and routine security updates."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Mark-Q Infotech delivered our CBS V2 core banking module on schedule. Their security focus and technical depth made the migration seamless.",
    author: "Abdul Aahad",
    role: "Fintech Operations Lead"
  },
  {
    quote: "Their team conducted thorough VAPT audits on our platforms and fixed critical security gaps before our product launch. Exceptional quality.",
    author: "Aman Ansari",
    role: "CTO, Digital Solutions"
  },
  {
    quote: "The ITAM software built by Mark-Q Infotech simplified tracking across our entire office hardware network. Highly recommended team in Hyderabad.",
    author: "Jyoti Kumari",
    role: "IT Director"
  }
];