"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientText } from "@/components/animations/TextReveal";
import { useLanguage } from "@/i18n/LanguageContext";

interface VideoHeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

export default function VideoHero({ videoSrc, posterSrc }: VideoHeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100vh] min-h-[700px] overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className="h-full w-full object-cover scale-105"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-900 via-gray-800 to-brand-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/50 to-brand-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
        <div className="bg-noise absolute inset-0 opacity-30" />
      </div>

      {/* Content */}
      <div className="relative flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold backdrop-blur-sm">
                {t.hero.badge}
              </span>
            </motion.div>

            <div className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
                  {t.hero.line1}
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
              >
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
                  {t.hero.line2}{" "}
                  <GradientText>{t.hero.line2Accent}</GradientText>
                </h1>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-2"
            >
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-brand-gold to-brand-copper" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-lg bg-brand-gold px-10 py-4 text-center text-sm font-bold uppercase tracking-wider text-brand-black transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/30 animate-pulse-glow"
              >
                <span className="relative z-10">{t.hero.cta}</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-copper to-brand-gold transition-transform duration-500 group-hover:translate-x-0" />
                <span className="absolute inset-0 z-10 flex items-center justify-center font-bold uppercase tracking-wider text-brand-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {t.hero.cta}
                </span>
              </Link>
              <a
                href="tel:8434152437"
                className="group rounded-lg border-2 border-white/20 px-10 py-4 text-center text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="h-4 w-4 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (843) 415-2437
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
            {t.hero.scroll}
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
