import { useEffect, useState, useRef } from "react";
import Die from "./Die";
import ShortUniqueId from "short-unique-id";
import Confetti from "react-confetti";
const uid = new ShortUniqueId({ length: 5 });

function Main() {
  // const [arr, setArr] = useState(generateRandomNumbers());
  const [rollCount, setRollCount] = useState(0);
  const [dieInfo, setDieInfo] = useState(() => generateRandomNumbers());
  // generateRandomNumbers();

  function generateRandomNumbers() {
    const temp = [];
    for (let i = 0; i <= 9; i++) {
      const currObj = {
        id: uid.rnd(),
        value: Math.ceil(Math.random() * 6),
        isFixed: false,
      };
      temp.push(currObj);
    }
    // console.log(temp);
    return temp;
  }

  const checkWin =
    dieInfo.every((dice) => dice.isFixed) &&
    dieInfo.every((dice) => dice.value === dieInfo[0].value);

  // if (checkWin) {
  //   console.log("Won!! \n New Game ?");
  // }

  function rollDie(event) {
    console.log(event.target.innerText);
    const currText = event.target.innerText;
    if (currText === "New Game!!") {
      setDieInfo(generateRandomNumbers());
      return;
    }
    setDieInfo((dice) => {
      return dice.map((dice) => {
        return dice.isFixed
          ? { ...dice }
          : {
              ...dice,
              value: Math.ceil(Math.random() * 6),
            };
      });
    });

    setRollCount((prev) => prev + 1);
  }

  function freeze(id) {
    setDieInfo((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, isFixed: !elem.isFixed } : elem
      )
    );
  }

  // function startNewGame() {
  //   console.log("new game started");
  //   setDieInfo(generateRandomNumbers());
  // }

  const dieElement = dieInfo.map((diceInfo) => (
    <Die
      key={diceInfo.id}
      id={diceInfo.id}
      value={diceInfo.value}
      isFixed={diceInfo.isFixed}
      freeze={freeze}
      rollTrigger={rollCount}
    />
  ));

  return (
    <main className="gamesection">
      {checkWin ? <Confetti /> : null}
      <div className="die-container">{dieElement}</div>
      <button type="button" className="rolldie-btn" onClick={rollDie}>
        {checkWin ? "New Game!!" : "Roll"}
      </button>
    </main>
  );
}

export default Main;
