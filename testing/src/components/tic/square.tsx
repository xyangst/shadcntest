"use client";
import React from "react";

export default function Square({ Value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="font-bold w-10 h-10 md:w-12 md:h-12 xl:md:h-14 xl:md:w-14 border text-3xl  p-0"
    >
      {Value}
    </button>
  );
}
