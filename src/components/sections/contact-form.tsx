"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 rounded-2xl bg-blue-500/10 border border-blue-500/20">
        <h3 className="text-xl font-semibold mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-gray-400">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Your Name"
          required
          className="bg-blue-950/20 border-blue-500/20 focus:border-blue-500/50 placeholder-gray-500 text-white"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          className="bg-blue-950/20 border-blue-500/20 focus:border-blue-500/50 placeholder-gray-500 text-white"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Your Message"
          required
          className="bg-blue-950/20 border-blue-500/20 focus:border-blue-500/50 placeholder-gray-500 text-white min-h-[120px]"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white transition-all"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2" />
            Sending...
          </div>
        ) : (
          <span className="flex items-center justify-center">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  );
}
