import SideRays from "@/components/backgrounds/SideRays";
import { AnimatedTabsHover } from "./hover-tab";
import InteractiveModel from "../../components/model";
import { TextFlippingBoardDemo } from "./flip-board";

export default function Home() {
  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-black px-6 text-white"
    >
      <SideRays
        speed={2.5}
        rayColor1="#EAB308"
        rayColor2="#96c8ff"
        intensity={2}
        spread={2}
        origin="top-right"
        tilt={0}
        saturation={1.5}
        blend={0.75}
        falloff={1.6}
        opacity={1}
        className="z-0"
      />

      <div className="relative z-10 mx-auto grid min-h-screen grid-cols-1 items-center justify-center gap-8 md:grid-cols-[28rem_auto]">
        <section className="w-full max-w-md">
          <AnimatedTabsHover />

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Hi, I&apos;m Danny.
          </h1>

          <TextFlippingBoardDemo />
        </section>

        <div className="flex items-center justify-center">
          <InteractiveModel />
        </div>
      </div>
    </main>
  );
}