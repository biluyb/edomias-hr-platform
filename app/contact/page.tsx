"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-white via-bg2 to-green-pale pt-[140px] pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="label"><div className="label-dot" /><span>Contact Us</span></div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-dark leading-tight mt-3">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-gray mt-5 leading-relaxed">
              Have a question about our services or looking to partner with us? Our team is active and ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-extrabold font-display text-dark mb-8">Get in Touch</h2>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-pale flex items-center justify-center text-green flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Our Office</h4>
                      <p className="text-sm text-gray leading-relaxed">
                        Mexico Square, K Kare Building<br/>
                        5th Floor, Office No. 60<br/>
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-pale flex items-center justify-center text-orange flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Phone Numbers</h4>
                      <p className="text-sm text-gray leading-relaxed mb-1">+251 115 50 79 05</p>
                      <p className="text-sm text-gray leading-relaxed">+251 115 50 14 74</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-pale flex items-center justify-center text-green flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Email Addresses</h4>
                      <p className="text-sm text-gray leading-relaxed mb-1">info@hroutsourcingethiopia.net</p>
                      <p className="text-sm text-gray leading-relaxed">edomias@hroutsourcingethiopia.net</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-bg2 flex items-center justify-center text-gray-dark flex-shrink-0 border border-border">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Business Hours</h4>
                      <p className="text-sm text-gray leading-relaxed">Mon – Fri: 8:30 AM – 5:30 PM</p>
                      <p className="text-sm text-gray leading-relaxed">Sat: 8:30 AM – 12:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                <h4 className="text-lg font-bold mb-3">Emergency Support?</h4>
                <p className="text-white/60 text-sm mb-6">Our client response teams are available 24/7 for operational emergencies regarding security or staffing.</p>
                <a href="tel:+251115507905" className="inline-flex items-center gap-2 text-green font-bold text-sm">
                  Call Now <CheckCircle size={14}/>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-bg2 border border-border rounded-3xl p-8 md:p-12 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green text-white flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl shadow-green/20">✓</div>
                    <h2 className="text-2xl font-extrabold font-display text-dark mb-3">Message Sent!</h2>
                    <p className="text-gray mb-8">Thank you for reaching out. Our team will review your message and get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="px-8 py-3.5 rounded-full text-sm font-bold text-white gradient-green">Send Another Message</button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-extrabold font-display text-dark mb-2">Send us a Message</h3>
                    <p className="text-sm text-gray mb-8">Fill out the form below and we'll connect you with the right specialist.</p>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray">Full Name *</label>
                          <input required type="text" placeholder="John Doe" className="bg-white border border-border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-green transition-all" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray">Email Address *</label>
                          <input required type="email" placeholder="john@example.com" className="bg-white border border-border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-green transition-all" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray">Phone Number</label>
                          <input type="text" placeholder="+251 ..." className="bg-white border border-border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-green transition-all" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray">Service Interest</label>
                          <select className="bg-white border border-border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-green transition-all cursor-pointer">
                            <option>General Inquiry</option>
                            <option>Staffing & Outsourcing</option>
                            <option>Cleaning Services</option>
                            <option>Security Services</option>
                            <option>Recruitment</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray">Message *</label>
                        <textarea required rows={5} placeholder="How can we help you?" className="bg-white border border-border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-green transition-all resize-none" />
                      </div>

                      <div className="bg-green-pale border border-green/20 rounded-xl p-4 text-xs text-green-dark">
                        🛡️ <strong>Note:</strong> Your inquiry will be logged in our CRM and assigned to an account manager within 2 business hours.
                      </div>

                      <button type="submit" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white gradient-green shadow-lg shadow-green/25 hover:-translate-y-0.5 transition-all">
                        Send Message <Send size={18} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-bg2 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
               <div className="w-12 h-12 rounded-full gradient-green flex items-center justify-center text-white mx-auto mb-4 animate-bounce shadow-lg">
                  <MapPin size={24}/>
               </div>
               <div className="font-bold text-dark">Mexico Square, Addis Ababa</div>
               <div className="text-xs text-gray">Edomias International Plc Headquarters</div>
            </div>
         </div>
      </section>
    </>
  );
}
