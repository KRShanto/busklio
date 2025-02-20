"use client";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "react-feather";
import { motion } from "framer-motion";
import { ScrollAnimation } from "../ui/scroll-animation";
import ContactForm from "./contact-form";

const ContactSection = () => {
  return (
    <ScrollAnimation>
      <section id="contact" className="py-20 bg-gradient-radial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Get in Touch
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Have questions or need assistance? We&apos;re here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 mt-1 text-blue-500" />
                    <span>123 Sport Street, NY 10001</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span>contact@busklio.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-600/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-600/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-600/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="bg-blue-950/30 rounded-2xl border border-blue-500/20 shadow-lg shadow-blue-500/10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ContactSection;
