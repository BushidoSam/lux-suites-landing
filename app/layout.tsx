import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lux Suites | Luxury Hotel Experience",
  description:
    "Experience unparalleled luxury at Lux Suites. Breathtaking rooms, world-class amenities, and exceptional service in the heart of the city.",
  keywords: "luxury hotel, Lux Suites, premium accommodation, five-star hotel",
  openGraph: {
    title: "Lux Suites | Luxury Hotel Experience",
    description:
      "Experience unparalleled luxury at Lux Suites. Breathtaking rooms, world-class amenities, and exceptional service.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Lux Suites Hotel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lux Suites | Luxury Hotel Experience",
    description: "Experience unparalleled luxury at Lux Suites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
