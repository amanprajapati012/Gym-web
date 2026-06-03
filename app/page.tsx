"use Client"

import Features from "@/components/home/Features";
import Banner from "../src/components/home/Banner";
import Hero from "../src/components/home/Hero";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <Hero />
       <Features />
      <Stats />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}