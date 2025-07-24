import React, { useEffect, useState } from "react";
import Die from "./Die";

function Main() {
  const [arr, setArr] = useState(generateRandomNumbers());
  const [rollCount, setRollCount] = useState(0);
  // generateRandomNumbers();

  function generateRandomNumbers() {
    const temp = [];
    for (let i = 0; i <= 9; i++) {
      temp.push(Math.ceil(Math.random() * 9));
    }
    return temp;
  }

  function rollDie() {
    setArr(generateRandomNumbers());
    setRollCount((prev) => prev + 1);
  }

  const dieElement = arr.map((value, index) => (
    <Die key={index} value={value} rollTrigger={rollCount} />
  ));

  return (
    <main className="gamesection">
      <div className="die-container">{dieElement}</div>
      <button type="button" className="rolldie-btn" onClick={rollDie}>
        Roll
      </button>
    </main>
  );
}

export default Main;
