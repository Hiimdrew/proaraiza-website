"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import VideoHero from "@/components/VideoHero";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import TextReveal, { GradientText } from "@/components/animations/TextReveal";
import TiltCard from "@/components/animations/TiltCard";
import Marquee, { MarqueeItem } from "@/components/animations/Marquee";
import { FloatingShape } from "@/components/animations/ParallaxFloat";

const services = [
  {
    name: "Interior Painting",
    href: "/interior-painting",
    description:
      "Walls, ceilings, trim, and more. Transform any room with a flawless paint job.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: "Exterior Painting",
    href: "/exterior-painting",
    description:
      "Hardie board, wood, brick, and stucco. Protect and beautify your home's exterior.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Cabinet Refinishing",
    href: "/cabinet-painting",
    description:
      "Give your kitchen a fresh look at a fraction of the cost of replacement.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    name: "Remodeling & Drywall",
    href: "/remodeling",
    description:
      "Drywall repair, trim, flooring, carpentry, and full room renovations.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.12 2.12 0 010-3l.71-.71a2.12 2.12 0 013 0l5.1 5.1m-6.72 6.72l6.72-6.72m4.24-4.24l-3.54-3.54a2.12 2.12 0 00-3 0l-.71.71a2.12 2.12 0 000 3l3.54 3.54" />
      </svg>
    ),
  },
];

const trustStats = [
  { number: 10, suffix: "+", label: "Years in Business" },
  { number: 250, suffix: "+", label: "Projects Completed" },
  { number: 2, suffix: "-Yr", label: "Workmanship Warranty" },
  { number: 7, suffix: "/7", label: "Days Available" },
];

const serviceAreas = [
  { name: "Cumming", href: "/painting-cumming-ga" },
  { name: "Alpharetta", href: "/painting-alpharetta-ga" },
  { name: "Marietta", href: "/painting-marietta-ga" },
  { name: "Roswell", href: "/painting-roswell-ga" },
  { name: "Buford", href: "/painting-buford-ga" },
  { name: "Woodstock", href: "/painting-woodstock-ga" },
  { name: "Duluth", href: "/painting-duluth-ga" },
  { name: "Gainesville", href: "/painting-gainesville-ga" },
  { name: "Dacula", href: "/painting-dacula-ga" },
];

const marqueeItems = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Refinishing",
  "Drywall Repair",
  "Trim & Molding",
  "Pressure Washing",
  "Deck Staining",
  "Popcorn Removal",
  "Color Consultation",
  "Full Remodels",
];

