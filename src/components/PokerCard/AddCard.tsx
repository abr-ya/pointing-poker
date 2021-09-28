import React from "react";
import PokerCard from "./PokerCard";

interface IAddCardProps {
  handleEditClick: (event, cardValue) => void;
  handleCardClick: (coverImage: string, frontCard: boolean) => void;
}

const AddCard = ({
  handleCardClick,
  handleEditClick,
}: IAddCardProps): JSX.Element => {
  return (
    <PokerCard
      cardValue={"add"}
      cardSizeClass="bigCard"
      key={"add"}
      isLobbyCard
      handleCardClick={handleCardClick}
      handleEditClick={handleEditClick}
    />
  );
};

export default AddCard;
