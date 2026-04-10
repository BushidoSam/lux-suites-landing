import Image from "next/image";

const rooms = [
  {
    name: "Deluxe King Room",
    features: ["King Bed", "City View", "Rainfall Shower", "Minibar"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=80",
    price: 350,
    size: "42 m²",
  },
  {
    name: "Premier Suite",
    features: ["King Bed", "Living Room", "Panoramic View", "Butler Service"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80",
    price: 680,
    size: "78 m²",
  },
  {
    name: "Royal Penthouse",
    features: ["2 King Beds", "Rooftop Terrace", "Private Dining", "Spa Access"],
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop&q=80",
    price: 1200,
    size: "150 m²",
  },
  {
    name: "Signature Twin",
    features: ["Twin Beds", "Workstation", "Lounge Chair", "Smart TV"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop&q=80",
    price: 290,
    size: "38 m²",
  },
  {
    name: "Junior Ocean Suite",
    features: ["King Bed", "Ocean View", "Private Balcony", "Soaking Tub"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=80",
    price: 520,
    size: "56 m²",
  },
  {
    name: "Classic Double",
    features: ["Double Bed", "Garden View", "Rain Shower", "Safe"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
    price: 220,
    size: "30 m²",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" style={{ background: "#F7F3ED", padding: "96px 0" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-[#C9A84C] uppercase mb-4"
            style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
          >
            Accommodations
          </p>
          <h2
            className="font-serif text-[#0D1B2A]"
            style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.25px" }}
          >
            Rooms &amp; Suites
          </h2>
        </div>

        {/* Rooms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="group bg-[#FDFAF6] overflow-hidden transition-all duration-300"
              style={{ border: "1px solid transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#D9D0C8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
              }}
            >
              {/* 4:3 image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  style={{ borderRadius: 0 }}
                  unoptimized
                />
              </div>

              {/* Card content */}
              <div style={{ padding: "24px 24px 28px" }}>
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="font-serif text-[#0D1B2A]"
                    style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.25 }}
                  >
                    {room.name}
                  </h3>
                  <span
                    className="text-[#9E9690] shrink-0 ml-3"
                    style={{ fontSize: 13, fontWeight: 400 }}
                  >
                    {room.size}
                  </span>
                </div>

                {/* Rate */}
                <p
                  className="font-serif text-[#0D1B2A] mb-4"
                  style={{ fontSize: 22, fontWeight: 500 }}
                >
                  From ${room.price}
                  <span
                    className="text-[#6B6460]"
                    style={{ fontSize: 13, fontWeight: 400 }}
                  >
                    {" "}/ night
                  </span>
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-1">
                  {room.features.map((f) => (
                    <li
                      key={f}
                      className="text-[#6B6460]"
                      style={{ fontSize: 13, fontWeight: 400 }}
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center bg-[#C9A84C] hover:bg-[#A8863A] text-[#0D1B2A] transition-colors duration-200"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "0.8px",
                    padding: "14px 28px",
                    borderRadius: 2,
                  }}
                >
                  Reserve
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
