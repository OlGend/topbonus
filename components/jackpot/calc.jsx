import React, { useState, useEffect } from "react";

const Counter = () => {
  const startAmount = 250000;
  const fixedStartTime = Date.UTC(2024, 7, 4, 0, 0, 0);
  const averageIncrement = 15;

  const calculateCurrentAmount = () => {
    const now = Date.now();
    const differenceInMs = now - fixedStartTime;
    const differenceInSeconds = Math.floor(differenceInMs / 1000);
    const totalIncrement = differenceInSeconds * averageIncrement;

    let currentAmount = startAmount + totalIncrement;
    currentAmount = 250000 + (currentAmount % (375000 - 250000));

    return currentAmount;
  };

  const [amount, setAmount] = useState(calculateCurrentAmount);
  const [displayAmount, setDisplayAmount] = useState(amount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newAmount = calculateCurrentAmount();
      setAmount(newAmount);

      // Плавное изменение значения
      let currentDisplayAmount = displayAmount;
      const step = (newAmount - currentDisplayAmount) / 10;

      const animationInterval = setInterval(() => {
        currentDisplayAmount += step;
        if (
          (step > 0 && currentDisplayAmount >= newAmount) ||
          (step < 0 && currentDisplayAmount <= newAmount)
        ) {
          currentDisplayAmount = newAmount;
          clearInterval(animationInterval);
        }
        setDisplayAmount(currentDisplayAmount);
      }, 50); // Плавное обновление каждые 50мс
    }, 1000);

    return () => clearInterval(intervalId);
  }, [displayAmount]);

  return (
    <div>
      <h3 >${Math.floor(displayAmount).toLocaleString()}</h3>
    </div>
  );
};

export default Counter;
