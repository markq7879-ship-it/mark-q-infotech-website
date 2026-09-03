import SectionTitle from '../components/SectionTitle/SectionTitle';
import { Award, GraduationCap, Briefcase, Shield, Code2, Server, Database, ArrowRight } from 'lucide-react';

const Founder = () => (
  <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="relative text-center border-b border-slate-200 pb-8">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 rounded-full" />
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg shadow-blue-200 mb-4">
            AR
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Mohd Abdul Razzak
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-2">
            Software Engineer · Cybersecurity · Banking Technology
          </p>

          <div className="inline-flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sm font-semibold text-blue-700">
            <Briefcase size={14} /> Founder & Lead Architect · Mark-Q Infotech
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section>
        <SectionTitle>Professional Summary</SectionTitle>
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            Software Engineer and Banking Technology Professional with experience
            spanning software development, banking operations, cybersecurity,
            IT infrastructure, and enterprise technology.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-5 border border-blue-200">
              <p className="text-slate-700 text-sm leading-relaxed">
                Combining a background in <strong className="text-blue-700">finance and banking</strong> with 
                information technology and cybersecurity, I specialize in understanding 
                business requirements and transforming them into secure, scalable, 
                production-ready software systems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-5 border border-emerald-200">
              <p className="text-slate-700 text-sm leading-relaxed">
                My experience includes <strong className="text-emerald-700">Core Banking Systems</strong>, 
                IT Asset Management, Vendor Management, cybersecurity, VAPT support, 
                vulnerability remediation, infrastructure management, banking operations, 
                and enterprise application development.
              </p>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            I work across the complete software lifecycle — from requirements
            and solution architecture to UI/UX, database design, full-stack
            development, security validation, deployment, and production support.
          </p>
        </div>
      </section>

      {/* Experience */}
      {/* Professional Experience */}
<section>
  <SectionTitle>Professional Experience</SectionTitle>

  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <h3 className="text-xl font-bold text-slate-900">
        Founder & Lead Architect
      </h3>

      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Active
      </span>
    </div>

    <p className="text-slate-500 text-sm mt-1">
      Mark-Q Infotech · 2026 – Present
    </p>
    <p className="text-slate-500 text-sm mt-1">Banking Technology & IT Professional </p>

    <ul className="grid sm:grid-cols-2 gap-2 text-slate-600 mt-4 text-sm leading-relaxed">
      <li className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors">
        <span className="text-blue-600 mt-0.5">▹</span>
        Lead software architecture, application development, and technical strategy
      </li>

      <li className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors">
        <span className="text-blue-600 mt-0.5">▹</span>
        Design and develop enterprise software, banking technology, and workflow systems
      </li>

      <li className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors">
        <span className="text-blue-600 mt-0.5">▹</span>
        Lead full-stack development, backend architecture, APIs, databases, and system integration
      </li>

      <li className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors">
        <span className="text-blue-600 mt-0.5">▹</span>
        Apply cybersecurity principles across application, infrastructure, and system environments
      </li>

      <li className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors">
        <span className="text-blue-600 mt-0.5">▹</span>
        Work on vulnerability remediation, security hardening, VAPT support, and IT security practices
      </li>

      <li className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors">
        <span className="text-blue-600 mt-0.5">▹</span>
        Develop technology solutions for banking, financial operations, and enterprise environments
      </li>

      <li className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors">
        <span className="text-blue-600 mt-0.5">▹</span>
        Lead technical planning, architecture decisions, development standards, and quality practices
      </li>

      <li className="flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors">
        <span className="text-blue-600 mt-0.5">▹</span>
        Coordinate technical requirements and solution design with clients and internal teams
      </li>
    </ul>
  </div>
</section>

      {/* Core Competencies */}
      <section>
        <SectionTitle>Core Competencies</SectionTitle>

        <div className="grid md:grid-cols-2 gap-5">
          
          {/* Cybersecurity */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                <Shield size={18} />
              </div>
              <h3 className="font-bold text-slate-900">Cybersecurity & Information Security</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['VAPT Support', 'Vulnerability Management', 'Patch Management', 'Security Hardening', 'IT Audits', 'Security Baselines', 'Access Control', 'RBI Cyber Framework'].map(skill => (
                <span key={skill} className="bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs text-blue-700 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Banking */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                <Briefcase size={18} />
              </div>
              <h3 className="font-bold text-slate-900">Banking Technology & Operations</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Core Banking', 'Banking Operations', 'Clearing', 'NEFT/SFMS', 'Ledger Operations', 'Reconciliation', 'ATM/CDM', 'Banking Systems'].map(skill => (
                <span key={skill} className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-xs text-emerald-700 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Software Engineering */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-700">
                <Code2 size={18} />
              </div>
              <h3 className="font-bold text-slate-900">Software Engineering</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['React', 'TypeScript', 'JavaScript', 'Go', 'C#/.NET', 'REST APIs', 'PostgreSQL', 'SQLite', 'HTML/CSS', 'Full-Stack Development', 'Database Design', 'API Development'].map(skill => (
                <span key={skill} className="bg-purple-50 border border-purple-200 px-3 py-1 rounded-full text-xs text-purple-700 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-orange-100 text-orange-700">
                <Server size={18} />
              </div>
              <h3 className="font-bold text-slate-900">Infrastructure & Systems</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Windows', 'Windows Server', 'Hyper-V', 'LAN', 'Network Troubleshooting', 'CCTV', 'Server Infrastructure', 'Backups', 'IT Asset Management'].map(skill => (
                <span key={skill} className="bg-orange-50 border border-orange-200 px-3 py-1 rounded-full text-xs text-orange-700 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section>
        <SectionTitle>Education</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-700 shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">MCA (Cyber Security)</h3>
              <p className="text-sm text-slate-600">MESCO Institute · 2026</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700 shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">BCA (Information Technology)</h3>
              <p className="text-sm text-slate-600">Wesley PG College</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">B.Com (Computer Applications)</h3>
              <p className="text-sm text-slate-600">Presidency Degree College · 2022</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
            <div className="p-3 rounded-xl bg-orange-100 text-orange-700 shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Intermediate (MPC)</h3>
              <p className="text-sm text-slate-600">Sri Chandra Junior College · 2019</p>
            </div>
          </div>

        </div>
      </section>

      <section className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Professional Certifications & Credentials</h3>
        <p className="text-xs text-slate-500 mt-1">
          Active credentials, ongoing formal specializations, and strategic technical roadmap.
        </p>
      </div>

      {/* DOMAIN 1: CYBERSECURITY & OFFENSIVE SECURITY */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
          Cybersecurity & Offensive Security
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* CompTIA Security+ */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 font-bold text-sm">
                SEC+
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">CompTIA Security+</h5>
                <p className="text-xs text-slate-500">CompTIA · Systems Security & Risk</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                  Active Candidate
                </span>
              </div>
            </div>
          </div>

          {/* CEH */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-purple-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 font-bold text-sm">
                CEH
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">Certified Ethical Hacker (CEH)</h5>
                <p className="text-xs text-slate-500">EC-Council · VAPT & Threat Analysis</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
                  Exam Scheduled
                </span>
              </div>
            </div>
          </div>

          {/* eJPT */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-rose-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 font-bold text-sm">
                eJPT
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">eJPT – Junior Penetration Tester</h5>
                <p className="text-xs text-slate-500">INE Security · Practical Web & Network PenTesting</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200">
                  Pursuing
                </span>
              </div>
            </div>
          </div>

          {/* CompTIA CySA+ */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-red-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center shrink-0 font-bold text-sm">
                CySA+
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">CompTIA CySA+</h5>
                <p className="text-xs text-slate-500">CompTIA · Behavioral Analytics & SOC Operations</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                  Roadmap Target
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DOMAIN 2: CLOUD & INFRASTRUCTURE */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
          Cloud Infrastructure & Networking
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* AWS Solutions Architect */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-amber-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 font-bold text-sm">
                AWS
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">AWS Solutions Architect</h5>
                <p className="text-xs text-slate-500">Amazon Web Services · Associate Level</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                  Active Candidate
                </span>
              </div>
            </div>
          </div>

          {/* Cisco CCNA */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-orange-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center shrink-0 font-bold text-sm">
                CCNA
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">Cisco CCNA (200-301)</h5>
                <p className="text-xs text-slate-500">Cisco · Network Fundamentals & Routing</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200">
                  Pursuing
                </span>
              </div>
            </div>
          </div>

          {/* Microsoft Azure AZ-900 */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-sky-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 font-bold text-sm">
                AZ-900
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">Microsoft Azure Fundamentals</h5>
                <p className="text-xs text-slate-500">Microsoft · Enterprise Cloud Security</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200">
                  Pursuing
                </span>
              </div>
            </div>
          </div>

          {/* Google Automation with Python */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-yellow-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-700 flex items-center justify-center shrink-0 font-bold text-sm">
                PY
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">IT Automation with Python</h5>
                <p className="text-xs text-slate-500">Google · Scripting & System Administration</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                  Active Candidate
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DOMAIN 3: GOVERNANCE, AUDIT & FINTECH */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
          Governance, Compliance & FinTech
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* ISO 27001 Lead Implementer */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-emerald-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                27001
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">ISO/IEC 27001 Lead Implementer</h5>
                <p className="text-xs text-slate-500">PECB · ISMS Architecture & Frameworks</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200">
                  Pursuing
                </span>
              </div>
            </div>
          </div>

          {/* CISM */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-cyan-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 font-bold text-xs">
                CISM
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">Information Security Manager (CISM)</h5>
                <p className="text-xs text-slate-500">ISACA · Enterprise Security Governance</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                  Roadmap Target
                </span>
              </div>
            </div>
          </div>

          {/* Digital Banking & FinTech */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-indigo-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 font-bold text-xs">
                BANK
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">Digital Banking & FinTech Security</h5>
                <p className="text-xs text-slate-500">IIBF / Industry · Payment Gateways & Banking IT</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                  Roadmap Target
                </span>
              </div>
            </div>
          </div>

          {/* ISO 27001 Lead Auditor */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:border-teal-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 font-bold text-xs">
                AUDIT
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-slate-900 text-sm truncate">ISO/IEC 27001 Lead Auditor</h5>
                <p className="text-xs text-slate-500">PECB · ISMS Compliance & Third-Party Audit</p>
                <span className="inline-block mt-2 text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                  Roadmap Target
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footnote */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
        <p className="text-xs text-slate-600">
          Continuous professional development structured across <strong>Cybersecurity Operations</strong>, <strong>Cloud Infrastructure</strong>, and <strong>Banking Security Compliance</strong>.
        </p>
      </div>
    </section>

      {/* Engineering Philosophy */}
      <section>
        <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-700 text-white shadow-xl shadow-blue-200">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
              <Award size={14} /> Engineering Approach
            </span>

            <h2 className="text-3xl font-extrabold text-white">
              From Idea to Production
            </h2>

            <p className="text-blue-100 text-sm leading-relaxed max-w-3xl">
              Transforming business requirements into secure, scalable, reliable,
              and production-ready digital solutions — from initial concept and
              requirements through architecture, UI/UX, development, security
              validation, deployment, and ongoing support.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Requirements',
                'Architecture',
                'UI/UX',
                'Development',
                'Security',
                'Testing',
                'Deployment',
                'Production Support'
              ].map(step => (
                <span
                  key={step}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-xl text-sm font-semibold text-white hover:bg-white/30 transition-colors"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
);

export default Founder;