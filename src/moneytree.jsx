import React, { useEffect, useState } from "react";
import "./App.css";

const MoneyTree = ({ currentLevel }) => {
  const moneyTreeList = [
    { level: 15, prize: "$1,000,000" },
    { level: 14, prize: "$500,000" },
    { level: 13, prize: "$250,000" },
    { level: 12, prize: "$125,000" },
    { level: 11, prize: "$64,000" },
    { level: 10, prize: "$32,000" },
    { level: 9, prize: "$16,000" },
    { level: 8, prize: "$8,000" },
    { level: 7, prize: "$4,000" },
    { level: 6, prize: "$2,000" },
    { level: 5, prize: "$1,000" },
    { level: 4, prize: "$500" },
    { level: 3, prize: "$300" },
    { level: 2, prize: "$200" },
    { level: 1, prize: "$100" },
  ];

  return (
    <ul className="money-tree">
      {moneyTreeList.map((item) => (
        <li key={item.level} className={currentLevel === item.level ? "money-tree-item active" : "money-tree-item"}>
          <span className="money-tree-level-num">{item.level}</span>
          <span className="money-tree-prize-amt">{item.prize}</span>
        </li>
      ))}
    </ul>
  );
};

export default MoneyTree;
