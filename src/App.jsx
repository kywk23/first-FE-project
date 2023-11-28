import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MoneyTree from "./moneytree";
import QuestionsArray from "./questions-list";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
        <MoneyTree />
      </div>
    </>
  );
}

export default App;
