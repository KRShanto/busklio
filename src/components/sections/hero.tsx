"use client";

import { ScrollAnimation } from "../ui/scroll-animation";
import GradientButton from "../ui/gradient-button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Elevate Your Game with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  Premium Basketball Gear
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Experience the perfect blend of style and performance with our
                professional basketball equipment.
              </p>
              <GradientButton className="px-8 py-3">
                Explore Collection
              </GradientButton>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent blur-3xl" />
              <div className="relative">
                <div className="absolute -inset-4 rounded-full border-[3px] border-blue-600/30 animate-[spin_30s_linear_infinite]" />
                <div className="absolute -inset-4 rounded-full border-[3px] border-blue-600/20 animate-[spin_20s_linear_infinite_reverse]" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-sd3gaJ0fdf7Il3unZhNOh1HTkhz83U.png"
                  alt="Basketball Player"
                  width={600}
                  height={600}
                  className="object-contain relative z-10"
                  priority
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
