import React from "react";
import "./App.css";
//Template:
//   id: ,
//   question: ,
//   options: [],
//   correctAnswer: ,
//   level: ,
// track current question user is on
// track answer user put in:
// based off answers, win-lose scenarios

const QuestionsArrayList = [
  {
    id: 1,
    question: "In which year did Singapore separate from Malaysia?",
    options: ["1957", "1965", "1971", "1980"],
    correctAnswer: "1965",
    level: 1,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    level: 1,
  },
  {
    id: 3,
    question: "who train pikachu",
    options: ["me", "you", "ash", "brock"],
    correctAnswer: "you",
    level: 1,
  },
  {
    id: 4,
    question: "Who succeeded Lee Kuan Yew as the Prime Minister of Singapore?",
    options: ["Goh Chok Tong", "Tony Tan Keng Yam", "Tharman Shanmugaratnam", "Lee Hsien Loong"],
    correctAnswer: "Lee Hsien Loong",
    level: 1,
  },
];

export default QuestionsArrayList;
