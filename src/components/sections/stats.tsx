"use client";

import { motion } from "framer-motion";
import React from "react";
import { ScrollAnimationWrapper } from "../ui/scroll-animation";

const StatsSection = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "100+", label: "Products" },
    { number: "24/7", label: "Support" },
    { number: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <ScrollAnimationWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.1 }}
              >
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                    {stat.number}
                  </span>
                </div>
                <p className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default StatsSection;
