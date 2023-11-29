import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MoneyTree from "./moneytree";
import QuestionsArrayList from "./questions-list";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [restartGame, setRestartGame] = useState(false);

  const handleOptionClick = (option) => {
    const currentQuestion = QuestionsArrayList[currentQuestionIndex];
    // const renderedQuestion = QuestionsArrayList.filter((question) => question.level === currentLevel)[0];
    if (option === renderedQuestion.correctAnswer) {
      setCurrentLevel(currentLevel + 1);
    } else {
      alert("Wrong answer");
      setRestartGame(true);
    }
  };

  // const randomQuestionIndex = (level) => {
  //   const levelQuestions = QuestionsArrayList.filter((question) => question.level === level);
  //   const randomIndex = Math.floor(Math.random() * levelQuestions.length);
  //   return randomIndex;
  // };

  //states =
  // capture statue of user's answer. validate that state against question array: element
  //useState to capture information - when user clicks.
  //useEffect to check on answers - trigger an action based on change in state

  return (
    <>
      <div className="logo">
        <img src="WWTBAMUS2020Logo.png" alt="WWTBAM image" />
      </div>

      <div className="lifeline">
        <ul className="lifeline-buttons">
          <li>
            <Button>50:50</Button>
          </li>
          <li>
            <Button>Phone a Friend</Button>
          </li>
          <li>
            <Button>Audience</Button>
          </li>
        </ul>
      </div>

      <div className="moneytree">
        <MoneyTree currentLevel={currentLevel} />
      </div>

      <div className="questions">
        {QuestionsArrayList.map((question) => {
          if (question.level === currentLevel) {
            return (
              <div key={question.id} className="question">
                <h2>{question.question}</h2>
                <ul className="options">
                  {question.options.map((option, i) => (
                    <Button key={i} onClick={() => handleOptionClick(option)}>
                      {option}
                    </Button>
                  ))}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default App;
