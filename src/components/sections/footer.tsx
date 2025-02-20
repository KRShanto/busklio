"use client";
import { ShoppingBasketIcon as Basketball } from "lucide-react";
import Link from "next/link";
import GradientButton from "../ui/gradient-button";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Basketball className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                BuskLio
              </span>
            </div>
            <p className="text-gray-400">
              Premium basketball equipment for players who demand excellence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Shipping
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Returns
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-blue-950/20 border border-blue-500/20 focus:border-blue-500/50 outline-none transition-colors text-white placeholder-gray-500"
              />
              <GradientButton className="w-full">Subscribe</GradientButton>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-900/20 text-center text-gray-400">
          <p>&copy; 2024 BuskLio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
