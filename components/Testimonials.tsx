const testimonials = [
  {
    name: "Alexandra Morrison",
    role: "CEO, Morrison & Partners",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=100&h=100&fit=crop&q=80",
    rating: 5,
    review:
      "Lux Suites redefined what luxury means to me. From the moment we arrived, every detail was flawlessly attended to. The penthouse views at sunrise were simply breathtaking. We will not stay anywhere else when visiting.",
    stay: "Royal Penthouse",
    date: "March 2026",
  },
  {
    name: "James & Clara Whitfield",
    role: "Honeymooners",
    avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=100&h=100&fit=crop&q=80",
    rating: 5,
    review:
      "The most romantic experience of our lives. The staff had rose petals and champagne waiting in our suite. The spa was divine, the breakfast exceptional. We're already planning our anniversary trip back.",
    stay: "Premier Suite",
    date: "February 2026",
  },
  {
    name: "Dr. Hiroshi Tanaka",
    role: "Medical Conference Delegate",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
    rating: 5,
    review:
      "As a frequent traveler who has stayed in over 200 hotels worldwide, Lux Suites stands in a class of its own. The attention to detail, the silence in the rooms, and the concierge efficiency are unparalleled.",
    stay: "Signature Twin",
    date: "January 2026",
  },
  {
    name: "Sofia Laurent",
    role: "Fashion Designer, Paris",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    rating: 5,
    review:
      "The aesthetic of Lux Suites is simply magnificent — deep navy, warm golds, and perfect proportions. As someone obsessed with design, I found the interiors refreshingly sophisticated. Will be back next season.",
    stay: "Junior Ocean Suite",
    date: "April 2026",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#C9A84C] fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0B1E3F] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium">
              Guest Reviews
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Stories from Our Guests
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Don&apos;t take our word for it — hear what our distinguished
            guests have to say.
          </p>
        </div>

        {/* Overall rating */}
        <div className="flex justify-center items-center gap-6 mb-16 pb-12 border-b border-white/10">
          <div className="text-center">
            <div className="font-serif text-6xl font-bold text-[#C9A84C]">4.9</div>
            <StarRating count={5} />
            <div className="text-white/40 text-xs mt-2">Based on 1,200+ reviews</div>
          </div>
          <div className="h-16 w-px bg-white/10" />
          <div className="grid grid-cols-1 gap-2 text-sm">
            {[
              { label: "Cleanliness", pct: 99 },
              { label: "Service", pct: 98 },
              { label: "Location", pct: 97 },
              { label: "Value", pct: 95 },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 min-w-[200px]">
                <span className="text-white/60 w-20 text-right text-xs">{item.label}</span>
                <div className="flex-1 bg-white/10 h-1.5">
                  <div
                    className="h-full bg-[#C9A84C]"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <span className="text-white/60 text-xs w-8">{item.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 border border-white/10 p-8 hover:border-[#C9A84C]/40 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div className="font-serif text-6xl text-[#C9A84C]/30 leading-none mb-4">&ldquo;</div>

              <p className="text-white/80 text-sm leading-relaxed mb-6">{t.review}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#C9A84C]/40"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating count={t.rating} />
                  <p className="text-white/30 text-xs mt-1">{t.stay}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
