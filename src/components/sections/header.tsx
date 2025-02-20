"use client";

import { ShoppingBasketIcon as Basketball } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import GradientButton from "../ui/gradient-button";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl">
      <div className="mx-8 md:mx-12 lg:mx-16">
        <nav className="flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-md bg-transparent border border-white/20">
          <Link href="/" className="flex items-center gap-2">
            <Basketball className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              BuskLio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Products", "About", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-white hover:text-blue-400 transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <GradientButton>Shop Now</GradientButton>
        </nav>
      </div>
    </header>
  );
}
