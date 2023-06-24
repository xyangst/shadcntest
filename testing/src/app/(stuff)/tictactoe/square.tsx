"use client";
import React from "react";

export default function Square({ Value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="h-10 w-10 border p-0 text-3xl font-bold md:h-12 md:w-12 xl:md:h-14  xl:md:w-14"
    >
      {Value}
    </button>
  );
}
