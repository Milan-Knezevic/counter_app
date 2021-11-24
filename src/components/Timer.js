import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
        clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="timer-container">
      <h1>Timer</h1>
      <div>{time}</div>
      <button onClick={() => setTimerOn(true)}>Start</button>
      <button onClick={() => setTimerOn(false)}>Stop</button>
      <button onClick={() => setTimerOn(true)}>Resume</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

export default Timer;

