"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Spa", href: "#spa" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(13, 27, 42, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/">
            <span
              className="font-serif font-medium text-[#F7F3ED] uppercase"
              style={{ fontSize: 28, letterSpacing: "3px" }}
            >
              Lux Suites
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[#F7F3ED] uppercase transition-colors duration-200"
                style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.15px" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Reserve Now CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center bg-[#C9A84C] hover:bg-[#A8863A] text-[#0D1B2A] transition-colors duration-200"
            style={{
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.8px",
              padding: "14px 28px",
              borderRadius: 2,
            }}
          >
            Reserve Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 text-[#F7F3ED]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-current" />
            <span className="block w-6 h-px bg-current" />
            <span className="block w-6 h-px bg-current" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
          style={{ background: "#0D1B2A" }}
        >
          <button
            className="absolute top-6 right-6 text-[#F7F3ED] p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-serif text-[#F7F3ED] hover:text-[#C9A84C] transition-colors duration-200"
                style={{ fontSize: 32, fontWeight: 400 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 bg-[#C9A84C] hover:bg-[#A8863A] text-[#0D1B2A] transition-colors duration-200"
              style={{
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.8px",
                padding: "14px 32px",
                borderRadius: 2,
              }}
              onClick={() => setMenuOpen(false)}
            >
              Reserve Now
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
