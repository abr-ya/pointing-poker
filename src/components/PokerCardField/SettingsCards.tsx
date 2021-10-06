import React from "react";
import PokerCard from "../PokerCard/PokerCard";

interface ILobbyCoversProps {
  cardValues: (string | number)[];
  handleEditClick: (event, cardValue) => void;
  handleCardClick: (coverImage: string, frontCard: boolean) => void;
}

const SettingsCards = ({
  cardValues,
  handleEditClick,
  handleCardClick,
}: ILobbyCoversProps): JSX.Element => {
  const cards: JSX.Element[] = cardValues.map(
    (elem: string | number): JSX.Element => {
      return (
        <PokerCard
          cardValue={elem}
          cardSizeClass="bigCard"
          key={elem}
          isLobbyCard
          handleCardClick={handleCardClick}
          handleEditClick={handleEditClick}
        />
      );
    },
  );
  return <>{cards}</>;
};

export default SettingsCards;