export default function HomePage() {
  return (
    <>
      {/* Video Hero */}
      <VideoHero videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_3DJzWESkS8iVQCDTaqBdUF9qEAc/hf_20260506_011937_72ad6b05-ebc6-4d20-baa6-1b70b643f9c3.mp4" />

      {/* Trust Stats - floating card overlapping hero */}
      <section className="relative z-10 -mt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-copper/20 shadow-2xl shadow-black/20 lg:grid-cols-4"
          >
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="flex flex-col items-center justify-center bg-white p-6 text-center lg:p-10"
              >
                <div className="text-4xl font-bold text-brand-black lg:text-5xl">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-text-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="border-y border-gray-100 bg-white py-6">
        <Marquee speed={35} className="text-brand-text-light">
          {marqueeItems.map((item) => (
            <MarqueeItem key={item} className="gap-8">
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">{item}</span>
              <span className="text-brand-gold">&#x2022;</span>
            </MarqueeItem>
          ))}
        </Marquee>
      </section>

      {/* Services - with 3D tilt cards */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <FloatingShape className="-right-10 top-20" size={200} delay={0} />
        <FloatingShape className="-left-16 bottom-32" size={150} delay={2} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                What We Do
              </span>
            </ScrollReveal>
            <TextReveal
              as="h2"
              className="mt-4 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl lg:text-6xl"
              delay={0.1}
            >
              Our Services
            </TextReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-text-light">
                From a single room to a full home transformation. One team for
                everything.
              </p>
            </ScrollReveal>
          </div>

          <StaggerChildren className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
            {services.map((service) => (
              <StaggerItem key={service.href}>
                <TiltCard tiltAmount={8} className="h-full">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/10"
                  >
                    <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-brand-gold/5 transition-transform duration-500 group-hover:scale-[3]" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gold/10 text-brand-gold transition-all duration-300 group-hover:bg-brand-gold group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-gold/25">
                      {service.icon}
                    </div>
                    <h3 className="relative mt-8 text-xl font-bold text-brand-black">
                      {service.name}
                    </h3>
                    <p className="relative mt-3 flex-1 text-sm leading-relaxed text-brand-text-light">
                      {service.description}
                    </p>
                    <div className="relative mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-gold transition-all group-hover:gap-4">
                      Learn More
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative -mb-1">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 40C240 10 480 70 720 40C960 10 1200 70 1440 40V80H0V40Z" fill="#0A0A0A" />
        </svg>
      </div>

      {/* Recent Projects */}
      <section className="relative bg-brand-black py-28 lg:py-36">
        <div className="bg-noise absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <ScrollReveal>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  Portfolio
                </span>
              </ScrollReveal>
              <TextReveal
                as="h2"
                className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                delay={0.1}
              >
                Recent Projects
              </TextReveal>
            </div>
            <ScrollReveal delay={0.3}>
              <Link
                href="/gallery"
                className="hidden items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-gold transition hover:gap-3 hover:text-brand-copper sm:flex"
              >
                View All Work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>

          <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.2}>
            {[
              { title: "Modern Living Room", location: "Cumming, GA", type: "Interior Painting", video: undefined },
              { title: "Kitchen Cabinet Transformation", location: "Alpharetta, GA", type: "Cabinet Refinishing", video: "https://d8j0ntlcm91z4.cloudfront.net/user_3DJzWESkS8iVQCDTaqBdUF9qEAc/hf_20260506_013722_e050bc30-afab-4373-ab4a-3c4e27313913.mp4" },
              { title: "Craftsman Exterior", location: "Roswell, GA", type: "Exterior Painting", video: "https://d8j0ntlcm91z4.cloudfront.net/user_3DJzWESkS8iVQCDTaqBdUF9qEAc/hf_20260506_013725_58789826-82a0-4531-9a20-ecc327da0c2d.mp4" },
            ].map((project) => (
              <StaggerItem key={project.title}>
                <div className="group cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 hover:ring-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/10">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                    {project.video ? (
                      <video autoPlay muted loop playsInline className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-600">
                        <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="bg-brand-dark-gray p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gold">
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">{project.location}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="mt-10 text-center sm:hidden">
            <Link href="/gallery" className="text-sm font-bold uppercase tracking-wider text-brand-gold">
              View All Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Divider (inverted) */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V0H0V40Z" fill="#0A0A0A" />
        </svg>
      </div>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <FloatingShape className="right-20 top-32" size={120} delay={1} />
        <FloatingShape className="left-10 bottom-20" size={180} delay={3} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  Why Pro Araiza
                </span>
              </ScrollReveal>
              <TextReveal
                as="h2"
                className="mt-4 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl"
                delay={0.1}
              >
                Why North Atlanta Homeowners Choose Pro Araiza
              </TextReveal>

              <div className="mt-12 space-y-6">
                {[
                  { text: "Owner-led — Joaquin Araiza is on every job, no subcontractors", icon: "home" },
                  { text: "10 years in business · 250+ projects across North Atlanta", icon: "clock" },
                  { text: "Sherwin-Williams & Benjamin Moore premium paint only", icon: "check" },
                  { text: "Fully insured · 2-year workmanship warranty on every project", icon: "shield" },
                  { text: "Honest pricing — 30-50% deposit, balance only when you're 100% satisfied", icon: "dollar" },
                  { text: "Available 7 days a week, 7 AM to 7 PM", icon: "calendar" },
                ].map((point, i) => (
                  <motion.div
                    key={point.text}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="group flex gap-5"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 transition-all duration-300 group-hover:bg-brand-gold group-hover:shadow-lg group-hover:shadow-brand-gold/25">
                      <svg className="h-5 w-5 text-brand-gold transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="pt-2 text-lg text-brand-text">{point.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12"
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 rounded-lg bg-brand-black px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-brand-gold hover:text-brand-black hover:shadow-lg hover:shadow-brand-gold/25"
                >
                  Learn More About Us
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                  <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                    <source src="https://d8j0ntlcm91z4.cloudfront.net/user_3DJzWESkS8iVQCDTaqBdUF9qEAc/hf_20260506_013722_e050bc30-afab-4373-ab4a-3c4e27313913.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Floating accent card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  className="absolute -bottom-8 -left-8 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold to-brand-copper shadow-lg shadow-brand-gold/25">
                      <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-brand-black">Fully Insured</p>
                      <p className="text-sm text-brand-text-light">For your protection</p>
                    </div>
                  </div>
                </motion.div>
                {/* Second floating card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
                  className="absolute -right-6 top-8 rounded-2xl bg-brand-black p-5 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-white">5.0</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">500+ Projects</p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative bg-gradient-to-br from-brand-gray via-white to-brand-gray py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Service Areas
              </span>
            </ScrollReveal>
            <TextReveal
              as="h2"
              className="mt-4 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl lg:text-6xl"
              delay={0.1}
            >
              Serving Cumming & North Atlanta
            </TextReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-text-light">
                Proudly serving homeowners across Forsyth County and the surrounding
                communities.
              </p>
            </ScrollReveal>
          </div>

          <StaggerChildren className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {serviceAreas.map((area) => (
              <StaggerItem key={area.href}>
                <Link
                  href={area.href}
                  className="group flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-brand-gold/30"
                >
                  <div>
                    <span className="text-xl font-bold text-brand-black transition-colors group-hover:text-brand-gold">
                      {area.name}, GA
                    </span>
                    <p className="mt-1 text-sm text-brand-text-light">
                      Painting & Remodeling
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gray text-brand-gold transition-all duration-300 group-hover:bg-brand-gold group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-gold/25">
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <FloatingShape className="right-0 top-10" size={100} delay={0.5} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Reviews
              </span>
            </ScrollReveal>
            <TextReveal
              as="h2"
              className="mt-4 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl lg:text-6xl"
              delay={0.1}
            >
              What Your Neighbors Say
            </TextReveal>
          </div>

          <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
            {[
              { quote: "Pro Araiza did an amazing job on our interior painting. Professional, on time, and the quality was outstanding.", author: "Forsyth County Homeowner", source: "Nextdoor" },
              { quote: "Fully insured and professional. They handled our drywall repair and painting perfectly. Highly recommend.", author: "Cumming, GA Resident", source: "Nextdoor" },
              { quote: "Great work on our exterior trim and pressure washing. The house looks brand new. Fair pricing too.", author: "North Atlanta Homeowner", source: "Nextdoor" },
            ].map((t, i) => (
              <StaggerItem key={t.author}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-xl"
                >
                  <svg className="absolute right-6 top-6 h-12 w-12 text-brand-gold/10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="h-5 w-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-brand-text">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/10 text-sm font-bold text-brand-gold">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-black">{t.author}</p>
                      <p className="text-xs text-brand-text-light">via {t.source}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-brand-gray py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Resources
              </span>
            </ScrollReveal>
            <TextReveal
              as="h2"
              className="mt-4 text-4xl font-bold tracking-tight text-brand-black sm:text-5xl lg:text-6xl"
              delay={0.1}
            >
              Painting & Remodeling Tips
            </TextReveal>
          </div>

          <StaggerChildren className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
            {[
              { title: "How Much Does It Cost to Paint a House in Georgia?", excerpt: "A room-by-room breakdown of what Georgia homeowners actually pay for professional painting in 2026.", href: "/blog/cost-to-paint-house-georgia" },
              { title: "7 Questions to Ask Before Hiring a Painting Contractor", excerpt: "Protect yourself and your home with these essential questions every homeowner should ask.", href: "/blog/questions-to-ask-painting-contractor" },
              { title: "Best Time to Paint Your Home Exterior in Georgia", excerpt: "Spring, summer, or fall? Here is when Georgia weather gives you the best results.", href: "/blog/best-time-to-paint-exterior-georgia" },
            ].map((post) => (
              <StaggerItem key={post.href}>
                <Link
                  href={post.href}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-100 transition-transform duration-500 group-hover:scale-105" />
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-lg font-bold leading-tight text-brand-black transition-colors group-hover:text-brand-gold">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-text-light">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-gold">
                      Read More
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTABanner />
      <div className="h-16 lg:hidden" />
    </>
  );
}
