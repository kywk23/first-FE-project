import React, { useEffect, useState } from "react";
import { Button, Container, Alert } from "react-bootstrap";
import MoneyTree from "./moneytree";
import QuestionsArrayList from "./questions-list";
import getRandomQuestion from "./randomquestion.jsx";
import CountDownTimer from "./countdown-timer.jsx";
import LifeLineFunctions from "./lifeline.jsx";

function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [winLose, setWinLose] = useState(null);
  const [losingMessage, setLosingMessage] = useState("");
  const randomQuestion = getRandomQuestion(currentLevel);

  useEffect(() => {
    console.log({ currentLevel, winLose, losingMessage });
  }, [currentLevel, winLose, losingMessage]);

  const handleReset = () => {
    setWinLose("lose");
    console.log("Time's up! You lose.");
    setLosingMessage("Time's up! You lose.");
  };

  const resetGame = () => {
    setCurrentLevel(1);
    setWinLose(null);
    setLosingMessage("");
    // window.location.reload();
  };

  const handleOptionClick = (option) => {
    if (randomQuestion) {
      if (currentLevel + 1 === 16) {
        setWinLose("win");
        console.log(`User beats the game`);
      }
      if (option === randomQuestion.correctAnswer) {
        setCurrentLevel(currentLevel + 1);
      } else {
        console.log(`lose`);
        if (currentLevel < 5) {
          setLosingMessage("You lost - That was fast ?!");
        } else if (currentLevel <= 10) {
          setLosingMessage("You lost and you walk away with $1,000 !");
        } else {
          setLosingMessage("You lost and you walk away with $32,000 !");
        }
        setWinLose("lose");
      }
    }
  };

  return (
    <>
      <div className="app">
        <div className="logo">
          <img src="WWTBAMUS2020Logo.png" alt="WWTBAM image" />

          <div className="lifeline">
            <ul className="lifeline-buttons">
              <li>
                <Button variant="outline-info">50:50</Button>
              </li>
              <li>
                <Button variant="outline-info">Phone a Friend</Button>
              </li>
              <li>
                <Button variant="outline-info">Audience</Button>
              </li>
            </ul>
          </div>

          <div className="moneytree">
            <MoneyTree currentLevel={currentLevel} />
          </div>

          <Container>
            {/* <h2>Current level: {currentLevel}</h2> */}
            {/* <CountDownTimer onFinish={handleReset} setWinLose={setWinLose} /> */}

            {winLose === "win" && (
              <>
                <Alert variant="success" style={{ fontSize: "2em", fontWeight: "bold" }}>
                  Congratulations! You won $1,000,000 !!
                </Alert>
                <Button onClick={resetGame}>Reset</Button>
              </>
            )}

            {winLose === "lose" ? (
              <>
                <Alert variant="danger">{losingMessage}</Alert>
                <Button onClick={resetGame}>Reset</Button>
              </>
            ) : (
              <CountDownTimer onFinish={handleReset} setWinLose={setWinLose} />
            )}

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
        </div>
      </div>
    </>
  );
}

export default App;
