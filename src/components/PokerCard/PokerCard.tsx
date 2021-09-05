import React from "react";
import "./PokerCard.css";

interface PokerCardprops {
  cardValue: number;
}

const PokerCard = ({ cardValue }: PokerCardprops): JSX.Element => {
  return (
    <div className="card">
      <p className="cardValue">{cardValue}</p>
    </div>
  );
};

export default PokerCard;
