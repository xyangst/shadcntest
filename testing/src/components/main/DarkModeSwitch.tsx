"use client";
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

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
    <button
      type="button"
      onClick={toggleDarkMode}
      className="m-0 rounded-md text-3xl"
    >
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkModeSwitch;
