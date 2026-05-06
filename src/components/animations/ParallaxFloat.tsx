"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxFloatProps {
  className?: string;
  speed?: number;
  children?: React.ReactNode;
}

export default function ParallaxFloat({
  className = "",
  speed = 0.3,
  children,
}: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function FloatingShape({
  className = "",
  size = 80,
  delay = 0,
}: {
  className?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full bg-brand-gold/5 ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
