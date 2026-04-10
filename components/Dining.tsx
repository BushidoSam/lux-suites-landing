import Image from "next/image";

export default function Dining() {
  return (
    <section id="dining" style={{ background: "#0D1B2A", padding: "96px 0" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Photography — left */}
          <div className="relative overflow-hidden" style={{ minHeight: 560 }}>
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=700&fit=crop&q=85"
              alt="Lux Suites — candlelit fine dining"
              fill
              className="object-cover"
              style={{ borderRadius: 0 }}
              unoptimized
            />
            {/* Subtle overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(7, 15, 26, 0.25)" }}
            />
          </div>

          {/* Editorial text — right */}
          <div
            className="flex flex-col justify-center"
            style={{ padding: "64px 64px 64px 72px" }}
          >
            <p
              className="text-[#E8D5A3] uppercase mb-6"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
            >
              Dining
            </p>

            <h2
              className="font-serif text-[#F7F3ED] mb-6"
              style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.25px" }}
            >
              The Art of
              <br />
              Fine Dining
            </h2>

            <p
              className="text-[#C5BEB8] mb-4"
              style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.65, letterSpacing: "0.02px" }}
            >
              Our flagship restaurant transforms seasonal ingredients into
              culinary narratives. Executive Chef Étienne Moreau brings two
              decades of Michelin-starred craft to every plate — a meditation
              on produce, provenance, and the quiet pleasure of a meal
              unhurried.
            </p>

            <p
              className="text-[#C5BEB8] mb-10"
              style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.65, letterSpacing: "0.02px" }}
            >
              The wine cellar holds over 1,200 labels. Our sommelier pairs each
              course with precision and a light hand — guiding without
              performing.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center text-[#F7F3ED] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.8px",
                  padding: "14px 28px",
                  borderRadius: 2,
                  border: "1px solid rgba(247, 243, 237, 0.4)",
                }}
              >
                Reserve a Table
              </a>
              <a
                href="#"
                className="inline-flex items-center text-[#F7F3ED] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.8px",
                  padding: "14px 28px",
                  borderRadius: 2,
                  border: "1px solid rgba(247, 243, 237, 0.4)",
                }}
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
