import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Server,
  Building2,
  FileCheck,
  Calculator,
  Award,
  Layers,
  Dumbbell,
  Hospital,
  Utensils,
  Wrench
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  image: string;
  fallbackIcon: React.ElementType;
  metrics: string;
  highlights: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  // --- Existing Projects ---
  {
    id: "cbs-v2",
    title: "CBS V2 – Core Banking System",
    category: "Fintech & Banking Technology",
    tech: ["Go (Golang)", "React", "PostgreSQL", "Docker"],
    description: "Modular banking application covering KYC, AML, CASA, FD, RD, Loans, GL, Teller, Cash Management, Clearing, Payments, Forex, and Reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: Shield,
    metrics: "Sub-10ms Latency · 99.99% Uptime",
    highlights: ["Real-time General Ledger & Teller Clearance", "Automated AML & KYC Compliance Checks", "Multi-Currency Forex Engine"]
  },
  {
    id: "itam",
    title: "ITAM – IT Asset Management",
    category: "Infrastructure & Systems",
    tech: ["React", "TypeScript", "Go", "PostgreSQL"],
    description: "Structured tracking of endpoints, network devices, servers, CCTV, and complete hardware asset lifecycle management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: Server,
    metrics: "10,000+ Tracked Endpoint Nodes",
    highlights: ["Real-time device heartbeat monitoring", "Hardware depreciation & lifecycle reports", "CCTV & network rack inventory tracking"]
  },
  {
    id: "vms",
    title: "VMS – Vendor Management System",
    category: "Enterprise Software",
    tech: ["React", "C# / .NET", "SQLite"],
    description: "Local-first system for vendor master, contracts, SLA, compliance, performance evaluation, purchase orders, invoices, and tickets.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: Building2,
    metrics: "Local-First Offline Resiliency",
    highlights: ["Vendor SLA & compliance audit logs", "Automated PO & invoice verification", "Offline-first database synchronization"]
  },
  {
    id: "board-meeting",
    title: "Board Meeting Management",
    category: "Governance & Compliance",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    description: "Governance & compliance tool for board agendas, minutes, action items, and regulatory RBI circular tracking.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: FileCheck,
    metrics: "100% Regulatory Audit Readiness",
    highlights: ["RBI Circular tag & compliance linking", "Digital agenda & minute archiving", "Role-based executive access control"]
  },
  {
    id: "insurance-portal",
    title: "Insurance Product Portal",
    category: "Web Platform & Fintech",
    tech: ["React", "Tailwind CSS", "REST APIs"],
    description: "Responsive web interface for insurance product info, policy details, and real-time premium calculations.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: Calculator,
    metrics: "Instant Quote Generation",
    highlights: ["Dynamic premium calculation algorithm", "Responsive mobile & desktop UI", "Seamless customer lead onboarding"]
  },

  // --- NEW: Custom Applications ---
  {
    id: "gym-management",
    title: "Gym Management System",
    category: "Custom Applications",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    description: "Complete gym management solution with member tracking, attendance, billing, class scheduling, and trainer assignment modules.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: Dumbbell,
    metrics: "500+ Active Members",
    highlights: ["Member & trainer scheduling", "Automated billing & payment tracking", "Attendance & progress monitoring"]
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    category: "Custom Applications",
    tech: ["React", "C#", "SQL Server", "ASP.NET"],
    description: "Comprehensive hospital management with patient records, appointment scheduling, billing, pharmacy inventory, and staff management.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: Hospital,
    metrics: "100+ Daily Appointments",
    highlights: ["Patient record & EHR management", "Pharmacy inventory & billing", "Staff & doctor scheduling"]
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    category: "Custom Applications",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    description: "End-to-end restaurant solution with table booking, POS, inventory tracking, order management, and staff scheduling.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: Utensils,
    metrics: "Real-time Order Sync",
    highlights: ["Table booking & POS integration", "Inventory & ingredient tracking", "Real-time order management"]
  },

  // --- NEW: System Administration ---
  {
    id: "system-admin",
    title: "System Administration & Server Room Setup",
    category: "System Administration",
    tech: ["Windows Server", "Linux", "VMware", "Firewall"],
    description: "Complete server room setup, network configuration, firewall implementation, and ongoing system administration support for enterprises.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: Server,
    metrics: "Zero Downtime Infrastructure",
    highlights: ["Server room design & rack setup", "Firewall & network security", "24/7 system monitoring & support"]
  },
  {
    id: "it-solutions",
    title: "End-to-End IT Solutions",
    category: "System Administration",
    tech: ["Hardware", "Software", "Security", "Backup"],
    description: "Comprehensive IT solutions including hardware procurement, software deployment, security audits, data backup, and disaster recovery planning.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    fallbackIcon: Wrench,
    metrics: "100% Audit Compliance",
    highlights: ["Hardware & software procurement", "Data backup & disaster recovery", "Security vulnerability assessments"]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const categories = [
    "All",
    "Fintech & Banking Technology",
    "Infrastructure & Systems",
    "Enterprise Software",
    "Governance & Compliance",
    "Web Platform & Fintech",
    "Custom Applications",
    "System Administration"
  ];

  const filteredProjects = filter === "All" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen page-enter">
      
      {/* 1. HERO SECTION (without Instagram) */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900">
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-emerald-600">Case Studies</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Demonstrations of our technical capability, security-first architecture, and enterprise software execution – including custom applications and system administration.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                filter === cat
                  ? "bg-blue-900 text-white shadow-md font-bold"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. STATS / TRUST BAR (without certificates) */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="glass-card p-3 text-center">
              <div className="text-xl font-bold text-blue-600">10+</div>
              <div className="text-[10px] text-gray-500 font-medium">Enterprise Solutions</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="text-xl font-bold text-blue-600">100%</div>
              <div className="text-[10px] text-gray-500 font-medium">VAPT Audited</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="text-xl font-bold text-blue-600">6</div>
              <div className="text-[10px] text-gray-500 font-medium">Industry Verticals</div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="text-xl font-bold text-blue-600">2+</div>
              <div className="text-[10px] text-gray-500 font-medium">Years Production</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* (Certificate banner removed) */}

      {/* 3. PROJECTS GRID */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const FallbackIcon = project.fallbackIcon;
              const hasError = imageErrors[project.id];

              return (
                <div 
                  key={project.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Image Banner with Fallback */}
                    <div className="relative h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                      {!hasError ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex flex-col items-center justify-center p-6 text-white text-center">
                          <FallbackIcon size={44} className="text-emerald-400 mb-2" />
                          <span className="font-bold text-sm">{project.title}</span>
                        </div>
                      )}
                      
                      <span className="absolute top-4 left-4 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-blue-900 border border-slate-200 shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors flex items-center justify-between">
                          <span>{project.title}</span>
                          <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                        </h3>
                        
                        <p className="text-emerald-700 text-xs font-mono mt-1 font-semibold">
                          {project.metrics}
                        </p>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features Bullet List */}
                      <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                        {project.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Tech Stack */}
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-200"
                    >
                      Request Technical Case Study <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* 4. SYSTEM ADMIN / IT SOLUTIONS CTA */}
      <ScrollReveal>
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border border-slate-700 shadow-2xl">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
                  <Wrench size={14} className="inline mr-1" /> IT Infrastructure & System Admin
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Need System Admin Support or Server Room Setup?
                </h2>
                <p className="text-slate-300 text-sm max-w-2xl">
                  From server room configuration and network setup to ongoing system administration, 
                  we provide end-to-end IT infrastructure support for enterprises.
                </p>
              </div>
              <Link 
                to="/contact" 
                className="group px-8 py-4 rounded-xl font-bold bg-cyan-600 text-white hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center gap-2 text-sm shrink-0"
              >
                Request IT Support <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5. FINAL CTA (without Instagram) */}
      <ScrollReveal>
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 text-center border-blue-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Let's Build Something Great Together
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
              Have a project in mind? We're here to turn your ideas into reality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white font-bold hover:bg-blue-800 transition-all shadow-md"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};

export default Projects;