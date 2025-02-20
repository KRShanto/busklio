import ContactSection from "@/components/sections/contact";
import CTASection from "@/components/sections/cta";
import FAQSection from "@/components/sections/faq";
import FeaturesSection from "@/components/sections/featured";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import PartnersSection from "@/components/sections/partners";
import ProductsSection from "@/components/sections/products";
import StatsSection from "@/components/sections/stats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuskLio - Elevate Your Game",
  description:
    "Experience the perfect blend of style and performance with our professional basketball equipment.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden font-inter">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ProductsSection />
      <PartnersSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
