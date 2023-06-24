"use client";
import { Input } from "@/components/shadcn/input";
import CalculatorItem from "@/app/(stuff)/calculator/CalculatorItem";

import React, { useState } from "react";
import { Label } from "@/components/shadcn/label";
import { Switch } from "@/components/shadcn/switch";
const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [sillyMode, setSillyMode] = useState(false);
  const [items, setItems] = useState([
    { sign: "C" },
    { sign: "(" },
    { sign: ")" },
    { sign: "%" },
    { sign: "^" },
    { sign: "sin" },
    { sign: "cos" },
    { sign: "7" },
    { sign: "8" },
    { sign: "9" },
    { sign: "/" },
    { sign: "4" },
    { sign: "5" },
    { sign: "6" },
    { sign: "-" },
    { sign: "1" },
    { sign: "2" },
    { sign: "3" },
    { sign: "+" },
    { sign: "0" },
    { sign: "." },
    { sign: "=" },
    { sign: "*" },
  ]);
  const handleClick = (sign) => {
    if (sillyMode) {
      setItems([...items].sort(() => Math.random() - 0.5));
    }

    let newInput = "";
    switch (sign) {
      case "C":
        break;
      case "sin":
        newInput = "sin(" + inputValue;
        break;
      case "cos":
        newInput = "sin(" + inputValue;
        break;
      case "=":
        try {
          const result = eval(inputValue);
          newInput = String(result);
          console.log(newInput);
        } catch (error) {
          newInput = error;
        }
        break;

      default:
        newInput = inputValue + sign;
        break;
    }
    setInputValue(newInput);
  };
  const handleSwitchChange = () => {
    setSillyMode(!sillyMode);
  };

  return (
    <div className="border px-2 pt-2">
      <Input className="font-mono" value={inputValue} onChange={() => {}} />
      <div className="mt-4  grid grid-cols-4 gap-1 border">
        {items.map((item, index) => (
          <CalculatorItem
            key={index}
            sign={item.sign}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="flex items-center space-x-2 py-2">
        <Switch
          checked={sillyMode}
          onCheckedChange={handleSwitchChange}
          id="silly-mode"
        />
        <Label htmlFor="silly-mode">Silly Mode</Label>
      </div>
    </div>
  );
};

export default Calculator;
