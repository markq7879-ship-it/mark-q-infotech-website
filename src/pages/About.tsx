import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Cpu, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Lock,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  Server,
  Database,
  Phone,    // <-- Add this
  Mail
} from 'lucide-react';

const VALUES = [
  {
    icon: Lock,
    title: "Security-First Architecture",
    description: "Every line of code and infrastructure layout is engineered with zero-trust principles and proactive threat defense."
  },
  {
    icon: Cpu,
    title: "Fintech & CBS Precision",
    description: "High-throughput engines designed for sub-10ms transactional speeds and seamless regulatory compliance."
  },
  {
    icon: Target,
    title: "Client-Centric Scale",
    description: "Transparent, honest upfront scoping with modular code bases built to adapt as your enterprise expands."
  }
];

const TIMELINE = [
  {
    year: "2024",
    title: "Foundation",
    desc: "Established with a focus on cybersecurity, IT infrastructure, banking technology, and enterprise IT operations.",
  },
  {
    year: "2025",
    title: "Digital Engineering & Product Development",
    desc: "Expanded into full-stack software engineering, developing custom business applications, banking systems, automation platforms, and secure digital solutions.",
  },
  {
    year: "2026",
    title: "Enterprise Technology Solutions",
    desc: "Expanded capabilities across IT Asset Management, Vendor Management, enterprise applications, cybersecurity, infrastructure, and custom software delivery.",
  },
]

