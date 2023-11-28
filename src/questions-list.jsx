import React from "react";
import "./App.css";

const QuestionsArray = () => {
  const questionsArray = [
    {
      id: 1,
      question: "In which year did Singapore separate from Malaysia?",
      options: ["1957", "1965", "1971", "1980"],
      correctAnswer: "1965",
      prize: "$100",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
      prize: "$100",
    },
  ];

  return questionsArray;
};

export default QuestionsArray;
