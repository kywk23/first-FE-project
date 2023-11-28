import "./App.css";
import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import MoneyTree from "./moneytree";
import questions from "./questions";

function App() {
  return (
    <>
      <div className="section">
        <div className="logo">
          <img src="WWTBAMUS2020Logo.png" alt="WWTBAM image"></img>
        </div>
        {/* <h1>Who wants to be a Millionaire</h1> */}
        <div className="lifeline">
          <ul className="lifeline-buttons">
            <li>
              <Button variant="success">50:50</Button>
            </li>
            <li>
              <Button variant="outline-primary">Phone a Friend</Button>
            </li>
            <li>
              <Button variant="outline-primary">Audience</Button>
            </li>
          </ul>
        </div>
        <div className="moneytree">
          <MoneyTree />
        </div>
      </div>
    </>
  );
}

export default App;
