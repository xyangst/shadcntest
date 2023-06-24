"use client";
import React from "react";
import { Button } from "@/components/shadcn/button";
interface CalculatorItemProps {
  sign: string;
  handleClick: (sign: string) => void;
}

const CalculatorItem: React.FC<CalculatorItemProps> = ({
  sign,
  handleClick,
}) => {
  return (
    <Button variant="ghost" onClick={() => handleClick(sign)}>
      {sign}
    </Button>
  );
};

export default CalculatorItem;
