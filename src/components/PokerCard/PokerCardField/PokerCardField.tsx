import React from "react";
import PokerCard from "../PokerCard";
import "./PokerCardField.css";

const PokerCardField = (): JSX.Element => {
  const makeCardValues = (): number[] => {
    const fibArr: number[] = [];
    let temp = 0;
    let prev = 1;
    let curr = 2;
    fibArr.push(temp, prev, curr);
    console.log(fibArr);
    while (temp < 89) {
      temp = prev + curr;
      fibArr.push(temp);
      prev = curr;
      curr = temp;
    }
    console.log(fibArr);
    return fibArr;
  };

  const cards: JSX.Element[] = makeCardValues().map(
    (elem: number): JSX.Element => {
      return <PokerCard cardValue={elem} key={elem} />;
    },
  );

  return <div className="pokerCardField">{cards}</div>;
};

export default PokerCardField;

// Карточки представляют собой последовательность чисел Фибоначчи: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.
