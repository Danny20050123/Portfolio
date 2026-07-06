"use client";

import { motion, type Variants } from "motion/react";
import { AnimatedBackground } from "../../components/motion-primitives/animated-background";

const TABS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#about",
  },
  {
    label: "Experiences",
    href: "#services",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: -60,
    rotateX: 90,
  },
  visible: {
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1.5,
    },
  },
};

export function AnimatedTabsHover() {
  return (
    <motion.nav
      aria-label="Main navigation"
      className="flex flex-row [perspective:1000px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedBackground
        className="rounded-lg bg-zinc-700"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((tab) => (
          <motion.a
            key={tab.label}
            data-id={tab.label}
            href={tab.href}
            variants={itemVariants}
            className="rounded-lg px-3 py-1.5 text-sm text-white"
          >
            {tab.label}
          </motion.a>
        ))}
      </AnimatedBackground>
    </motion.nav>
  );
}