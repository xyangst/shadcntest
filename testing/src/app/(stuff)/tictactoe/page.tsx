"use client";
export const metadata = {
  title: "Tic Tac Toe",
  description: "made by xyangst",
};

import Board from "@/app/(stuff)/tictactoe/board";
import { GiTicTacToe } from "react-icons/gi";

import { useState } from "react";
export default function Home() {
  const [winners, setWinners] = useState({
    xWins: 0,
    oWins: 0,
    draws: 0,
  });
  return (
    <main className="">
      <div className="max-w-8xl z-10 flex w-full min-w-fit items-center justify-between font-mono text-5xl lg:flex">
        React Tic Tac Toe <GiTicTacToe className="mx-2" />
      </div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <Board winners={winners} setWinners={setWinners} />
      </div>
      <div className="fixed right-0 top-1/2 text-center text-xl">
        <div className=" -translate-y-1/2 transform border py-2 pr-2">
          <div>X Wins: {winners.xWins}</div>
          <div>O Wins: {winners.oWins}</div>
          <div>Draws : {winners.draws}</div>
        </div>
      </div>
    </main>
  );
}
