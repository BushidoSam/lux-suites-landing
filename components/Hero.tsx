import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&h=1080&fit=crop&q=80"
          alt="Lux Suites Hotel"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Dark overlay with navy tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E3F]/80 via-[#0B1E3F]/60 to-[#0B1E3F]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Gold line accent */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium">
            5-Star Luxury Hotel
          </span>
          <div className="h-px w-16 bg-[#C9A84C]" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Where Luxury
          <br />
          <span className="text-[#C9A84C] italic">Meets Serenity</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover an extraordinary world of refined elegance at Lux Suites.
          Every detail crafted for those who demand nothing less than perfection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#C9A84C] hover:bg-[#A8863A] text-[#0B1E3F] font-bold text-sm px-10 py-4 tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/30 hover:-translate-y-0.5"
          >
            Reserve Your Suite
          </a>
          <a
            href="#rooms"
            className="border border-white/50 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-medium text-sm px-10 py-4 tracking-[0.2em] uppercase transition-all duration-300"
          >
            Explore Rooms
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/20 pt-10 max-w-xl mx-auto">
          {[
            { value: "50+", label: "Luxury Suites" },
            { value: "5★", label: "Star Rating" },
            { value: "15+", label: "Years of Excellence" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-3xl font-bold text-[#C9A84C]">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-wider uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
