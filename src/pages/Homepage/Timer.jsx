import React, { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const watch = setInterval(async () => {
      setTimer((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(watch);
    };
  }, []);
  return (
    <div>
      <span>{Math.floor((timer / (60 * 60)) % 24)}</span> :{" "}
      <span>
        {Math.floor((timer / 60) % 60) < 10
          ? "0" + Math.floor((timer / 60) % 60)
          : Math.floor((timer / 60) % 60)}
      </span>{" "}
      : <span>{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}</span>
    </div>
  );
}

export default Timer;
