"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, MapPin, Clock, ShieldAlert, Award } from "lucide-react";
import Link from "next/link";

interface Message {
  sender: "user" | "bot";
  text: string;
  isHTML?: boolean;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! Welcome to the BOPL Corporate Assistant. How can I help you today? Feel free to ask about our medicine inventory, office hours, or contact desks.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text } as Message];
    setMessages(newMessages);
    if (!textToSend) setInput("");

    // Generate bot reply
    setTimeout(() => {
      const query = text.toLowerCase();
      let botReply: Message = { sender: "bot", text: "" };

      // Keyword Matching Engine
      if (query.includes("inventory") || query.includes("medicine") || query.includes("product") || query.includes("drug") || query.includes("tablet") || query.includes("capsule")) {
        botReply.text = `
          <strong>Our Formulation Inventory Categories:</strong><br />
          • <strong>Nutritional & B-Complex:</strong> Calbritta-Max, Becofol, Carbofol-Z<br />
          • <strong>Digestive Care:</strong> Esmyle-D, Livlite-Gold, Orzyme-Plus, Orzyme Syrup<br />
          • <strong>Cardiovascular Care:</strong> Rosuace-ASP Capsule<br />
          • <strong>Respiratory & Cough:</strong> Aerobon-DM, Kamfart-D (SF), Mach 650mg<br />
          • <strong>Critical Care Equipment:</strong> Oxygen Concentrators (10L), Compressor Nebulizers, BiPAP & CPAP Devices.<br /><br />
          <a href="/products" style="color: #FF6B00; font-weight: 700; text-decoration: underline;">View Full Catalog &rarr;</a>
        `;
        botReply.isHTML = true;
      } else if (query.includes("contact") || query.includes("phone") || query.includes("email") || query.includes("call") || query.includes("whatsapp")) {
        botReply.text = `
          <strong>Corporate Contact Desks:</strong><br />
          • 📞 <strong>Phone:</strong> <a href="tel:+919919002065" style="color: #FF6B00; text-decoration: none;">+91-9919002065</a>, <a href="tel:+919919002066" style="color: #FF6B00; text-decoration: none;">+91-9919002066</a><br />
          • ✉️ <strong>Email:</strong> <a href="mailto:info@biocyteorganics.com" style="color: #FF6B00; text-decoration: none;">info@biocyteorganics.com</a><br />
          • 🟢 <strong>WhatsApp Support:</strong> <a href="https://wa.me/919919002065" target="_blank" style="color: #00B8A9; font-weight: 700; text-decoration: underline;">Open WhatsApp chat</a>
        `;
        botReply.isHTML = true;
      } else if (query.includes("address") || query.includes("office") || query.includes("where") || query.includes("location") || query.includes("kanpur") || query.includes("lucknow")) {
        botReply.text = `
          <strong>BOPL Office Locations:</strong><br />
          • 📍 <strong>Registered Office:</strong> House No. 5, Meerpur Cantt, Kanpur, Uttar Pradesh – 208004, India<br />
          • 🏢 <strong>Lucknow Branch:</strong> 2C/50-53, Flat No. 403, 4th Floor, Ajeet Residency, Vikas Nagar-2, Lucknow<br />
          • 🏗️ <strong>Formulation Factory:</strong> F - 11, 2nd Floor, Fazal Ganj, Kanpur, New Delhi
        `;
        botReply.isHTML = true;
      } else if (query.includes("hours") || query.includes("time") || query.includes("open") || query.includes("schedule") || query.includes("sunday")) {
        botReply.text = `
          <strong>BOPL Office Hours:</strong><br />
          • <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
          • <strong>Saturday:</strong> 9:00 AM - 2:00 PM<br />
          • <strong>Sunday:</strong> Closed<br />
          💡 <em>Outside office hours, please email us and we will reply within 24 hours.</em>
        `;
        botReply.isHTML = true;
      } else if (query.includes("cert") || query.includes("gmp") || query.includes("iso")) {
        botReply.text = `
          <strong>Accreditations & Compliance:</strong><br />
          • We operate under strict <strong>Quality Control Standards</strong> for sterile medicine mixing and strip packaging.<br />
          • Fully certified under <strong>ISO 9001:2015</strong> Quality Management Systems.<br />
          • Audited and registered under Ministry of Corporate Affairs (CIN: U51397UP2002PTC027074).
        `;
        botReply.isHTML = true;
      } else {
        botReply.text = "I logged your query. For pricing inquiries, custom formulation requests, or franchise business proposals, please fill out our contact form or email our corporate desk.";
      }

      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-brandorange-500 to-brandorange-600 text-white flex items-center justify-center shadow-xl shadow-brandorange-500/20 hover:scale-105 active:scale-95 transition-all outline-none border-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 w-[320px] sm:w-[360px] h-[450px] sm:h-[500px] glass-card rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-2xl flex flex-col justify-between overflow-hidden animate-float">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-brandorange-500 to-brandorange-600 p-4 text-white flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-softgreen-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-softgreen-500"></span>
              </span>
              <div>
                <h4 className="font-extrabold text-xs tracking-wide">BOPL Tech Assistant</h4>
                <span className="text-[9px] font-bold text-brandorange-100 uppercase tracking-widest block -mt-0.5">Live Directory</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-85 transition-opacity">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 scrollbar-thin text-xs max-h-[calc(100%-110px)]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-brandorange-500 text-white ml-auto rounded-tr-none shadow-sm text-right"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 mr-auto rounded-tl-none border border-slate-200/30 dark:border-slate-700/30"
                }`}
              >
                {msg.isHTML ? (
                  <div dangerouslySetInnerHTML={{ __html: msg.text }} className="space-y-1" />
                ) : (
                  <span>{msg.text}</span>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Option Prompts (Chips) */}
          <div className="px-4 pb-2 pt-1 flex items-center space-x-1.5 overflow-x-auto no-scrollbar shrink-0 border-t border-slate-100 dark:border-slate-800/40">
            <button
              onClick={() => handleSend("Tell me about your medicines")}
              className="px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-500 hover:border-brandorange-500 transition-colors whitespace-nowrap"
            >
              💊 Inventory
            </button>
            <button
              onClick={() => handleSend("What are your office hours?")}
              className="px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-500 hover:border-brandorange-500 transition-colors whitespace-nowrap"
            >
              🕒 Hours
            </button>
            <button
              onClick={() => handleSend("Show branch addresses")}
              className="px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-500 hover:border-brandorange-500 transition-colors whitespace-nowrap"
            >
              🏢 Offices
            </button>
            <button
              onClick={() => handleSend("How can I contact you?")}
              className="px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-500 hover:border-brandorange-500 transition-colors whitespace-nowrap"
            >
              📞 Call Desks
            </button>
          </div>

          {/* Input Footer */}
          <div className="p-3 border-t border-slate-100 dark:border-slate-850 flex items-center space-x-2 shrink-0">
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-grow pl-3 pr-3 py-2 border border-slate-200 dark:border-slate-800 bg-[#F8FAFC]/50 dark:bg-slate-900/50 rounded-xl text-xs focus:outline-none focus:border-brandorange-500 transition-all text-slate-800 dark:text-white"
            />
            <button
              onClick={() => handleSend()}
              className="bg-brandorange-500 hover:bg-brandorange-600 text-white p-2.5 rounded-xl transition-colors shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
