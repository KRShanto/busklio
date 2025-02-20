"use client";

import { ScrollAnimation } from "../ui/scroll-animation";
import GradientButton from "../ui/gradient-button";

const CTASection = () => {
  return (
    <ScrollAnimation>
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-blue-400 mb-8">
            Join thousands of satisfied customers and experience the difference
            with BuskLio.
          </p>
          <GradientButton className="px-8 py-3">Shop Now</GradientButton>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default CTASection;
