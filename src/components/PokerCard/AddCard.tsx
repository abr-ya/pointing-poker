import React from "react";
import PokerCard from "./PokerCard";

const AddCard = (): JSX.Element => {
  return (
    <PokerCard
      cardValue={"add"}
      cardSizeClass="bigCard"
      key={"add"}
      lobbyPokerCard
    />
  );
};

export default AddCard;
