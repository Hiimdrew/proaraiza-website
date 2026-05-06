"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Ready to Transform Your Home?",
  subtext = "Get a free, no-obligation estimate today. We respond within 24 hours.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-black via-brand-dark-gray to-brand-black py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-brand-copper/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 text-lg text-gray-400">{subtext}</p>
        </ScrollReveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-lg bg-brand-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-brand-black transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/30"
          >
            <span className="relative z-10">Get a Free Quote</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-copper to-brand-gold transition-transform duration-500 group-hover:translate-x-0" />
            <span className="absolute inset-0 z-10 flex items-center justify-center font-bold uppercase tracking-wider text-brand-black opacity-0 transition-opacity group-hover:opacity-100">
              Get a Free Quote
            </span>
          </Link>
          <a
            href="tel:7706240593"
            className="flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-brand-gold"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Or call (770) 624-0593
          </a>
        </motion.div>
      </div>
    </section>
  );
}
