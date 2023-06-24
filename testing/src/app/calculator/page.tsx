export const metadata = {
  title: "Calculator",
  description: "made by xyangst",
};

import Calculator from "@/components/calculator/calculator";
import { FaCalculator } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="flex z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        React Calculator <FaCalculator className="mx-2" />
      </div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Calculator />
      </div>
    </main>
  );
}
