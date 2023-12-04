import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const CountDownTimer = ({ currentLevel, onFinish, setWinLose }) => {
  const [remainingTime, setRemainingTime] = useState(200);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 1;
        return newTime >= 0 ? newTime : 0;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [onFinish]);

  useEffect(() => {
    if (remainingTime === 0) {
      onFinish();
    }
  }, [remainingTime, onFinish, setWinLose]);

  return (
    <div>
      <p>Remaining Time: {remainingTime} seconds</p>
    </div>
  );
};

export default CountDownTimer;
