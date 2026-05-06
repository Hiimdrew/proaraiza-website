"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "word" | "character";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "h2",
  splitBy = "word",
}: TextRevealProps) {
  const MotionTag = motion.create(Tag);
  const units = splitBy === "word" ? children.split(" ") : children.split("");

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px" }}
      className={className}
      aria-label={children}
    >
      {units.map((unit, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 40, rotateX: -40 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.5,
                delay: delay + i * (splitBy === "word" ? 0.08 : 0.03),
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
          style={{ perspective: "600px" }}
        >
          {unit}
          {splitBy === "word" && i < units.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-brand-gold via-brand-copper to-brand-gold bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
