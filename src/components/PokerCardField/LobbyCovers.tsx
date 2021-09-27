import React from "react";
import PokerCard from "../PokerCard/PokerCard";

interface ILobbyCoversProps {
  coverImage: string[];
  handleEditClick: (event, cardValue) => void;
  handleCardClick: (coverImage: string, frontCard: boolean) => void;
  activeCover: string;
}

const LobbyCovers = ({
  coverImage,
  handleEditClick,
  handleCardClick,
  activeCover,
}: ILobbyCoversProps): JSX.Element => {
  const covers: JSX.Element[] = coverImage.map((elem: string): JSX.Element => {
    return (
      <PokerCard
        cardSizeClass="bigCard"
        key={elem}
        frontCard={false}
        coverImage={elem}
        activeClassCard={`${elem === activeCover ? "active" : ""}`}
        handleCardClick={handleCardClick}
        handleEditClick={handleEditClick}
      />
    );
  });
  return <>{covers}</>;
};

export default LobbyCovers;
