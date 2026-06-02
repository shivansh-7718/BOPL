"use client";

import { useState } from "react";
import { Building, MapPin, Phone, Mail, MessageSquare, ChevronRight, Send, Clock, Lightbulb } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    desk: "General Corporate Desk",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          desk: "General Corporate Desk",
          message: ""
        });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const details = [
    { icon: Building, title: "Registered Office Address", desc: "House No. 5, Meerpur Cantt, Kanpur, Uttar Pradesh – 208004, India" },
    { icon: MapPin, title: "Lucknow Branch Office", desc: "2C/50-53, Flat No. 403, 4th Floor, Ajeet Residency, Vikas Nagar-2, Lucknow" },
    { icon: Phone, title: "Phone Support Desk", desc: "+91-9919002065, +91-9919002066 (Telefax: +91-8429692065)" },
    { icon: Mail, title: "Email Communications", desc: "info@biocyteorganics.com" }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Details & WhatsApp */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-tealaccent-500 uppercase px-3 py-1 bg-tealaccent-50 dark:bg-slate-800 rounded-full">Contact Support</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Get in Touch with Corporate Offices</h2>
              <p className="text-sm text-slate-500">Contact our corporate desk for institutional business inquiries, product supplies, or distributor franchise partnerships.</p>
              
              <div className="space-y-4 pt-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
                {details.map((det, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <det.icon className="w-5 h-5 text-brandorange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-slate-800 dark:text-white">{det.title}</span>
                      {det.title === "Email Communications" ? (
                        <a href={`mailto:${det.desc}`} className="block text-[11px] text-slate-500 hover:text-brandorange-500 transition-colors mt-0.5">{det.desc}</a>
                      ) : det.title === "Phone Support Desk" ? (
                        <span className="block text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                          <a href="tel:+919919002065" className="hover:text-brandorange-500 transition-colors">+91-9919002065</a>, <a href="tel:+919919002066" className="hover:text-brandorange-500 transition-colors">+91-9919002066</a> (Telefax: +91-8429692065)
                        </span>
                      ) : (
                        <span className="block text-[11px] text-slate-500 mt-0.5">{det.desc}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-softgreen-500/10 to-tealaccent-500/10 p-5 rounded-2xl border border-softgreen-500/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-softgreen-500 text-white flex items-center justify-center font-bold shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-xs">Direct WhatsApp Desk</span>
                  <span className="block text-[10px] text-slate-400">Chat immediately with representatives</span>
                </div>
              </div>
              <a 
                href="https://wa.me/919919002065" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-softgreen-500 hover:bg-softgreen-600 text-white text-[11px] font-bold rounded-lg transition-colors flex items-center space-x-1.5"
              >
                <span>Start Chat</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Office Hours Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-brandorange-50 dark:bg-slate-800 text-brandorange-500 flex items-center justify-center shrink-0">
                  <Clock className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-800 dark:text-white">Office Hours</h4>
                  <span className="text-[10px] text-slate-400 font-bold block">We're here to help</span>
                </div>
              </div>
              <div className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="text-brandorange-500 font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="text-brandorange-500 font-bold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="text-rose-500 font-bold uppercase tracking-wider text-[10px]">Closed</span>
                </div>
              </div>
              <div className="p-3 bg-brandorange-50/40 dark:bg-slate-800/40 rounded-xl border border-brandorange-500/10 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed flex items-start space-x-2">
                <Lightbulb className="w-4 h-4 text-brandorange-500 shrink-0 mt-0.5" />
                <span>For urgent inquiries outside office hours, please email us and we'll respond within 24 hours.</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-lg h-full flex flex-col justify-between">
              {success ? (
                <div className="py-20 text-center space-y-4">
                  <div className="text-softgreen-500 font-bold text-sm">
                    ✓ Business inquiry transmitted successfully! Form security assays verified.
                  </div>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Your proposal has been logged securely. Our institutional partnership directors will review it and follow up within 2 office hours.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-4">Send a Secure Inquiry</h3>
                  
                  {error && (
                    <div className="p-4 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-500/10 text-xs font-semibold text-rose-500">
                      ⚠ {error}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Full Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500 transition-all text-slate-800 dark:text-white" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500 transition-all text-slate-800 dark:text-white" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500 transition-all text-slate-800 dark:text-white" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Inquiry Target Desk *</label>
                      <select 
                        name="desk"
                        value={formData.desk}
                        onChange={handleChange}
                        required 
                        className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500 transition-all text-slate-650 dark:text-slate-350"
                      >
                        <option value="General Corporate Desk">General Corporate Desk</option>
                        <option value="Medicine Franchise/PCD Desk">Medicine Franchise/PCD Desk</option>
                        <option value="Respiratory Devices Sales">Respiratory Devices Sales</option>
                        <option value="Government Supplies Division">Government Supplies Division</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Inquiry Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      placeholder="Write your detailed inquiry or business proposal here..." 
                      className="w-full p-3 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500 transition-all h-28 text-slate-800 dark:text-white" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-brandorange-500 to-brandorange-600 text-white font-bold rounded-xl text-xs shadow-md shadow-brandorange-500/20 active:scale-98 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Business Proposal</span>
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
}

