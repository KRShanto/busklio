"use client";

import { ShoppingCart } from "react-feather";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { ScrollAnimationWrapper } from "../ui/scroll-animation";
import { ScrollAnimation } from "../ui/scroll-animation";

const ProductsSection = () => {
  const products = [
    {
      name: "Pro Competition Basketball",
      price: "$89.99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/basketball%20full%20image.%203-5%20balls%20near%20the%20goal%20post.jpg-bipT6oUh5iij2ZgOWJ6vQ0jqy0NkAn.jpeg",
    },
    {
      name: "Dynamic Court Shoes",
      price: "$159.99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sports%20shoes.jpg3.jpg-BQgZ5NAFI1sKHA3KsxvnB17FJ1majn.jpeg",
    },
    {
      name: "Elite Team Jersey - Blue",
      price: "$79.99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Basketball%20blue%20jersey%20t-shirt.%20no%20human%20involved.%20showcasing%20the%20jersey.%20display%20full%20shirt.jpg-sGv0GOEnfB9gfVVVRXpzNCyGbyBkeG.jpeg",
    },
    {
      name: "Premium Team Jersey - Red",
      price: "$79.99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Basketball%20red%20jersey%20t-shirt.%20no%20human%20involved.%20showcasing%20the%20jersey.%20display%20full%20shirt.jpg-CE09OqncHbRUJCiEewdpgTKbc0iO33.jpeg",
    },
    {
      name: "Spectrum Performance Shoes",
      price: "$169.99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sports%20shoes.jpg-C35guHSz2LvT6BrL01hAxYeYfmom3D.jpeg",
    },
    {
      name: "Official Game Basketball",
      price: "$99.99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/basketball%20full%20image.%20transparent%20background.jpg-5UvClCHelWf1s6Vn2Yu3f0dO2xjQWn.jpeg",
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-3xl" />
              <h2 className="relative text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  Featured Products
                </span>
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
            </div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Discover our premium selection of professional basketball
              equipment
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimationWrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-b from-blue-950/50 to-transparent border border-blue-900/20 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Cart button that appears on hover */}
                <div className="absolute top-4 right-4 overflow-hidden">
                  <motion.button
                    className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center group/btn transform translate-x-[200%] group-hover:translate-x-0 duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ShoppingCart className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform duration-300" />
                  </motion.button>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <h3 className="text-xl font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="text-blue-400 font-semibold">
                      {product.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default ProductsSection;
