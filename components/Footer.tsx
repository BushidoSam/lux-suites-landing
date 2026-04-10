const columns = [
  {
    heading: "Accommodations",
    links: [
      { label: "Classic Double", href: "#rooms" },
      { label: "Deluxe King Room", href: "#rooms" },
      { label: "Premier Suite", href: "#rooms" },
      { label: "Junior Ocean Suite", href: "#rooms" },
      { label: "Royal Penthouse", href: "#rooms" },
    ],
  },
  {
    heading: "Experiences",
    links: [
      { label: "Fine Dining", href: "#dining" },
      { label: "Spa & Wellness", href: "#spa" },
      { label: "Gallery", href: "#gallery" },
      { label: "Location", href: "#location" },
    ],
  },
  {
    heading: "Reservations",
    links: [
      { label: "Book a Suite", href: "#contact" },
      { label: "Reserve a Table", href: "#dining" },
      { label: "Spa Treatments", href: "#spa" },
      { label: "Group & Events", href: "#contact" },
      { label: "Gift Vouchers", href: "#" },
    ],
  },
  {
    heading: "Hotel",
    links: [
      { label: "About Lux Suites", href: "#" },
      { label: "Press & Media", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#070F1A" }}>
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        {/* Wordmark + tagline */}
        <div className="mb-16 pb-12" style={{ borderBottom: "1px solid rgba(247,243,237,0.08)" }}>
          <p
            className="font-serif text-[#F7F3ED] uppercase mb-3"
            style={{ fontSize: 28, fontWeight: 500, letterSpacing: "3px" }}
          >
            Lux Suites
          </p>
          <p
            className="text-[#6B6460]"
            style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.65, maxWidth: 360 }}
          >
            A sanctuary of refinement in the heart of the city. Where every
            detail is a deliberate act of care.
          </p>
        </div>

        {/* 4-column link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {columns.map((col) => (
            <div key={col.heading}>
              <p
                className="text-[#C9A84C] uppercase mb-5"
                style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
              >
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#6B6460] hover:text-[#C9A84C] transition-colors duration-200"
                      style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.15px" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div
          className="mb-12 pb-12"
          style={{ borderBottom: "1px solid rgba(247,243,237,0.08)" }}
        >
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <p
                className="text-[#9E9690] uppercase mb-1"
                style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
              >
                Address
              </p>
              <p className="text-[#6B6460]" style={{ fontSize: 13, fontWeight: 400 }}>
                1 Grand Boulevard, Suite Tower, City Center
              </p>
            </div>
            <div>
              <p
                className="text-[#9E9690] uppercase mb-1"
                style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
              >
                Phone
              </p>
              <a
                href="tel:+15551002000"
                className="text-[#6B6460] hover:text-[#C9A84C] transition-colors duration-200"
                style={{ fontSize: 13, fontWeight: 400 }}
              >
                +1 (555) 100-2000
              </a>
            </div>
            <div>
              <p
                className="text-[#9E9690] uppercase mb-1"
                style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
              >
                Email
              </p>
              <a
                href="mailto:info@luxsuites.com"
                className="text-[#6B6460] hover:text-[#C9A84C] transition-colors duration-200"
                style={{ fontSize: 13, fontWeight: 400 }}
              >
                info@luxsuites.com
              </a>
            </div>
            <div>
              <p
                className="text-[#9E9690] uppercase mb-1"
                style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
              >
                Hours
              </p>
              <p className="text-[#6B6460]" style={{ fontSize: 13, fontWeight: 400 }}>
                Check-in 15:00 · Check-out 12:00
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p
          className="text-[#C5BEB8]"
          style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.5px" }}
        >
          © 2026 Lux Suites. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
