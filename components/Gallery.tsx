"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=80",
    alt: "Ocean suite interior with morning light",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80",
    alt: "Premier suite bedroom",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=1000&fit=crop&q=80",
    alt: "Royal penthouse rooftop terrace",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80",
    alt: "Candlelit fine dining room",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop&q=80",
    alt: "Spa thermal pool",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop&q=80",
    alt: "Hotel exterior at dusk",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&q=80",
    alt: "Deluxe king room",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&q=80",
    alt: "Aerial city view from penthouse",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&q=80",
    alt: "Classic double room",
    span: false,
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <>
      <section id="gallery" style={{ background: "#0D1B2A", padding: "96px 0" }}>
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section header */}
          <div className="mb-12">
            <p
              className="text-[#E8D5A3] uppercase mb-4"
              style={{ fontSize: 11, fontWeight: 500, letterSpacing: "1.5px" }}
            >
              Gallery
            </p>
            <h2
              className="font-serif text-[#F7F3ED]"
              style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.25px" }}
            >
              A Visual Story
            </h2>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <button
                key={i}
                className="group relative overflow-hidden block w-full text-left"
                style={{ aspectRatio: "3/2", borderRadius: 0, padding: 0, border: "none", cursor: "pointer" }}
                onClick={() => setLightboxIndex(i)}
                aria-label={`View: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ borderRadius: 0 }}
                  unoptimized
                />
                {/* Gold border on hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{ border: "1px solid #C9A84C" }}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "rgba(7, 15, 26, 0.95)" }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white hover:text-[#C9A84C] transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative"
            style={{ maxWidth: "90vw", maxHeight: "85vh", width: "100%", height: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              fill
              className="object-contain"
              style={{ borderRadius: 0 }}
              unoptimized
            />
          </div>

          {/* Caption */}
          <p
            className="text-[#C5BEB8] mt-4"
            style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.1px" }}
          >
            {photos[lightboxIndex].alt}
          </p>

          {/* Prev/Next arrows */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[#C9A84C] hover:text-[#E8D5A3] transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <svg width={36} height={36} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[#C9A84C] hover:text-[#E8D5A3] transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <svg width={36} height={36} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
