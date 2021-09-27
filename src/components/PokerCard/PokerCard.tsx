import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import cn from "classnames";
import classes from "./PokerCard.module.scss";
import CardValue from "./CardValue";

interface IPokerCardProps {
  cardValue?: string | number;
  cardSizeClass?: string;
  isLobbyCard?: boolean;
  frontCard?: boolean;
  coverImage?: string;
  activeClassCard?: string;
  handleEditClick: (event, cardValue) => void;
  handleCardClick: (coverImage: string, frontCard: boolean) => void;
}

const PokerCard = ({
  cardValue = "",
  cardSizeClass = "bigCard",
  isLobbyCard = false,
  coverImage = "",
  frontCard = true,
  activeClassCard = "",
  handleEditClick,
  handleCardClick,
}: IPokerCardProps): JSX.Element => {
  return (
    <Grid item className={classes.cardContainer}>
      <div
        className={cn(classes.pokerCard, {
          [classes.bigCard]: cardSizeClass === "bigCard",
          [classes.smallCard]: cardSizeClass !== "bigCard",
          [classes.activeCover]: activeClassCard === "active",
        })}
      >
        {frontCard && (
          <div
            className={cn(classes.cardFront, {
              [classes.addCard]: cardValue === "add",
            })}
            onClick={() => handleCardClick(cardValue, true)}
          >
            {isLobbyCard && cardValue != "add" && (
              <IconButton
                aria-label="edit card"
                onClick={(event) => handleEditClick(event, cardValue)}
              >
                <CreateTwoToneIcon />
              </IconButton>
            )}
            <CardValue cardValue={cardValue} />
          </div>
        )}
        {!frontCard && (
          <div
            className={classes.cardBack}
            style={{
              // backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})`
              backgroundImage: `url(/covers/${coverImage})`,
            }}
            onClick={() => handleCardClick(coverImage, false)}
          ></div>
        )}
      </div>
    </Grid>
  );
};

export default PokerCard;
