const attractions = [
  {
    icon: "🏛️",
    name: "Historic City Center",
    distance: "0.3 km",
    description: "Walking distance to museums, galleries, and heritage sites.",
  },
  {
    icon: "🌊",
    name: "Waterfront Promenade",
    distance: "0.5 km",
    description: "Stroll along the scenic harbor with restaurants and shops.",
  },
  {
    icon: "✈️",
    name: "International Airport",
    distance: "12 km",
    description: "25 minutes by express shuttle — complimentary for guests.",
  },
  {
    icon: "🛍️",
    name: "Luxury Shopping District",
    distance: "0.8 km",
    description: "World-class brands, boutiques, and fine dining nearby.",
  },
  {
    icon: "🎭",
    name: "Opera & Arts Quarter",
    distance: "1.2 km",
    description: "Premier theatres, concert halls, and cultural venues.",
  },
  {
    icon: "🌿",
    name: "Royal Botanical Garden",
    distance: "1.5 km",
    description: "50 acres of manicured gardens — perfect for morning walks.",
  },
];

const transport = [
  { mode: "Metro Station", time: "2 min walk" },
  { mode: "Taxi / Rideshare", time: "Available 24/7" },
  { mode: "Hotel Limousine", time: "On request" },
  { mode: "Airport Shuttle", time: "Complimentary" },
];

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium">
              Location
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B1E3F] mb-4">
            At the Heart of Everything
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Perfectly positioned to explore the city — yet serenely removed
            from the everyday.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map visual */}
          <div className="relative">
            <div className="relative overflow-hidden h-96 lg:h-[500px] bg-[#0B1E3F]">
              {/* Styled map placeholder using a real map image from Unsplash */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&q=80"
                alt="Hotel location aerial view"
                className="w-full h-full object-cover opacity-60"
              />
              {/* Location pin overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex flex-col items-center">
                    <div className="bg-[#C9A84C] rounded-full w-16 h-16 flex items-center justify-center shadow-2xl mb-2">
                      <svg className="w-8 h-8 text-[#0B1E3F]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="bg-white text-[#0B1E3F] font-serif font-bold px-4 py-2 text-sm shadow-lg">
                      Lux Suites
                    </div>
                  </div>
                </div>
              </div>

              {/* Address badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B1E3F]/90 text-white p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">1 Grand Boulevard, Suite Tower</p>
                    <p className="text-white/60 text-xs mt-0.5">City Center District · +1 (555) 100-2000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {transport.map((t) => (
                <div key={t.mode} className="bg-[#F9F6F0] border border-[#0B1E3F]/10 p-3 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C9A84C] shrink-0" />
                  <div>
                    <p className="text-[#0B1E3F] text-xs font-semibold">{t.mode}</p>
                    <p className="text-gray-400 text-xs">{t.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attractions */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#0B1E3F] mb-8">
              Nearby Attractions
            </h3>
            <div className="space-y-4">
              {attractions.map((a) => (
                <div
                  key={a.name}
                  className="flex items-start gap-4 p-4 border border-[#0B1E3F]/10 hover:border-[#C9A84C] transition-colors duration-200 group"
                >
                  <div className="text-3xl shrink-0">{a.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-[#0B1E3F] text-sm">{a.name}</h4>
                      <span className="text-[#C9A84C] text-xs font-medium shrink-0">{a.distance}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
