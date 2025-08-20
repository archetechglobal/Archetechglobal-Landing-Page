import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services />
      <About />
      <Work />
      <Footer />
    </>
  );
}
