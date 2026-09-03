import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Server,
  Award,
  Dumbbell,
  Hospital,
  Utensils,
  Wrench,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  Database,
  Cloud,
  HardDrive,
  Users,
  Target,
  Zap,
  Lock,
  MessageSquare,
  Code2,
  Rocket,
  Mail
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';

const Solutions = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen page-enter">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-semibold uppercase tracking-wider">
            <Rocket size={14} className="text-blue-700" /> End-to-End Technology & Execution
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900">
            Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-emerald-600">Solutions & Engineering</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We transform business requirements and ideas into secure, scalable, production-ready software, enterprise applications, and IT infrastructure — from architecture and development to security validation, deployment, and ongoing support.
          </p>
        </div>
      </section>

      {/* 2. ENGINEERING CAPABILITIES (replaces "Certified" banner) */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-gradient-to-r from-slate-100 to-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center shadow-md">
                  <Code2 size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Engineering Capabilities</h3>
                  <p className="text-xs text-slate-500">Full‑stack, infrastructure, security & automation</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Enterprise Application Engineering
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Full-Stack Web Development
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Mobile Application Development
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> DevOps & Application Deployment
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> IT Infrastructure & Systems Engineering
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Cybersecurity & Security Engineering
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Banking Technology Solutions
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> API & Backend Engineering
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Database Architecture & Engineering
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Vulnerability Management & Security Assessment
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Security Hardening & Compliance
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-semibold shadow-sm">
                  <CheckCircle2 size={14} className="text-emerald-600" /> Business Process Automation
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. WHAT WE BUILD & MANAGE (updated heading & description) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">Capabilities</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">What We Build & Manage for Your Business</h3>
            <p className="text-slate-600 text-sm">Comprehensive software, infrastructure, and technology services designed around your operational workflows, business requirements, and security needs.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Customized Gym App */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <Dumbbell size={22} />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Custom Gym Management Apps</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailored member check-in portals, automated recurring billing, workout/trainer scheduling, and membership tracking.
              </p>
            </div>

            {/* Hospital Systems */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Hospital size={22} />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Hospital & Clinic Management</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Patient records (EHR/EMR), doctor appointment schedules, pharmacy billing, and integrated laboratory reporting modules.
              </p>
            </div>

            {/* Restaurant POS */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Utensils size={22} />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Restaurant & POS Systems</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Digital QR menus, Kitchen Display Systems (KDS), real-time table management, billing, and ingredient inventory tracking.
              </p>
            </div>

            {/* System Admin & Server Setup */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                <Server size={22} />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Server Room & System Admin</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Physical server rack setup, network cable layout, Active Directory configurations, CCTV NVR integration, and 24/7 admin support.
              </p>
            </div>

            {/* Web & Mobile Applications */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center">
                <Smartphone size={22} />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Web & Mobile Application Dev</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full-stack custom software engineered with React, React Native, TypeScript, Node.js, and Golang for Android, iOS, and Web.
              </p>
            </div>

            {/* End-to-End IT Solutions */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-900 flex items-center justify-center">
                <Wrench size={22} />
              </div>
              <h4 className="text-lg font-bold text-slate-900">IT Management & Maintenance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous software updates, database backups, security patching, hardware lifecycle management, and emergency technical support.
              </p>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 4. EXECUTION PROCESS (updated steps) */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
              <h2 className="text-xs font-mono font-bold text-blue-900 uppercase tracking-widest">How We Build & Deliver</h2>
              <h3 className="text-3xl font-extrabold text-slate-900">From Business Requirements to Production-Ready Technology</h3>
              <p className="text-slate-600 text-sm">A structured engineering process ensuring quality, security, and reliability.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative space-y-3 hover:border-blue-400 transition-all">
                <span className="text-xs font-mono font-bold text-blue-900 bg-blue-100 px-2.5 py-1 rounded-md">STEP 01</span>
                <h4 className="font-bold text-slate-900 text-base">Discovery & Requirements Engineering</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We understand your business objectives, operational workflows, users, existing systems, and technical requirements. We translate these requirements into a clear solution blueprint and implementation roadmap.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative space-y-3 hover:border-blue-400 transition-all">
                <span className="text-xs font-mono font-bold text-blue-900 bg-blue-100 px-2.5 py-1 rounded-md">STEP 02</span>
                <h4 className="font-bold text-slate-900 text-base">Architecture, UI/UX & Software Engineering</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We design the system architecture, database structure, APIs, workflows, and user experience, followed by scalable frontend and backend development tailored to your requirements.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative space-y-3 hover:border-blue-400 transition-all">
                <span className="text-xs font-mono font-bold text-blue-900 bg-blue-100 px-2.5 py-1 rounded-md">STEP 03</span>
                <h4 className="font-bold text-slate-900 text-base">Quality Assurance & Security Validation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We perform functional testing, performance validation, security reviews, vulnerability assessment, and deployment-readiness checks to improve reliability, security, and system stability.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative space-y-3 hover:border-emerald-300 transition-all">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">STEP 04</span>
                <h4 className="font-bold text-slate-900 text-base">Deployment & Production Handover</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We deploy and configure the completed solution within your local infrastructure, private environment, or cloud platform. The system is documented, configured, tested, and prepared for production use with ongoing support.
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. FLEXIBLE DEPLOYMENT ARCHITECTURE (updated title & wording) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
                Flexible Deployment Architecture
              </span>
              <h2 className="text-3xl font-extrabold">Deploy Where It Works Best for Your Business</h2>
              <p className="text-slate-300 text-sm">
                Deploy your technology where it works best for your business – on‑premise or in the cloud.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Local / On-Premise */}
              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <HardDrive size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Local / On-Premise Deployment</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Designed for organizations that require greater control over their infrastructure, data, network environment, and internal operations.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Data hosted on your local servers or private infrastructure</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Designed for controlled internal network environments</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Greater control over data access and infrastructure</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Suitable for banking, healthcare, enterprise, and regulated environments</li>
                </ul>
              </div>

              {/* Cloud-Hosted & Multi-Branch */}
              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Cloud size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Cloud-Hosted & Multi-Branch Solutions</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cloud deployments designed for organizations requiring remote access, centralized management, scalability, and multi‑location operations.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Deployment across cloud infrastructure such as AWS, Azure, or DigitalOcean</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Centralized access for distributed teams and branches</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Scalable application and database architecture</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Automated backup and recovery strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. WHY CHOOSE US (updated stronger language) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">Why Choose Us</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">Why Mark-Q Infotech?</h3>
            <p className="text-slate-600 text-sm">Engineering built around your business, security, and long‑term success.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-lg transition-all">
              <Lock className="text-blue-900" size={28} />
              <h4 className="font-bold text-slate-900 text-lg">Security-First Engineering</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Security considerations are incorporated throughout architecture, development, infrastructure configuration, access control, testing, and deployment.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-lg transition-all">
              <Target className="text-emerald-700" size={28} />
              <h4 className="font-bold text-slate-900 text-lg">Business-Driven Customization</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We build around your actual operational workflows and business requirements rather than forcing your organization into a rigid, generic software template.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-lg transition-all">
              <Rocket className="text-amber-600" size={28} />
              <h4 className="font-bold text-slate-900 text-lg">End-to-End Delivery</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                From requirements and architecture to development, testing, deployment, infrastructure configuration, documentation, and user handover — we provide a complete technology delivery lifecycle.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 7. FINAL CTA (updated heading, button text, removed Instagram) */}
      <ScrollReveal>
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Ready to Turn Your Business Requirements Into Technology?
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Discuss your requirements with our engineering team and explore the right software, cybersecurity, banking technology, or infrastructure solution for your organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-6 py-3.5 rounded-xl font-bold bg-blue-900 text-white hover:bg-blue-800 transition-all shadow-md text-sm flex items-center gap-2"
              >
                Discuss Your Requirements <ArrowRight size={16} />
              </Link>
              <a 
                href="mailto:markq7879@gmail.com?subject=Business%20Requirements%20Inquiry&body=Hello,%20I'd%20like%20to%20discuss%20my%20technology%20requirements."
                className="px-6 py-3.5 rounded-xl font-bold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400 transition-all text-sm flex items-center gap-2 shadow-sm"
              >
                <Mail size={16} /> Send Email
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};

export default Solutions;