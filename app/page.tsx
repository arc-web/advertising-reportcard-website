import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import ReactMethod from "@/components/ReactMethod";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <ReactMethod />
        <Stats />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
