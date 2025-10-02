import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import MadeByCreditSection from "@/components/MadeByCreditSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Products />
        <Reviews />
        <Contact />
      </main>
      <MadeByCreditSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
