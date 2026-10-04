import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Clock, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message or preparing mailto link
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Also provide a direct mailto action
      const mailtoUrl = `mailto:gaurav639652@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Gaurav,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`)}`;
      window.location.href = mailtoUrl;

      // Reset form after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            I am currently open to full-time developer positions, freelance projects, and collaboration. 
            Feel free to reach out directly through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an upcoming project, a job opening, or just want to connect, 
                my inbox is always open.
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/50 flex items-center justify-center text-indigo-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email Address</div>
                      <a 
                        href="mailto:gaurav639652@gmail.com" 
                        className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                      >
                        gaurav639652@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('gaurav639652@gmail.com', 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Phone & WhatsApp</div>
                      <a 
                        href="tel:+919599395781" 
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        +91 9599395781
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('+919599395781', 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-800/50 flex items-center justify-center text-rose-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">Ghaziabad, Uttar Pradesh, India</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">Open to Remote / On-site roles</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919599395781?text=Hi%20Gaurav,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat directly on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-center gap-3">
              <Clock className="w-5 h-5 text-indigo-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white font-medium">Quick Turnaround:</strong> Typically responds within a few hours.
              </div>
            </div>

          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl text-left">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to shoot me an email directly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    Your email client is opening with your message pre-filled to <strong className="text-white">gaurav639652@gmail.com</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration / Question"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Gaurav, I saw your portfolio and would love to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
