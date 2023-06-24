"use client";
import Board from "@/components/tic/board";
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
      <div className="flex z-10 w-full max-w-8xl items-center justify-between font-mono min-w-fit text-5xl lg:flex">
        React Tic Tac Toe <GiTicTacToe className="mx-2" />
      </div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Board winners={winners} setWinners={setWinners} />
      </div>
      <div className="fixed top-1/2 right-0 text-center text-xl">
        <div className=" border py-2 pr-2 transform -translate-y-1/2">
          <div>X Wins: {winners.xWins}</div>
          <div>O Wins: {winners.oWins}</div>
          <div>Draws : {winners.draws}</div>
        </div>
      </div>
    </main>
  );
}
