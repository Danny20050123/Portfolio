"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "../components/ui/text-flipping-board";

const MESSAGES: string[] = [
  "SOFTWARE ENGINEER\nEMBEDDED Systems\nAI/ML & FULL-STACK",
  "BUILDING AVIONICS SOFTWARE\nFOR AUTONOMOUS ROCKETS",
  "DESIGNING\nMULTI-AGENT\nRAG-BASED\nLLM SYSTEMS",
  "SOFTWARE LEAD @\n UCI Rocket Project Solids",
  "EMBEDDED SYSTEMS\nENGINEERING INTERN @\n SQUID3 SPACE",
  "IRVINEHACKS 2025\nBEST OVERALL WINNER",
  "FROM STM32 FIRMWARE\nTO NEXT.JS APPLICATIONS",
];

export function TextFlippingBoardDemo() {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 py-2">
      <TextFlippingBoard text={MESSAGES[msgIdx]} />
    </div>
  );
}
