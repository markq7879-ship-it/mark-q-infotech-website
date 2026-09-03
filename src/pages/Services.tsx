import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  ShieldCheck, 
  Landmark, 
  Server, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 

  ChevronRight
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: "software-engineering",
    icon: Code2,
    badge: "Core Engineering",
    title: "Software Engineering & Custom Web Apps",
    shortDesc: "Scalable web, enterprise, and cloud-native business applications designed for high performance and heavy data throughput.",
    techStack: ["React.js", "TypeScript", "Go (Golang)", "C# / .NET", "REST & gRPC APIs", "PostgreSQL"],
    deliverables: [
      "Custom Enterprise Resource Planning (ERP) & CRM web portals",
      "High-speed RESTful & gRPC API microservice architectures",
      "Responsive React UI/UX tailored for operational dashboards",
      "Database schema optimization and multi-tenant data isolation"
    ]
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    badge: "Zero-Trust Security",
    title: "Cybersecurity & VAPT Audits",
    shortDesc: "End-to-end vulnerability management, penetration testing, and compliance hardening to defend critical business assets.",
    techStack: ["VAPT Tools", "OWASP Top 10", "Network Scanners", "Source Code Audits", "SIEM Logging"],
    deliverables: [
      "Vulnerability Assessment & Penetration Testing (VAPT) for web/network",
      "Automated patch management & Linux/Windows server hardening",
      "Comprehensive regulatory IT security audit reports & remediations",
      "Zero-trust network access (ZTNA) and firewall configuration"
    ]
  },
  {
    id: "banking-technology",
    icon: Landmark,
    badge: "Fintech Grade",
    title: "Banking Technology & Financial Systems",
    shortDesc: "Modular core banking platforms, payment clearing pipelines, and regulatory compliance engines built for financial stability.",
    techStack: ["CBS V2 Architecture", "NEFT / SFMS", "ISO 20022", "SQL / Ledger Engines", "Razorpay / PayU Integration"],
    deliverables: [
      "Modular Core Banking Systems (CBS) handling KYC, CASA, FD, RD, Loans & GL",
      "Automated transaction reconciliation & clearing house integration",
      "Payment gateway integration with multi-layer encryption",
      "Automated financial regulatory reporting & audit log trails"
    ]
  },
  {
    id: "it-infrastructure",
    icon: Server,
    badge: "Enterprise IT",
    title: "IT Infrastructure & Asset Management (ITAM)",
    shortDesc: "Robust server configuration, enterprise networking, CCTV surveillance networks, and centralized hardware lifecycle tracking.",
    techStack: ["Windows Server Active Directory", "Linux Servers", "ITAM Platform", "CCTV NVR Systems", "Automated Backups"],
    deliverables: [
      "Deployment of custom IT Asset Management (ITAM) for hardware telemetry",
      "Windows Server AD setup, policy management, & network domain controls",
      "Automated off-site backup pipelines & disaster recovery planning",
      "Enterprise CCTV, network rack management, & hardware provisioning"
    ]
  },
  {
    id: "business-automation",
    icon: Cpu,
    badge: "Process Optimization",
    title: "Business Automation & Digital Transformation",
    shortDesc: "Custom scripting, scheduled data processing, and workflow automation utilities to eliminate repetitive manual operations.",
    techStack: ["Python Automation", "Shell Scripting", "ETL Pipelines", "Webhook Integrations", "Custom Utilities"],
    deliverables: [
      "Automated ETL data extraction, transformation, & batch reporting pipelines",
      "Cross-platform legacy system API wrappers & custom integrations",
      "Digital document processing, email notification, & receipt generation",
      "Custom desktop & CLI tools to accelerate daily employee workflows"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div 
      className="bg-slate-50 text-slate-800 min-h-screen"
      style={{
        backgroundImage: `
          linear-gradient(rgba(248, 250, 252, 0.6), rgba(248, 250, 252, 0.6)),
          url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 text-blue-900 border border-blue-200 text-xs font-semibold uppercase tracking-wider">
             Enterprise-Grade Engineering
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-emerald-600">Services & Capabilities</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From zero-trust cybersecurity audits to high-throughput core banking systems, we build software architectures engineered for growth and reliability.
          </p>
        </div>
      </section>

      {/* 2. SERVICES LISTING */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {SERVICES_DATA.map((srv) => {
          const Icon = srv.icon;

          return (
            <div 
              key={srv.id} 
              id={srv.id}
              className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 sm:p-10 hover:border-blue-400 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Main Service Description */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-900 shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">{srv.badge}</span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{srv.title}</h2>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Technologies & Frameworks:</span>
                    <div className="flex flex-wrap gap-2">
                      {srv.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-3 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scope & Deliverables Box */}
                <div className="lg:col-span-5 bg-slate-50/95 border border-slate-200 p-6 rounded-xl space-y-4">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-3">
                    <CheckCircle2 size={16} className="text-emerald-600" /> Key Scope & Deliverables
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <ChevronRight size={14} className="text-blue-900 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 hover:text-emerald-700 transition-colors"
                    >
                      Request Scope Proposal <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 3. CALL TO ACTION CONSULTATION BANNER */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white p-8 sm:p-12 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold">Need a Tailored Custom Solution?</h2>
            <p className="text-slate-300 text-sm max-w-2xl">
              Unsure which technology stack or cloud configuration best fits your organization? Speak directly with our lead engineer for a technical review.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link 
              to="/contact" 
              className="px-6 py-3.5 rounded-xl font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-lg flex items-center gap-2 text-sm"
            >
              Get Technical Proposal <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;