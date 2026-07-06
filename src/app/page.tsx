import Image from "next/image";
import { AnimatedTabsHover } from "./hover-tab";
import InteractiveModel from "../../components/model";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <section className="max-w-3xl">
        <AnimatedTabsHover />

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Hi, I&apos;m Danny.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          I build software across mobile, web, and embedded systems.
        </p>
      </section>

      <InteractiveModel />
    </main>
  );
}