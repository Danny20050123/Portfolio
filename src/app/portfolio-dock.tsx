"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconTrophy,
} from "@tabler/icons-react";

const iconClassName = "h-full w-full text-zinc-300";

const links = [
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className={iconClassName} />,
    href: "https://linkedin.com/in/ningyuan-li",
  },
  {
    title: "Email",
    icon: <IconMail className={iconClassName} />,
    href: "mailto:liningyuan2005@gmail.com",
  },
  {
    title: "Devpost",
    icon: <IconTrophy className={iconClassName} />,
    href: "https://devpost.com/Danny20050123",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className={iconClassName} />,
    href: "https://github.com/Danny20050123",
  },
];

export function PortfolioDock() {
  return (
    <FloatingDock
      items={links}
      desktopClassName="fixed left-6 top-1/2 z-50 -translate-y-1/2"
      mobileClassName="fixed bottom-6 right-6 z-50"
    />
  );
}