import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const initialTimeInSeconds = 10 * 60; // 10 minutes
  const [seconds, setSeconds] = useState(initialTimeInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  const displayTime = () => {
    const displayMinutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    return `${displayMinutes.toString().padStart(2, "0")}:${displaySeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="text-center text-4xl font-bold text-white bg-gray-800 py-2 px-4 rounded-lg">
      {displayTime()}
    </div>
  );
}

export default CountdownTimer;
