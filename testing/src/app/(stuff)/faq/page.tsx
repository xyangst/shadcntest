"use client";
import { FaQuestion } from "react-icons/fa";
import { useState } from "react";
import Questions from "./Questions";

export default function Home() {
  const [faqConfig, setFaqConfig] = useState([
    {
      q: "Question 1",
      a: "Answer 1",
    },
  ]);
  const [faqAmount, setFaqAmount] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const addQuestion = () => {
    setFaqConfig((prevConfig) => [
      ...prevConfig,
      {
        q: "Question " + faqAmount,
        a: "Answer " + faqAmount,
      },
    ]);
  };
  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
      addQuestion();
    }
  }
  window.addEventListener("scroll", handleScroll);
  return (
    <main>
      <div className="z-10  mb-24 flex  w-full items-center justify-between text-xs lg:flex">
        Infinitely Asked Questions <FaQuestion className="mx-2" />
      </div>
      <Questions config={faqConfig} />
    </main>
  );
}
