import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import WhatWeDo from "@/components/home/WhatWeDo";
import FAQs from "@/components/home/FAQs";

export default function Index() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Testimonials />
      <FAQs />
    </div>
  );
}
