"use client";
import Square from "./square";
import { useState } from "react";
import { Button } from "../../../components/shadcn/button";
import { Switch } from "../../../components/shadcn/switch";
import { Label } from "../../../components/shadcn/label";
function Board({ winners, setWinners }) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(nextSquares);

    const winner = calculateWinner(nextSquares);
    if (winner) {
      updateWins(winner);
    }
  }

  function resetBoard() {
    setSquares(Array(9).fill(null));
    setXIsNext(Math.random() < 0.5);
  }

  function updateWins(winner) {
    if (winner === "X") {
      setWinners((prevState) => ({
        ...prevState,
        xWins: prevState.xWins + 1,
      }));
    } else if (winner === "O") {
      setWinners((prevState) => ({
        ...prevState,
        oWins: prevState.oWins + 1,
      }));
    } else {
      setWinners((prevState) => ({
        ...prevState,
        draws: prevState.draws + 1,
      }));
    }
  }

  const winner = calculateWinner(squares);
  const isDraw = squares.every((square) => square !== null);
  let status;
  if (isDraw) {
    status = "It's a draw.";
  } else if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const squareComponents = squares.map((value, index) => (
    <Square
      key={index}
      Value={value}
      onSquareClick={() => handleClick(index)}
    />
  ));

  return (
    <div className="">
      <div className="md:text-md mb-3 text-center text-sm xl:text-xl">
        {status}
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-0">{squareComponents}</div>
      </div>
      <div className=" text-center">
        <div className="flex items-center space-x-2 py-2">
          <Switch id="silly-mode" />
          <Label htmlFor="silly-mode">reverse</Label>
        </div>
        <Button
          className="md:text-md  mt-3 text-sm xl:text-xl"
          onClick={resetBoard}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every((element) => element !== null)) {
    return "sex";
  }

  return null;
}

export default Board;
