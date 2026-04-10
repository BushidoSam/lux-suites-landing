import Image from "next/image";

const rooms = [
  {
    name: "Deluxe King Room",
    description: "Spacious elegance with city views, a plush king bed, and premium bath amenities.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=80",
    price: 350,
    amenities: ["King Bed", "City View", "Rainfall Shower", "Free WiFi", "Minibar"],
    size: "42 m²",
  },
  {
    name: "Premier Suite",
    description: "A sanctuary of indulgence with a separate living area, panoramic views, and butler service.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80",
    price: 680,
    amenities: ["King Bed", "Living Room", "Panoramic View", "Butler Service", "Jacuzzi"],
    size: "78 m²",
    featured: true,
  },
  {
    name: "Royal Penthouse",
    description: "The pinnacle of luxury — a private rooftop terrace, dining room, and exclusive concierge.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop&q=80",
    price: 1200,
    amenities: ["2 King Beds", "Rooftop Terrace", "Private Dining", "Concierge", "Spa Access"],
    size: "150 m²",
  },
  {
    name: "Signature Twin",
    description: "Perfect for business travelers — dual workstations, twin beds, and high-speed connectivity.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop&q=80",
    price: 290,
    amenities: ["Twin Beds", "Workstation", "Lounge Chair", "Smart TV", "Express Laundry"],
    size: "38 m²",
  },
  {
    name: "Junior Ocean Suite",
    description: "Wake up to stunning waterfront vistas from your private balcony with morning coffee service.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=80",
    price: 520,
    amenities: ["King Bed", "Ocean View", "Private Balcony", "Espresso Machine", "Soaking Tub"],
    size: "56 m²",
  },
  {
    name: "Classic Double",
    description: "Timeless comfort and classic Lux Suites hospitality at an exceptional value.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
    price: 220,
    amenities: ["Double Bed", "Garden View", "Rain Shower", "Smart TV", "Safe"],
    size: "30 m²",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-medium">
              Accommodation
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B1E3F] mb-4">
            Our Rooms & Suites
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Each space is a masterpiece of comfort, designed to provide an
            unforgettable stay.
          </p>
        </div>

        {/* Rooms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.name}
              className={`group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 relative ${
                room.featured ? "ring-2 ring-[#C9A84C]" : ""
              }`}
            >
              {room.featured && (
                <div className="absolute top-4 left-0 z-10 bg-[#C9A84C] text-[#0B1E3F] text-xs font-bold px-4 py-1.5 tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute bottom-0 right-0 bg-[#0B1E3F] text-white px-4 py-2">
                  <span className="text-[#C9A84C] font-serif font-bold text-xl">
                    ${room.price}
                  </span>
                  <span className="text-white/60 text-xs"> / night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold text-[#0B1E3F]">
                    {room.name}
                  </h3>
                  <span className="text-gray-400 text-sm shrink-0 ml-2">{room.size}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs bg-[#F9F6F0] text-[#0B1E3F] px-3 py-1 border border-[#0B1E3F]/10"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block w-full text-center bg-[#0B1E3F] hover:bg-[#152847] text-white text-xs font-semibold tracking-[0.2em] uppercase py-3 transition-colors duration-200"
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
