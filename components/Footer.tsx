export default function Footer() {
  return (
    <footer className="bg-[#071629] text-white">
      {/* Top strip */}
      <div className="bg-[#C9A84C] py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#0B1E3F] text-xs font-medium tracking-wider">
          <span>✦ Complimentary airport transfers for all guests</span>
          <span>✦ Best rate guaranteed when booking directly</span>
          <span>✦ Flexible cancellation up to 24 hours</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-2xl font-bold mb-4">
              LUX <span className="text-[#C9A84C]">SUITES</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              A sanctuary of refinement in the heart of the city. Experience
              luxury redefined — where every moment is a cherished memory.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {["Instagram", "Facebook", "X", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 border border-white/20 hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center justify-center text-white/40 text-xs transition-colors duration-200"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Our Rooms", href: "#rooms" },
                { label: "Location", href: "#location" },
                { label: "Guest Reviews", href: "#testimonials" },
                { label: "Make a Reservation", href: "#contact" },
                { label: "Spa & Wellness", href: "#" },
                { label: "Dining", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>1 Grand Boulevard</li>
              <li>Suite Tower, City Center</li>
              <li className="pt-2">
                <a href="tel:+15551002000" className="hover:text-[#C9A84C] transition-colors">
                  +1 (555) 100-2000
                </a>
              </li>
              <li>
                <a href="mailto:info@luxsuites.com" className="hover:text-[#C9A84C] transition-colors">
                  info@luxsuites.com
                </a>
              </li>
              <li className="pt-2">Check-in: 15:00</li>
              <li>Check-out: 12:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© 2026 Lux Suites. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
