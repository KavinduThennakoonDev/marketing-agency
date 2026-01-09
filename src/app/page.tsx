"use client";

import { useState } from "react";
import { Loader } from "@/components/loader";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-black text-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Hero />
          <About />
          <Services />
          <FeaturedWork />
          <Process />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
