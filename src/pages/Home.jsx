import Hero from "../components/Hero";
import BuiltByUs from "../components/BuiltByUs";
import WhatWeBuild from "../components/WhatWeBuild";
import HowItWorks from "../components/HowItWorks";
import Institutional from "../components/Institutional";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-body">
      <Hero />
      <BuiltByUs />
      <WhatWeBuild />
      <HowItWorks />
      <Institutional />
      <Footer />
    </div>
  );
}
