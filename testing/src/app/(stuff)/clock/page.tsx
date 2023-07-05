"use client";
import { useState } from "react";
import { FaClock } from "react-icons/fa";
import Clock from "./clock";
import { Settings } from "./settings";
export default function Home() {
  const [settings, setSettings] = useState({
    showSeconds: true,
  });
  return (
    <main>
      <div className="z-10 flex w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        React Clock <FaClock className="mx-2" />
      </div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <Clock settings={settings} />
      </div>
      <nav className="fixed right-1 top-1 border">
        <Settings />
      </nav>
    </main>
  );
}