const About: React.FC = () => {
  return (
    <div 
      className="bg-slate-50 text-slate-800 min-h-screen"
      style={{
        backgroundImage: `
          linear-gradient(rgba(248, 250, 252, 0.65), rgba(248, 250, 252, 0.65)),
          url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck size={14} className="text-blue-700" /> Driven by Engineering Excellence
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-emerald-600">Mark-Q Infotech</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We deliver secure, scalable digital solutions for banking, business, and modern IT operations.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & FOUNDER SPOTLIGHT */}
      <section className="py-20 bg-white/90 backdrop-blur-sm border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Company Story */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 leading-tight">
                  Bridging Business, Technology & Security
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Mark-Q Infotech is a technology company founded by{' '}
                <strong className="text-slate-900">Mohd Abdul Razzak</strong>,
                combining expertise across finance, banking operations, software
                engineering, cybersecurity, and IT infrastructure.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Our approach is built around understanding both the{' '}
                <strong className="text-slate-800">business problem</strong> and the{' '}
                <strong className="text-slate-800">technology required to solve it</strong>.
                We design and develop secure, scalable digital systems for banking,
                finance, enterprises, and technology-driven organisations.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                From software architecture and UI/UX to database engineering,
                application development, security validation, deployment, and
                ongoing support, we focus on delivering solutions that are
                reliable, maintainable, and production-ready.
              </p>

              {/* Expertise Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    Business Domain
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    Finance & Banking Technology
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    Software Engineering
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    Full-Stack & Enterprise Applications
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    Security
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    Cybersecurity & VAPT
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    Infrastructure
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    IT Infrastructure & Systems
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-blue-900 text-white font-bold hover:bg-blue-800 transition-all text-sm flex items-center gap-2 shadow-md"
                >
                  Work With Us
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/founder"
                  className="px-6 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold hover:bg-slate-200 transition-all text-sm"
                >
                  Meet the Founder
                </Link>
              </div>
            </div>

            {/* Founder Profile */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50/95 border border-slate-200 p-7 sm:p-8 rounded-2xl relative overflow-hidden shadow-sm">

                {/* Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-700 to-emerald-600" />

                {/* Founder Header */}
                <div className="flex items-center gap-4 mb-7 border-b border-slate-200 pb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-xl shadow-md">
                    AR
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Mohd Abdul Razzak
                    </h3>
                    <p className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-wide">
                      Founder & Lead Architect
                    </p>
                  </div>
                </div>

                {/* Founder Introduction */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  A multidisciplinary technology professional combining{' '}
                  <strong className="text-slate-800">
                    finance, banking, information technology, cybersecurity,
                    and software engineering
                  </strong>{' '}
                  to design and build practical enterprise solutions.
                </p>

                {/* Education */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Academic Foundation
                  </h4>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>
                        <strong>MCA (Cyber Security)</strong> — Cybersecurity & Information Security
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>
                        <strong>BCA (IT)</strong> — Information Technology
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>
                        <strong>B.Com (Computer Application) / Finance</strong> — Finance & Business Foundation
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Expertise */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    Professional Expertise
                  </h4>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>Software Engineering & Solution Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>Banking Technology & Operations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>Cybersecurity, VAPT & Security Engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>IT Infrastructure & Enterprise Systems</span>
                    </div>
                  </div>
                </div>

                {/* From Idea to Production */}
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
                    From Idea to Production
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Idea → Requirements → Architecture → UI/UX → Development →
                    Security Validation → Deployment → Production Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">Principles</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">What Sets Us Apart</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white/95 backdrop-blur-sm border border-slate-200 p-8 rounded-2xl hover:border-blue-400 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-900 mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. COMPANY TIMELINE / MILESTONES */}
      <section className="py-20 bg-white/95 backdrop-blur-sm border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">
                Journey
            </span>

            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Our Evolution
            </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-200">
            {TIMELINE.map((item, idx) => (
                <div
                key={idx}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900 text-white font-black text-xs shrink-0 z-10 border-4 border-slate-50 shadow-md">
                    {idx + 1}
                </div>

                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                    <span className="text-emerald-700 text-xs font-mono font-bold">
                    {item.year}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed mt-2">
                    {item.desc}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
            
            {/* 5. LEADERSHIP & CORE TEAM */}
<section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center max-w-2xl mx-auto mb-16">
    <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">Our Team</span>
    <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Leadership & Technology Team</h2>
    <p className="text-slate-600 text-sm mt-4 leading-relaxed">
      A multidisciplinary team combining software engineering, banking, finance, cybersecurity, 
      infrastructure, data analytics, and business strategy.
    </p>
  </div>

  {/* Founder & Lead Architect - First */}
  <div className="mb-12">
    <div className="relative">
      <div className="absolute -top-3 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Founder & Lead Architect</h3>
    </div>
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold text-slate-900">Mohd Abdul Razzak</h4>
          <p className="text-emerald-700 text-sm font-semibold">Software Engineering · Banking Technology · Cybersecurity</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-medium">Full-Stack Development</span>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-medium">Core Banking Systems</span>
          <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs text-purple-700 font-medium">Cybersecurity & VAPT</span>
          <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs text-orange-700 font-medium">IT Infrastructure</span>
        </div>
      </div>
    </div>
  </div>

  {/* Leadership & Core Team Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* 1. Syed Saber Hussain */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
          SH
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Syed Saber Hussain</h4>
          <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">Investor & Chief Business Strategist</p>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        Strategic direction · Investment advisory · Business development · Institutional strategy
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">M.Sc.</span>
        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">B.Ed.</span>
        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">B.Sc. Mathematics</span>
      </div>
      <div className="mt-3 pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
          Telangana State Education Department
        </span>
      </div>
    </div>

    {/* 2. Syed Abdul Shahnawaz */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-cyan-300">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-sm shrink-0">
          SS
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Syed Abdul Shahnawaz</h4>
          <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">Investor & Head of Data Analytics / Tech Lead</p>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        Cloud data architecture · Predictive analytics · Enterprise technology strategy · Strategic investment
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">B.Tech (Osmania University)</span>
        <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200">M.Sc. Data Science (USA)</span>
      </div>
    </div>

    {/* 3. Syed Fasiullah */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-orange-300">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm shrink-0">
          SF
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Syed Fasiullah</h4>
          <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">Network Engineer & Systems Administrator</p>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        Network infrastructure · CCTV & surveillance · Systems administration · IT operations
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">B.Sc.</span>
        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">M.Sc.</span>
        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">Osmania University</span>
      </div>
    </div>

    {/* 4. Mohammed Saber */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-emerald-300">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
          MS
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Mohammed Saber</h4>
          <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">Senior Executive & Head of Finance</p>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        Financial management · Accounts · Budgeting · Business finance
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">MBA (Finance)</span>
        <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">B.Com</span>
        <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200">KPMG Dubai · 4 yrs</span>
      </div>
    </div>

    {/* 5. Syed Abdul Sarfaraz */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-indigo-300">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm shrink-0">
          AS
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Syed Abdul Sarfaraz</h4>
          <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">Associate Software Engineer & Technical Operations Lead</p>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        Full-stack development · Software quality assurance · System performance · Technical project management
      </p>
      <div className="mt-3">
        <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
          B.Tech (Osmania University)
        </span>
      </div>
    </div>

    {/* 6. Mohammed Adnan Faraaz */}
    {/* 6. Mohammed Adnan Faraaz */}
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-purple-300">
  <div className="flex items-start gap-3 mb-3">
    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">
      AF
    </div>
    <div>
      <h4 className="font-bold text-slate-900">Mohammed Adnan Faraaz</h4>
      <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">Marketing Incharge</p>
    </div>
  </div>
  <p className="text-slate-600 text-sm leading-relaxed">
    Brand strategy · Marketing operations · Lead generation · Business promotion
  </p>
  <div className="mt-3 flex flex-wrap gap-1.5">
    <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">BBA Marketing</span>
    <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">MBA Finance</span>
    <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200">Scrum Master</span>
    <span className="text-xs bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-full border border-cyan-200">Claude AI</span>
    <span className="text-xs bg-red-50 text-red-700 px-2.5 py-1 rounded-full border border-red-200">Cybersecurity</span>
  </div>
</div>

  </div>

  {/* Note about contact - without displaying personal details */}
  <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-center">
    <p className="text-xs text-slate-500">
      For business inquiries or to connect with our leadership team, please contact us through our official channels.
    </p>
  </div>
</section>


{/* 6. CONTACT THE TEAM */}
<section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="relative overflow-hidden rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-700 text-white shadow-xl shadow-blue-200">
    
    {/* Decorative blobs */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
    
    <div className="relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Want to Work With Our Team?
          </h2>
          <p className="text-blue-100 text-sm max-w-xl">
            Reach out to the right person based on your requirements – connect directly via phone or email.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <a 
            href="/contact" 
            className="px-6 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2 text-sm"
          >
            General Inquiry <ArrowRight size={16} />
          </a>
          <a 
            href="mailto:markq7879@gmail.com" 
            className="px-6 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/30 transition-all text-sm"
          >
            Email Founder Directly
          </a>
        </div>
      </div>

      {/* Team Contact Cards - Same order as Leadership section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* 1. Syed Saber Hussain - Strategy & Investment */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
              SH
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Syed Saber Hussain</h4>
              <p className="text-[10px] text-blue-200">Strategy & Investment</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="tel:9848551105" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Phone size={12} /> 9848551105
            </a>
            <a href="mailto:syedsaber2008@gmail.com" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Mail size={12} /> Email
            </a>
          </div>
        </div>

        {/* 2. Syed Abdul Shahnawaz - Data & Technology */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
              SS
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Syed A. Shahnawaz</h4>
              <p className="text-[10px] text-blue-200">Data & Technology</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="tel:17733025598" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Phone size={12} /> 17733025598
            </a>
            <a href="mailto:syedfasi1604@gmail.com" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Mail size={12} /> Email
            </a>
          </div>
        </div>

        {/* 3. Syed Fasiullah - IT & Network */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
              SF
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Syed Fasiullah</h4>
              <p className="text-[10px] text-blue-200">Networking & IT Ops</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="tel:8978776883" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Phone size={12} /> 8978776883
            </a>
            <a href="mailto:syedfasi1604@gmail.com" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Mail size={12} /> Email
            </a>
          </div>
        </div>

        {/* 4. Mohammed Saber - Finance & Accounts */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
              MS
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Mohammed Saber</h4>
              <p className="text-[10px] text-blue-200">Finance & Accounts</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="tel:9618896159" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Phone size={12} /> 9618896159
            </a>
            <a href="mailto:mohdsaber9618@gmail.com" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Mail size={12} /> Email
            </a>
          </div>
        </div>

        {/* 5. Syed Abdul Sarfaraz - Software Engineering */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
              AS
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Syed A. Sarfaraz</h4>
              <p className="text-[10px] text-blue-200">Software Engineering</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="tel:7569374197" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Phone size={12} /> 7569374197
            </a>
            <a href="mailto:syedsarfaraz.liet@gmail.com" 
               className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
              <Mail size={12} /> Email
            </a>
          </div>
        </div>

        {/* 6. Mohammed Adnan Faraaz - Marketing */}
        {/* 6. Mohammed Adnan Faraaz - Marketing */}
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">
      AF
    </div>
    <div>
      <h4 className="text-sm font-semibold text-white">Mohammed Adnan Faraaz</h4>
      <p className="text-[10px] text-blue-200">Marketing & Brand</p>
    </div>
  </div>
  <div className="flex flex-wrap gap-2 mt-2">
    <a href="tel:9704050494" 
       className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
      <Phone size={12} /> 9704050494
    </a>
    <a href="mailto:fraaz0123@gmail.com" 
       className="inline-flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-all">
      <Mail size={12} /> Email
    </a>
  </div>
  
</div>

      </div>

      {/* Footer Note */}
      <div className="mt-6 pt-4 border-t border-white/20 text-center">
        <p className="text-[11px] text-blue-200">
          📞 All phone numbers are clickable. 📧 All emails are clickable. We respond within 24 hours.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;