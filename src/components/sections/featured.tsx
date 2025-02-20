"use client";

import { ScrollAnimationWrapper } from "../ui/scroll-animation";
import { Award, Truck, Shield } from "react-feather";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "Premium Quality",
      description:
        "Professional-grade equipment designed for peak performance.",
      icon: Award,
    },
    {
      title: "Fast Delivery",
      description: "Quick shipping worldwide with careful packaging.",
      icon: Truck,
    },
    {
      title: "Warranty",
      description: "All products come with extended warranty coverage.",
      icon: Shield,
    },
  ];

  return (
    <section className="py-20">
      <ScrollAnimationWrapper>
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-blue-950/50 to-transparent border border-blue-900/20 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default FeaturesSection;
