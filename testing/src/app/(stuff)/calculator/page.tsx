export const metadata = {
  title: "Calculator",
  description: "made by xyangst",
};

import Calculator from "@/app/(stuff)/calculator/calculator";
import { FaCalculator } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="z-10 flex w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        React Calculator <FaCalculator className="mx-2" />
      </div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <Calculator />
      </div>
    </main>
  );
}
