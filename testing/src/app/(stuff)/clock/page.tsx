"use client";
export const metadata = {
  title: "Calculator",
  description: "made by xyangst",
};
import { useState } from "react";
import { FaClock } from "react-icons/fa";
import Clock from "./clock";
export default function Home() {
  const [settings, setSettings] = useState({
    showSeconds: true,
  });
  return (
    <main>
      <div className="flex z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        React Clock <FaClock className="mx-2" />
      </div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Clock settings={settings} />
      </div>
    </main>
  );
}
