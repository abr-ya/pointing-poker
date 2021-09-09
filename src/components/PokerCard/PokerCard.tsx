import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";
import "./PokerCard.scss";

interface IPokerCardProps {
  cardValue: string;
  cardSizeClass: string;
  lobbyPokerCard?: boolean;
}

const PokerCard = ({
  cardValue,
  cardSizeClass = "",
  lobbyPokerCard = false,
}: IPokerCardProps): JSX.Element => {
  const handleEditClick = (
    event: React.MouseEvent<HTMLElement>,
    cardValue: string,
  ): void => {
    event.stopPropagation();
    console.log("Button edit card ", cardValue);
  };

  const handleCardClick = (cardValue: string): void => {
    if (cardValue !== "add") {
      console.log("Card click", cardValue);
    } else {
      console.log("Add click");
    }
  };

  const isLobbyCard = (): string => {
    return lobbyPokerCard ? "lobbyCard" : "";
  };

  const isAddCard = (cardValue: string): string => {
    return cardValue === "add" ? "addCard" : "";
  };

  return (
    <Grid item>
      <div
        className={`pokerCard ${cardSizeClass} ${isLobbyCard()}
          ${isAddCard(cardValue)}`}
        onClick={() => handleCardClick(cardValue)}
      >
        {lobbyPokerCard && (
          <IconButton
            aria-label="edit card"
            onClick={(event) => handleEditClick(event, cardValue)}
            className="iconEditCard"
          >
            <CreateTwoToneIcon />
          </IconButton>
        )}
        <p className="pokerCardValue">
          {cardValue != "add" ? (
            cardValue
          ) : (
            <AddCircleOutlineIcon
              aria-label="add new card"
              fontSize="inherit"
              htmlColor="#6b6b6b"
            />
          )}
        </p>
      </div>
    </Grid>
  );
};

export default PokerCard;
