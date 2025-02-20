"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  ScrollAnimation,
  ScrollAnimationWrapper,
} from "../ui/scroll-animation";

const PartnersSection = () => {
  const partners = [
    {
      name: "Sarah Johnson",
      role: "Professional Basketball Player",
      quote:
        "The quality and performance of their equipment is unmatched in the industry.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professional%20beautiful%20lady%20basketball%20player%20looking%20at%20the%20front%20and%20simling,%20standing%20with%20a%20basketball.jpg-qgGFRVSGMPgq1MHKwMIzncygZthZ94.jpeg",
    },
    {
      name: "Li Wei",
      role: "National Team Player",
      quote:
        "Their commitment to innovation has revolutionized how we train and play.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20full%20body%20professional%20basketball%20player.%20transparent%20background.jpg-kHCeUX2yEonyxLqw90J5Hh16OjfzbX.jpeg",
    },
    {
      name: "James Chen",
      role: "Team Manager",
      quote:
        "A trusted partner in developing the next generation of basketball talent.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20man%20in%20the%20black%20coat%20standing%20next%20to%20basketball%20boal%20post.jpg-AqQh8lrFi1n2CLm7WIcnOcQX0JEN9g.jpeg",
    },
    {
      name: "Marcus Thompson",
      role: "Professional Athlete",
      quote:
        "BuskLio has been instrumental in elevating the game to new heights.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professional%20basketball%20player%20looking%20at%20the%20front%20and%20simling.jpg-JCYWpgjUMP94vfFjcSt6P02ZMwikrE.jpeg",
    },
  ];

  return (
    <ScrollAnimation>
      <section id="about" className="py-20 bg-gradient-radial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-3xl" />
              <h2 className="relative text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  Our Partners
                </span>
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
            </div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Trusted by professional athletes and teams worldwide
            </p>
          </div>

          <ScrollAnimationWrapper>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-blue-950/50 to-transparent border border-blue-900/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="aspect-[3/4] relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <blockquote className="text-white mb-4 text-sm">
                        &quot;{partner.quote}&quot;
                      </blockquote>
                      <div className="flex items-center gap-2">
                        <div>
                          <h3 className="font-semibold text-white">
                            {partner.name}
                          </h3>
                          <p className="text-sm text-blue-400">
                            {partner.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default PartnersSection;
