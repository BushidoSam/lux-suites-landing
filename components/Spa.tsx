import Image from "next/image";

const amenities = [
  {
    label: "Thermal Pools",
    description: "Four temperature-calibrated pools for contrast therapy and deep relaxation.",
    icon: (
      <svg width={24} height={24} fill="none" stroke="#C9A84C" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7H3M12 3v4" />
      </svg>
    ),
  },
  {
    label: "Signature Massages",
    description: "Bespoke treatments blending Balinese and European techniques.",
    icon: (
      <svg width={24} height={24} fill="none" stroke="#C9A84C" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 5.4-5.4 7.8-5.4 12A5.4 5.4 0 0012 20.4a5.4 5.4 0 005.4-5.4C17.4 10.8 13.2 8.4 12 3z" />
      </svg>
    ),
  },
  {
    label: "Steam & Sauna",
    description: "Finnish sauna, Turkish hammam, and Himalayan salt steam room.",
    icon: (
      <svg width={24} height={24} fill="none" stroke="#C9A84C" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 4c0 2-2 3-2 5a2 2 0 004 0c0-2-2-3-2-5zM14.5 4c0 2-2 3-2 5a2 2 0 004 0c0-2-2-3-2-5zM7 15h10a2 2 0 012 2v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-1a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    label: "Precision Fitness",
    description: "Technogym equipment, personal training, and daily yoga sessions.",
    icon: (
      <svg width={24} height={24} fill="none" stroke="#C9A84C" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M8 9l-3 3 3 3M16 9l3 3-3 3" />
      </svg>
    ),
  },
  {
    label: "Skin Rituals",
    description: "La Mer and ESPA treatments in private suite rooms with natural light.",
    icon: (
      <svg width={24} height={24} fill="none" stroke="#C9A84C" strokeWidth={1.25} viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={9} strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    label: "Meditation Garden",
    description: "A curated sanctuary of silence — open sunrise to sunset.",
    icon: (
      <svg width={24} height={24} fill="none" stroke="#C9A84C" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.5-4.5-6-9-4-12s6-3 8 0 0 7.5-4 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9" />
      </svg>
    ),
  },
  {
    label: "Hydrotherapy",
    description: "Vichy showers and underwater pressure therapy for circulatory renewal.",
    icon: (
      <svg width={24} height={24} fill="none" stroke="#C9A84C" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6M8 4l4 4 4-4M5 14a7 7 0 0014 0" />
      </svg>
    ),
  },
  {
    label: "Wellness Cuisine",
    description: "Nourishing menus built around organic, anti-inflammatory ingredients.",
    icon: (
      <svg width={24} height={24} fill="none" stroke="#C9A84C" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C8 8 6 10 6 14a6 6 0 0012 0c0-4-2-6-6-11z" />
      </svg>
    ),
  },
];

export default function Spa() {
  return (
    <section id="spa" style={{ background: "#F7F3ED", padding: "96px 0" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <p
              className="text-[#C9A84C] uppercase mb-4"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
            >
              Spa &amp; Wellness
            </p>
            <h2
              className="font-serif text-[#0D1B2A]"
              style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.25px" }}
            >
              A Sanctuary for
              <br />
              Body and Mind
            </h2>
          </div>
          <div className="flex items-center">
            <p
              className="text-[#6B6460]"
              style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.65, letterSpacing: "0.02px" }}
            >
              Our 2,400 m² spa is a world unto itself — designed around the
              philosophy that true luxury is the restoration of stillness.
              Therapists trained across Europe and Southeast Asia bring both
              precision and intuition to every treatment.
            </p>
          </div>
        </div>

        {/* Photography + amenity grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Spa photography */}
          <div className="relative overflow-hidden" style={{ height: 480 }}>
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop&q=85"
              alt="Lux Suites spa — thermal pool at dawn"
              fill
              className="object-cover"
              style={{ borderRadius: 0 }}
              unoptimized
            />
          </div>

          {/* Amenity icon grid — 2 column */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            {amenities.map((a) => (
              <div key={a.label} style={{ paddingTop: 4 }}>
                <div style={{ marginBottom: 10 }}>{a.icon}</div>
                <p
                  className="text-[#0D1B2A] uppercase mb-2"
                  style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
                >
                  {a.label}
                </p>
                <p
                  className="text-[#6B6460]"
                  style={{ fontSize: 13, fontWeight: 400, lineHeight: 1.55 }}
                >
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div
          className="max-w-[800px] mx-auto text-center"
          style={{
            borderTop: "1px solid #D9D0C8",
            paddingTop: 64,
          }}
        >
          <blockquote
            className="font-serif text-[#0D1B2A] italic mb-6"
            style={{ fontSize: 28, fontWeight: 300, lineHeight: 1.35, letterSpacing: "0.1px" }}
          >
            &ldquo;The spa at Lux Suites gave me something rare — two full
            hours where nothing mattered except the warmth of the stone beneath
            me. I left a different person.&rdquo;
          </blockquote>
          <p
            className="text-[#9E9690] uppercase"
            style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
          >
            Sofia Laurent — Junior Ocean Suite, April 2026
          </p>
        </div>
      </div>
    </section>
  );
}
