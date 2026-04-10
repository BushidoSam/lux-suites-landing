import Image from "next/image";

const landmarks = [
  { name: "Historic City Center", distance: "0.3 km", note: "Museums, galleries, heritage architecture" },
  { name: "Waterfront Promenade", distance: "0.5 km", note: "Harbor restaurants and boutique shops" },
  { name: "Luxury Shopping District", distance: "0.8 km", note: "World-class brands and fine dining" },
  { name: "Opera & Arts Quarter", distance: "1.2 km", note: "Premier theatres and concert halls" },
  { name: "Royal Botanical Garden", distance: "1.5 km", note: "50 acres of curated gardens" },
  { name: "International Airport", distance: "12 km", note: "25 min by complimentary express shuttle" },
];

export default function Location() {
  return (
    <section id="location" style={{ padding: 0 }}>
      <div className="grid lg:grid-cols-2">
        {/* Left: editorial text on Deep Navy */}
        <div
          className="flex flex-col justify-center"
          style={{ background: "#0D1B2A", padding: "96px 64px" }}
        >
          <p
            className="text-[#E8D5A3] uppercase mb-6"
            style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
          >
            Location
          </p>

          <h2
            className="font-serif text-[#F7F3ED] mb-4"
            style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.2 }}
          >
            Getting Here
          </h2>

          <p
            className="text-[#C5BEB8] mb-2"
            style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.65 }}
          >
            1 Grand Boulevard, Suite Tower
          </p>
          <p
            className="text-[#C5BEB8] mb-8"
            style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.65 }}
          >
            City Center District
          </p>

          <div style={{ borderTop: "1px solid rgba(247,243,237,0.12)", paddingTop: 32 }}>
            <p
              className="text-[#9E9690] uppercase mb-5"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
            >
              Nearby
            </p>
            <ul className="space-y-5">
              {landmarks.map((l) => (
                <li key={l.name} className="flex items-start gap-5">
                  <span
                    className="text-[#C9A84C] shrink-0"
                    style={{ fontSize: 13, fontWeight: 400, minWidth: 52, marginTop: 2 }}
                  >
                    {l.distance}
                  </span>
                  <div>
                    <p
                      className="text-[#F7F3ED]"
                      style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.4 }}
                    >
                      {l.name}
                    </p>
                    <p
                      className="text-[#6B6460]"
                      style={{ fontSize: 13, fontWeight: 400, lineHeight: 1.55 }}
                    >
                      {l.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ borderTop: "1px solid rgba(247,243,237,0.12)", paddingTop: 32, marginTop: 32 }}>
            <p
              className="text-[#9E9690] uppercase mb-4"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
            >
              Transport
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {[
                ["Metro Station", "2 min walk"],
                ["Hotel Limousine", "On request"],
                ["Taxi / Rideshare", "24/7 available"],
                ["Airport Shuttle", "Complimentary"],
              ].map(([mode, time]) => (
                <div key={mode}>
                  <p className="text-[#F7F3ED]" style={{ fontSize: 14, fontWeight: 400 }}>{mode}</p>
                  <p className="text-[#6B6460]" style={{ fontSize: 13, fontWeight: 400 }}>{time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: lifestyle photography on Warm Ivory */}
        <div className="relative" style={{ minHeight: 600, background: "#F7F3ED" }}>
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&h=800&fit=crop&q=85"
            alt="Aerial city view near Lux Suites"
            fill
            className="object-cover"
            style={{ borderRadius: 0 }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
