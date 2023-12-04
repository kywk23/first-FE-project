import React, { useState } from "react";
import getRandomQuestion from "./randomquestion";

const getRandomOptionsToRemove = (options) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options.splice(randomIndex, 1);
};

const LifeLineFunctions = ({ currentLevel }) => {
  const [usedLifelines, setUsedLifelines] = useState({
    fiftyFifty: false,
    phoneAFriend: false,
  });

  const phoneAFriend = () => {
    alert("The number you just dialed is currently unavailable. Please try again later.");
    setUsedLifelines((prev) => ({ ...prev, phoneAFriend: true }));
  };

  const fiftyFifty = () => {
    const currentQuestion = getRandomQuestion(currentLevel);
    if (currentQuestion) {
      const correctAnswerIndex = currentQuestion.options.indexOf(currentQuestion.correctAnswer);
      const wrongOptions = currentQuestion.options.filter((_, index) => index !== correctAnswerIndex);
      const removedOptions = getRandomOptionsToRemove(wrongOptions);
      const updatedOptions = currentQuestion.options.filter((option) => !removedOptions.includes(option));
      onQuestionUpdated({ ...currentQuestion, options: updatedOptions });
      setUsedLifelines((prev) => ({ ...prev, fiftyFifty: true }));
    }
  };

  const onQuestionUpdated = (updatedQuestion) => {
    console.log("Question Updated:", updatedQuestion);
  };

  return {
    phoneAFriend,
    usedLifelines,
    fiftyFifty,
  };
};

export default LifeLineFunctions;
