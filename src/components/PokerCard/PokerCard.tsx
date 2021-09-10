import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import cn from "classnames";
import classes from "./PokerCard.module.scss";

interface IPokerCardProps {
  cardValue: string;
  cardSizeClass?: string;
  lobbyPokerCard?: boolean;
}

const PokerCard = ({
  cardValue,
  cardSizeClass = "bigCard",
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

  return (
    <Grid item>
      <div
        className={cn(classes.pokerCard, {
          [classes.lobbyCard]: lobbyPokerCard,
          [classes.addCard]: cardValue === "add",
          [classes.bigCard]: cardSizeClass === "bigCard",
          [classes.smallCard]: cardSizeClass !== "bigCard",
        })}
        onClick={() => handleCardClick(cardValue)}
      >
        {lobbyPokerCard && (
          <IconButton
            aria-label="edit card"
            onClick={(event) => handleEditClick(event, cardValue)}
            className={classes.editIcon}
          >
            <CreateTwoToneIcon />
          </IconButton>
        )}

        {cardValue != "add" ? (
          <p className={classes.pokerCardValue}>{cardValue}</p>
        ) : (
          <AddCircleOutlineIcon
            aria-label="add new card"
            fontSize="inherit"
            htmlColor="#6b6b6b"
            className={classes.addIcon}
          />
        )}
      </div>
    </Grid>
  );
};

export default PokerCard;
