import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Terminal, 
  Lock,
  Globe,
  HardDrive
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';

const techStack = [
  {
    category: "Frontend Engineering",
    icon: Code2,
    badgeColor: "bg-blue-100 text-blue-900 border-blue-200",
    description: "Modern, high-performance user interfaces built for responsiveness, accessibility, and speed.",
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "React Router", "HTML5 & CSS3"]
  },
  {
    category: "Backend & Systems Engine",
    icon: Server,
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
    description: "High-throughput server-side applications, microservices, and secure API gateways.",
    skills: ["Go (Golang)", "C# / .NET Core", "Node.js", "RESTful APIs", "JSON Architecture", "gRPC & WebSockets"]
  },
  {
    category: "Database & Storage",
    icon: Database,
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
    description: "Reliable relational data management engineered for high availability and local offline sync.",
    skills: ["PostgreSQL", "SQLite (Local/Embedded)", "Database Indexing", "Data Encryption at Rest", "Automated Backups"]
  },
  {
    category: "Infrastructure & System Hardening",
    icon: ShieldCheck,
    badgeColor: "bg-purple-100 text-purple-900 border-purple-200",
    description: "Enterprise security architecture, localized server setup, and threat mitigation.",
    skills: ["System Hardening", "Vulnerability Management", "Windows Server Admin", "Hyper-V Virtualization", "Network Policy & Active Directory", "Patch Operations", "Nessus Auditing"]
  }
];

const Technology: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto page-enter">
      
      {/* 1. HERO HEADER */}
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-semibold uppercase tracking-wider">
            <Cpu size={14} className="text-blue-700" /> Technology Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Engineered with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-emerald-600">Modern Tech Stack</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We utilize industry-proven technologies and security-first frameworks to build software and server environments that scale effortlessly.
          </p>
        </div>
      </ScrollReveal>

      {/* 2. TECH CATEGORY GRID */}
      <ScrollReveal stagger>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techStack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center border border-slate-200 shadow-sm">
                      <Icon size={24} />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      Enterprise Grade
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">{item.category}</h2>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      {/* 3. DEPLOYMENT & SOVEREIGNTY BANNER */}
      <ScrollReveal>
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Web & Cloud Platforms</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Deployed on global cloud providers with encrypted traffic & real-time autoscaling.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <HardDrive size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Local & On-Premise Infrastructure</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Configured for complete data sovereignty within your internal server environment.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Security-First Baseline</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Built-in threat detection, role-based access control, and routine system hardening.</p>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>

    </div>
  );
};

export default Technology;