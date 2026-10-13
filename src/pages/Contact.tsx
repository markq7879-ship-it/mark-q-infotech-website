import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck,
  AlertCircle,
  Loader2,
  Users
} from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Software Engineering & Custom Web Apps',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Primary WhatsApp Business Contact Number
  const WHATSAPP_NUMBER = '919704050494';

  // Helper function to build custom WhatsApp links with dynamic messages
  const createWhatsAppLink = (recipientName: string, role: string) => {
    const text = encodeURIComponent(`Hello Mark-Q Infotech team, I would like to connect with ${recipientName} regarding ${role}.`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // --- YOUR EMAILJS KEYS ---
    const SERVICE_ID = 'service_vzrvql7'; 
    const TEMPLATE_ID = 'template_bcpbo6z';
    const PUBLIC_KEY = 'M_WsyRzuiCZJH-ZAC';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      service_type: formData.service,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Software Engineering & Custom Web Apps',
          message: ''
        });
        
        setTimeout(() => setSubmitted(false), 6000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('EmailJS Error:', error);
        setErrorMessage('Failed to send message. Please try again or email us directly.');
      });
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-semibold uppercase tracking-wider">
            Direct Engineering Consultation
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-emerald-600">Touch</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have a project in mind, need technical architecture advice, or require a security audit? Reach out directly to our team.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM SECTION */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="text-blue-900" size={22} /> Contact Information
              </h2>

              <div className="space-y-6 text-sm">
                
                {/* Email Card */}
                <a 
                  href="mailto:markq7879@gmail.com" 
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">Email Us Directly</span>
                    <p className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors">markq7879@gmail.com</p>
                  </div>
                </a>
                
                {/* LinkedIn Card */}
                <a 
                  href="https://www.linkedin.com/in/razzakhadid-ba4147415" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <FaLinkedin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">LinkedIn Profile</span>
                    <p className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>

                {/* Phone & WhatsApp Card */}
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">Call / WhatsApp</span>
                    <p className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">+91 97040 50494</p>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-start gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">Office Location</span>
                    <p className="font-bold text-slate-900">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="flex items-start gap-4 p-3 rounded-xl border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">Response Window</span>
                    <p className="font-bold text-slate-900">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                    <p className="text-xs text-emerald-700 font-medium mt-0.5">We respond within 24 hours.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* WhatsApp Quick Action Widget */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-2xl shadow-lg flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">Need Immediate Assistance?</h3>
                <p className="text-emerald-100 text-xs mt-1">Chat with our tech leads on WhatsApp</p>
              </div>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Mark-Q Infotech, I have an urgent technical inquiry.')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-emerald-800 font-bold rounded-xl text-xs hover:bg-emerald-50 transition-colors shrink-0 flex items-center gap-1.5"
              >
                <MessageSquare size={14} /> Start Chat
              </a>
            </div>

          </div>

          {/* Interactive Lead Generation Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">Fill out the form below and our engineering team will get back to you with a project scope review.</p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. We will reach out within 24 hours.</span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-semibold flex items-center gap-3">
                  <AlertCircle size={20} className="text-red-600 shrink-0" />
                  <span>{errorMessage}</span>
                  <a href="mailto:markq7879@gmail.com" className="text-red-700 underline font-bold ml-1">Email us directly</a>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 97040 50494"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Service Required / Team Member</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                  >
                    <optgroup label="Select a Service">
                      <option value="Software Engineering & Custom Web Apps">💻 Software Engineering & Custom Web Apps</option>
                      <option value="Cybersecurity & System Hardening">🔒 Cybersecurity & System Hardening</option>
                      <option value="Banking Technology & Financial Systems">🏦 Banking Technology & Financial Systems</option>
                      <option value="IT Infrastructure & ITAM">🖥️ IT Infrastructure & ITAM</option>
                      <option value="Business Automation">⚡ Business Automation & Digital Transformation</option>
                    </optgroup>
                    <optgroup label="Team Member">
                      <option value="Strategy & Investment - Syed Saber Hussain">📊 Strategy & Investment (Syed Saber Hussain)</option>
                      <option value="Finance & Accounts - Mohammed Saber">💰 Finance & Accounts (Mohammed Saber)</option>
                      <option value="Marketing - Mohammed Adnan Faraaz">📢 Marketing (Mohammed Adnan Faraaz)</option>
                      <option value="IT & Network - Syed Fasiullah">🌐 IT & Network (Syed Fasiullah)</option>
                      <option value="Data & Tech - Syed Abdul Shahnawaz">📈 Data & Tech (Syed Abdul Shahnawaz)</option>
                      <option value="Software Engineering - Syed Abdul Sarfaraz">⚙️ Software Engineering (Syed Abdul Sarfaraz)</option>
                      <option value="General Inquiry">📬 General Inquiry</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Project Details / Inquiry *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements, timelines, or technical goals..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Direct WhatsApp Team Contact Options */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users size={18} className="text-blue-900" /> Connect with Team Members via WhatsApp
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                
                <a 
                  href={createWhatsAppLink("Syed Saber Hussain", "Strategy & Investment Advisory")}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-xs bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 rounded-lg px-3 py-2.5 text-center transition-all group"
                >
                  <div className="flex items-center justify-center gap-1 font-semibold text-slate-800 group-hover:text-emerald-700">
                    <span>Strategy</span>
                    <FaWhatsapp size={13} className="text-emerald-600" />
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Syed Saber Hussain</span>
                </a>
                <a 
                  href={createWhatsAppLink("Syed Abdul Shahnawaz", "Data Analytics & Tech Leadership")}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-xs bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 rounded-lg px-3 py-2.5 text-center transition-all group"
                >
                  <div className="flex items-center justify-center gap-1 font-semibold text-slate-800 group-hover:text-emerald-700">
                    <span>Data & Tech</span>
                    <FaWhatsapp size={13} className="text-emerald-600" />
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Syed A. Shahnawaz</span>
                </a>

                <a 
                  href={createWhatsAppLink("Syed Abdul Sarfaraz", "Software Engineering & Operations")}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-xs bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-400 rounded-lg px-3 py-2.5 text-center transition-all group"
                >
                  <div className="flex items-center justify-center gap-1 font-semibold text-slate-800 group-hover:text-emerald-700">
                    <span>Engineering</span>
                    <FaWhatsapp size={13} className="text-emerald-600" />
                  </div>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Syed A. Sarfaraz</span>
                </a>

              </div>
              <p className="text-[11px] text-slate-400 mt-3 text-center flex items-center justify-center gap-1">
                <span>💬</span> Direct WhatsApp routing ensures rapid response times for business inquiries.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;