"use client";
import { FaQuestion } from "react-icons/fa";
import { useState, useEffect } from "react";
import Questions from "./Questions";

export default function Home() {
  const [faqConfig, setFaqConfig] = useState([
    {
      q: "Is God real?",
      a: "no.",
    },
  ]);
  const addQuestions = (n) => {
    const addQuestion = () => {
      let randomNumber = Math.floor(Math.random() * 50000000000000 + 0.5);
      setFaqConfig((prevConfig) => [
        ...prevConfig,
        {
          q: "What is " + randomNumber + " + 1",
          a: "The answer is obviously " + randomNumber + 1,
        },
      ]);
    };
    for (let i = 0; i < n; i++) {
      addQuestion();
    }
  };

  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      addQuestions(10);
    }
  }
  document.addEventListener("scroll", handleScroll);
  return (
    <main>
      <div className="z-10  mb-24 flex  w-full items-center justify-between text-xs lg:flex">
        Infinitely Asked Questions <FaQuestion className="mx-2" />
      </div>
      <Questions config={faqConfig} />
    </main>
  );
}
