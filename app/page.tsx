import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Dining from "@/components/Dining";
import Spa from "@/components/Spa";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Dining />
        <Spa />
        <Gallery />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
