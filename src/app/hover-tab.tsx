"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { AnimatedBackground } from "../../components/motion-primitives/animated-background";

const MotionLink = motion.create(Link);

const TABS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Experiences",
    href: "/experiences",
  },
  {
    label: "Resume",
    href: "/resume",
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
      className="flex w-full max-w-[calc(100vw-3rem)] flex-row [perspective:1000px]"
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
          <MotionLink
            key={tab.label}
            data-id={tab.label}
            href={tab.href}
            variants={itemVariants}
            whileHover={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 0.35,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
            className="whitespace-nowrap rounded-lg px-2 py-1 text-[11px] text-white sm:px-3 sm:py-1.5 sm:text-sm"
          >
            {tab.label}
          </MotionLink>
        ))}
      </AnimatedBackground>
    </motion.nav>
  );
}