"use client";
import React from "react";

const Clock = ({ settings }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    let hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}${settings.showSeconds ? `:${seconds}` : ""}`;
  };

  return <div className="text-4xl font-bold">{formatTime()}</div>;
};

export default Clock;
