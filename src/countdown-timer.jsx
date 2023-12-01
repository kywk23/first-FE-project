import React, { useEffect, useState } from "react";

const CountdownTimer = ({ initialTime, onFinish }) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        const newTime = prevTime - 1;
        return newTime >= 0 ? newTime : 0;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      if (remainingTime === 0) {
        onFinish();
      }
    };
  }, [remainingTime, onFinish]);

  return (
    <div>
      <p>Time Remaining: {remainingTime} seconds</p>
    </div>
  );
};

export default CountdownTimer;
