"use client";
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaAirbnb } from "react-icons/fa";
import { Button } from "../shadcn/button";
import { Tooltip } from "../shadcn/tooltip";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is enabled on initial load
  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem("isDarkModeEnabled");
    setIsDarkMode(isDarkModeEnabled === "true");
  }, []);

  // Apply dark mode class to root element
  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkModeEnabled", (!isDarkMode).toString());
  };

  return (
    <Tooltip info="switch Theme">
          <Button
    variant="ghost"
      type="button"
      onClick={toggleDarkMode}
      className="m-0 rounded-md px-0 w-10 h-10 text-3xl"
    >
      {isDarkMode ? <FaAirbnb /> : <FaSun />}
    </Button>
    </Tooltip>

  );
};

export default DarkModeSwitch;
