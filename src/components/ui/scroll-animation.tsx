"use client";

import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const ScrollAnimationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-4">
      {React.Children.map(children, (child, index) => (
        <ScrollAnimation key={index} delay={index * 0.2}>
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
};

export { ScrollAnimation, ScrollAnimationWrapper };
