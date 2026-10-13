import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, ArrowRight, CheckCircle2, Phone, Mail, MapPin, 
  ChevronDown, ChevronUp, Send, MessageSquare, ShieldCheck
} from 'lucide-react';
import { 
  ABOUT_TEXT, SERVICES_LIST, STATS_LIST, 
  TECH_ITEMS, FAQS, TESTIMONIALS 
} from '../data/landingData';

// New process steps defined locally
const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery & Requirements",
    desc: "We understand your business objectives, technical requirements, existing infrastructure, and security considerations before development begins."
  },
  {
    step: 2,
    title: "Architecture & UI/UX Design",
    desc: "We design scalable system architecture, database structures, APIs, workflows, and intuitive user interfaces around your business requirements."
  },
  {
    step: 3,
    title: "Engineering & Development",
    desc: "Our engineers develop secure, maintainable applications using modern technologies such as React, TypeScript, Go, .NET, and PostgreSQL."
  },
  {
    step: 4,
    title: "Quality Assurance & Security Validation",
    desc: "We validate functionality, performance, security controls, API behavior, and application reliability through structured testing and security assessment."
  },
  {
    step: 5,
    title: "Deployment & Ongoing Support",
    desc: "We deploy the solution to the target environment and provide post-deployment support, maintenance, monitoring, and continuous improvements."
  }
];

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Software Engineering & Web Apps',
    message: ''
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent. We will contact you within 24 hours.`);
    setFormData({ name: '', phone: '', email: '', service: 'Software Engineering & Web Apps', message: '' });
  };

  return (
    <div 
      className="bg-slate-50 text-slate-800 min-h-screen"
      style={{
  backgroundImage: `
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
}}
    >
      
      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919704050494"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-xl flex items-center gap-2 font-semibold text-sm transition-transform hover:scale-105"
      >
        <MessageSquare size={20} />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900">
              Engineering Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-emerald-600">Digital Software Solutions</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Software Engineering · Banking Technology & Operations  ·  Cybersecurity · IT Infrastructure Management . Full-Stack Software Development
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="px-6 py-3.5 rounded-xl font-bold bg-blue-900 text-white hover:bg-blue-800 transition-all shadow-md flex items-center gap-2 text-sm">
                Get In Touch <ArrowRight size={18} />
              </a>
              <a href="#services" className="px-6 py-3.5 rounded-xl font-bold bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 transition-all text-sm">
                Our Services
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
              <ShieldCheck className="text-emerald-600" size={22} /> Why Partner With Us?
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600 shrink-0"/> 100% Security-First Code Standards</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600 shrink-0"/> Core Banking & Fintech Integration Expertise</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600 shrink-0"/> Transparent Upfront Timelines & Pricing</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-emerald-600 shrink-0"/> Dedicated Post-Launch Support & Audits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE / ABOUT SECTION */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1 mb-6">About Mark-Q Infotech</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              {ABOUT_TEXT.content}
            </p>
            <Link to="/about" className="text-blue-900 font-semibold text-sm hover:underline flex items-center gap-1">
              Read more about our leadership & team →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">End-to-End Technology Offerings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((srv) => {
            const Icon = srv.icon;
            return (
              <div key={srv.id} className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{srv.description}</p>
                </div>
                <Link to={srv.path} className="text-blue-900 font-bold text-sm hover:text-emerald-700 transition-colors">
                  {srv.linkText}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. STATISTICS SECTION */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS_LIST.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-4xl font-black text-blue-900 font-mono">{stat.number}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK / PROCESS SECTION (UPDATED) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            From Strategy to Secure Production
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            A structured engineering approach focused on business requirements,
            scalable architecture, secure development, quality assurance, and
            reliable production delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-slate-200 p-6 rounded-xl relative shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group"
            >
              <span className="text-3xl font-black text-slate-300 font-mono block mb-3 group-hover:text-emerald-200 transition-colors">
                0{step.step}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TECH STACK SECTION */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">Technologies We Use</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-10">Our Modern Engineering Stack</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TECH_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900">{item.name}</div>
                  <div className="text-[10px] text-slate-500 uppercase">{item.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-semibold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp size={20} className="text-blue-900" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              {openFaq === idx && (
                <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
                <p className="text-slate-700 text-sm italic mb-6">"{item.quote}"</p>
                <div>
                  <div className="text-slate-900 font-bold text-sm">{item.author}</div>
                  <div className="text-emerald-700 text-xs font-medium">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT FORM SECTION */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Let’s Build Something Great Together</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Have a project in mind or need a cybersecurity audit? Reach out and our engineering team will respond within 24 hours.
            </p>

            <div className="space-y-4 pt-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-900 shrink-0 mt-1" size={18} />
                <span>Mark-Q Infotech, Hyderabad, Telangana, India</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-blue-900 shrink-0" size={18} />
                <span>markq7879@gmail.com</span>
              </div>
            </div>
          </div>

          

        </div>
      </section>

    </div>
  );
};

export default Home;