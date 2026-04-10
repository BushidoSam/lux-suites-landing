"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would send to a backend or email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium">
                Reservations
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B1E3F] mb-6">
              Reserve Your
              <br />
              <span className="text-[#C9A84C] italic">Perfect Stay</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Our dedicated reservations team is available around the clock to
              tailor your stay to perfection. Fill in your details and we&apos;ll
              confirm your booking within 2 hours.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+1 (555) 100-2000",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "reservations@luxsuites.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Concierge Hours",
                  value: "24 hours / 7 days a week",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0B1E3F] text-[#C9A84C] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs tracking-wider uppercase mb-0.5">{item.label}</p>
                    <p className="text-[#0B1E3F] font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Form */}
          <div className="bg-white shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-[#C9A84C] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0B1E3F] mb-3">
                  Request Received
                </h3>
                <p className="text-gray-500 max-w-xs">
                  Thank you for your inquiry. Our reservations team will contact
                  you within 2 hours to confirm your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-colors text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-colors text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-colors text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-colors text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                      Check-In
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-colors text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-colors text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                    Room Preference
                  </label>
                  <select className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-colors text-gray-900 bg-white">
                    <option value="">Select a room type...</option>
                    <option>Classic Double — from $220/night</option>
                    <option>Signature Twin — from $290/night</option>
                    <option>Deluxe King Room — from $350/night</option>
                    <option>Junior Ocean Suite — from $520/night</option>
                    <option>Premier Suite — from $680/night</option>
                    <option>Royal Penthouse — from $1,200/night</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 tracking-wider uppercase mb-2">
                    Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Dietary requirements, celebrations, accessibility needs..."
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A84C] hover:bg-[#A8863A] text-[#0B1E3F] font-bold text-sm py-4 tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-lg"
                >
                  Submit Reservation Request
                </button>

                <p className="text-gray-400 text-xs text-center">
                  Our team will contact you within 2 hours to confirm availability
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
