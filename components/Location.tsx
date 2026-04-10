function AttractionIcon({ type }: { type: string }) {
  const cls = "w-5 h-5";
  if (type === "landmark") return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
    </svg>
  );
  if (type === "waves") return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5" />
    </svg>
  );
  if (type === "airplane") return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
  if (type === "shopping") return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
    </svg>
  );
  if (type === "theater") return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  );
  return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-4.97-4.03-9-9-9zm0 0c0 4.97 4.03 9 9 9" />
    </svg>
  );
}

const attractions = [
  { iconType: "landmark", name: "Historic City Center", distance: "0.3 km", description: "Walking distance to museums, galleries, and heritage sites." },
  { iconType: "waves", name: "Waterfront Promenade", distance: "0.5 km", description: "Stroll along the scenic harbor with restaurants and shops." },
  { iconType: "airplane", name: "International Airport", distance: "12 km", description: "25 minutes by express shuttle — complimentary for guests." },
  { iconType: "shopping", name: "Luxury Shopping District", distance: "0.8 km", description: "World-class brands, boutiques, and fine dining nearby." },
  { iconType: "theater", name: "Opera & Arts Quarter", distance: "1.2 km", description: "Premier theatres, concert halls, and cultural venues." },
  { iconType: "leaf", name: "Royal Botanical Garden", distance: "1.5 km", description: "50 acres of manicured gardens — perfect for morning walks." },
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
                className="w-full h-full object-cover opacity-80"
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
                  <div className="w-10 h-10 bg-[#F9F6F0] border border-[#C9A84C]/30 flex items-center justify-center shrink-0 text-[#C9A84C]">
                    <AttractionIcon type={a.iconType} />
                  </div>
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
