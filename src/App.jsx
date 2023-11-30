import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import MoneyTree from "./moneytree";
import QuestionsArrayList from "./questions-list";
import getRandomQuestion from "./randomquestion.jsx";

("use strict");

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [winLose, setWinLose] = useState(null);
  // const [remainingTime, setRemainingTime] = useState(60);

  const randomQuestion = getRandomQuestion(currentLevel);
  const resetGame = () => {
    setCurrentLevel(1);
    setWinLose(null);
  };

  // useEffect(() => {
  //   // Decrease the remaining time every second
  //   const timer = setInterval(() => {
  //     setRemainingTime((prevTime) => prevTime - 1);
  //   }, 1000);

  //   // Clean up the timer when the component unmounts
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (remainingTime === 0) {
  //     alert("times up");
  //   }
  // }, [remainingTime]);

  const handleOptionClick = (option) => {
    if (randomQuestion) {
      if (option === randomQuestion.correctAnswer) {
        setCurrentLevel(currentLevel + 1);
      }
      if (currentLevel < 5 && option !== randomQuestion.correctAnswer) {
        alert("so fast lose");
        resetGame();
      } else if (currentLevel > 5 && currentLevel <= 10 && option !== randomQuestion.correctAnswer) {
        alert("you lost and you walk away with $1,000");
        resetGame();
      } else if (currentLevel > 10 && option !== randomQuestion.correctAnswer) {
        alert("you lost and you walk away with $32,000");
        resetGame();
      }
      if (currentLevel + 1 === 16) {
        setWinLose("win");
        console.log(`user beats the game`);
      }
    }
  };

  return (
    <>
      <div className="app">
        <div className="logo">
          <img src="WWTBAMUS2020Logo.png" alt="WWTBAM image" />
          {/* <div className="main"> */}
          <div className="lifeline">
            <ul className="lifeline-buttons">
              <li>
                <Button variant="Success">50:50</Button>
              </li>
              <li>
                <Button>Phone a Friend</Button>
              </li>
              <li>
                <Button>Audience</Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="moneytree">
          <MoneyTree currentLevel={currentLevel} />
        </div>

        <Container>
          <h2>Current level: {currentLevel}</h2>
          <div className="questions">
            {randomQuestion && randomQuestion.level === currentLevel && (
              <div key={randomQuestion.id} className="question">
                <h2>{randomQuestion.question}</h2>
                <ul className="options">
                  {randomQuestion.options.map((option, i) => (
                    <Button variant="info" key={i} onClick={() => handleOptionClick(option)}>
                      {option}
                    </Button>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
