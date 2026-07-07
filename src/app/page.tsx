import { AnimatedTabsHover } from "./hover-tab";
import InteractiveModel from "../../components/model";
import { TextFlippingBoardDemo } from "./flip-board";

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-6 text-white">
      <div className="mx-auto grid min-h-screen grid-cols-1 items-center justify-center gap-8 md:grid-cols-[28rem_auto]">
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