"use client";

import { useState } from "react";

const inputStyle = {
  width: "100%",
  background: "#FDFAF6",
  border: "1px solid #D9D0C8",
  borderRadius: 2,
  padding: "14px 16px",
  fontSize: 15,
  color: "#1C1C1C",
  fontFamily: "inherit",
  outline: "none",
};

const labelStyle = {
  display: "block",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  color: "#9E9690",
  marginBottom: 8,
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ background: "#F7F3ED", padding: "96px 0" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — editorial copy */}
          <div>
            <p
              className="text-[#C9A84C] uppercase mb-5"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
            >
              Reservations
            </p>
            <h2
              className="font-serif text-[#0D1B2A] mb-6"
              style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.25px" }}
            >
              Reserve Your
              <br />
              Perfect Stay
            </h2>
            <p
              className="text-[#6B6460] mb-12"
              style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.65 }}
            >
              Our dedicated reservations team is available around the clock to
              tailor your stay to perfection. Submit your details and we will
              confirm availability within two hours.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  label: "Phone",
                  value: "+1 (555) 100-2000",
                  href: "tel:+15551002000",
                },
                {
                  label: "Email",
                  value: "reservations@luxsuites.com",
                  href: "mailto:reservations@luxsuites.com",
                },
                {
                  label: "Concierge",
                  value: "24 hours · 7 days a week",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-5">
                  <div
                    className="shrink-0 flex items-center justify-center bg-[#0D1B2A]"
                    style={{ width: 40, height: 40 }}
                  >
                    <span
                      className="text-[#C9A84C] uppercase"
                      style={{ fontSize: 9, fontWeight: 500, letterSpacing: "1px" }}
                    >
                      {item.label.slice(0, 3)}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-[#9E9690] uppercase mb-1"
                      style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#1C1C1C] hover:text-[#C9A84C] transition-colors duration-200"
                        style={{ fontSize: 15, fontWeight: 400 }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#1C1C1C]" style={{ fontSize: 15, fontWeight: 400 }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form on Ivory White card */}
          <div style={{ background: "#FDFAF6", padding: 40, borderRadius: 4 }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="flex items-center justify-center bg-[#C9A84C] mb-6"
                  style={{ width: 56, height: 56, borderRadius: 2 }}
                >
                  <svg
                    width={24}
                    height={24}
                    fill="none"
                    stroke="#0D1B2A"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="font-serif text-[#0D1B2A] mb-3"
                  style={{ fontSize: 32, fontWeight: 400 }}
                >
                  Request Received
                </h3>
                <p className="text-[#6B6460]" style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.65 }}>
                  Our reservations team will contact you within two hours to
                  confirm your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input type="text" required placeholder="John" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input type="text" required placeholder="Smith" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" required placeholder="john@example.com" style={inputStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" style={inputStyle} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Check-in</label>
                    <input type="date" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Check-out</label>
                    <input type="date" required style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Room Preference</label>
                  <select style={{ ...inputStyle, appearance: "none" }}>
                    <option value="">Select a room type…</option>
                    <option>Classic Double — from $220 / night</option>
                    <option>Signature Twin — from $290 / night</option>
                    <option>Deluxe King Room — from $350 / night</option>
                    <option>Junior Ocean Suite — from $520 / night</option>
                    <option>Premier Suite — from $680 / night</option>
                    <option>Royal Penthouse — from $1,200 / night</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Special Requests</label>
                  <textarea
                    rows={4}
                    placeholder="Dietary requirements, celebrations, accessibility needs…"
                    style={{ ...inputStyle, resize: "none", minHeight: 120 }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A84C] hover:bg-[#A8863A] text-[#0D1B2A] transition-colors duration-200"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "0.8px",
                    padding: "14px 28px",
                    borderRadius: 2,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Submit Reservation Request
                </button>

                <p
                  className="text-center text-[#9E9690]"
                  style={{ fontSize: 11, fontWeight: 400, lineHeight: 1.3 }}
                >
                  Our team will contact you within two hours to confirm availability.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
