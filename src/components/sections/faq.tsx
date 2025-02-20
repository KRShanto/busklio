"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  ScrollAnimation,
  ScrollAnimationWrapper,
} from "../ui/scroll-animation";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of basketballs do you offer?",
      answer:
        "We offer a wide range of basketballs including indoor, outdoor, and composite basketballs suitable for all skill levels from beginner to professional.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on the destination.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused items in their original packaging. Custom orders are non-refundable.",
    },
    {
      question: "Are your products suitable for professional use?",
      answer:
        "Many of our products are designed for and used by professional athletes and teams worldwide.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.",
    },
  ];

  return (
    <ScrollAnimation>
      <section className="py-20 bg-gradient-radial">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and
              services
            </p>
          </div>

          <ScrollAnimationWrapper>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-white/20 rounded-lg overflow-hidden"
                  initial={false}
                  animate={{ height: openFAQ === index ? "auto" : "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left hover:bg-white/5 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-400" />
                    )}
                  </button>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: openFAQ === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFAQ === index && (
                      <div className="p-4">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default FAQSection;
