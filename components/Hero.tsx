import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&h=1080&fit=crop&q=85"
          alt="Lux Suites — luxury suite with window light"
          fill
          className="object-cover"
          style={{ borderRadius: 0 }}
          priority
          unoptimized
        />
        {/* Navy gradient overlay from bottom to mid-frame */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.55) 45%, rgba(13,27,42,0.20) 100%)",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto w-full mt-20">
        {/* Sub-caption eyebrow */}
        <p
          className="text-[#E8D5A3] uppercase mb-6"
          style={{ fontSize: 13, fontWeight: 300, letterSpacing: "1.5px" }}
        >
          Five-Star Luxury · Est. 2010
        </p>

        {/* Hero title */}
        <h1
          className="font-serif text-[#F7F3ED] italic mb-8"
          style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.5px",
          }}
        >
          Where Every
          <br />
          Moment Becomes
          <br />
          a Memory
        </h1>

        {/* Booking widget */}
        <div
          className="mt-12 mx-auto max-w-[720px]"
          style={{
            background: "rgba(13, 27, 42, 0.90)",
            padding: 32,
            borderRadius: 4,
            boxShadow: "0 4px 24px rgba(13, 27, 42, 0.15)",
          }}
        >
          <p
            className="text-[#F7F3ED] uppercase text-left mb-5"
            style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
          >
            Check Availability
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label
                className="block text-[#9E9690] uppercase mb-1.5"
                style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
              >
                Check-in
              </label>
              <input
                type="date"
                className="w-full text-[#1C1C1C] bg-[#FDFAF6] focus:outline-none focus:border-[#C9A84C]"
                style={{
                  border: "1px solid #D9D0C8",
                  borderRadius: 2,
                  padding: "12px 14px",
                  fontSize: 15,
                  fontFamily: "inherit",
                }}
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-[#9E9690] uppercase mb-1.5"
                style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
              >
                Check-out
              </label>
              <input
                type="date"
                className="w-full text-[#1C1C1C] bg-[#FDFAF6] focus:outline-none focus:border-[#C9A84C]"
                style={{
                  border: "1px solid #D9D0C8",
                  borderRadius: 2,
                  padding: "12px 14px",
                  fontSize: 15,
                  fontFamily: "inherit",
                }}
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-[#9E9690] uppercase mb-1.5"
                style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
              >
                Guests
              </label>
              <select
                className="w-full text-[#1C1C1C] bg-[#FDFAF6] focus:outline-none focus:border-[#C9A84C]"
                style={{
                  border: "1px solid #D9D0C8",
                  borderRadius: 2,
                  padding: "12px 14px",
                  fontSize: 15,
                  fontFamily: "inherit",
                }}
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <div className="flex items-end">
              <a
                href="#contact"
                className="whitespace-nowrap bg-[#C9A84C] hover:bg-[#A8863A] text-[#0D1B2A] transition-colors duration-200 block sm:h-[48px] flex items-center w-full sm:w-auto justify-center"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.8px",
                  padding: "14px 24px",
                  borderRadius: 2,
                }}
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-[#C5BEB8] uppercase"
          style={{ fontSize: 11, fontWeight: 400, letterSpacing: "1.5px" }}
        >
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C5BEB8] to-transparent" />
      </div>
    </section>
  );
}
