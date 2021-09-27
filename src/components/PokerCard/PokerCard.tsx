import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import cn from "classnames";
import classes from "./PokerCard.module.scss";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";

interface IPokerCardProps {
  cardValue?: string | number;
  cardSizeClass?: string;
  lobbyPokerCard?: boolean;
  frontCard?: boolean;
  coverImage?: string;
  activeClassCard?: string;
  makeCoverActive?: (data: string) => void;
}

const PokerCard = ({
  cardValue = "",
  cardSizeClass = "bigCard",
  lobbyPokerCard = false,
  coverImage = "",
  frontCard = true,
  activeClassCard = "",
  makeCoverActive,
}: IPokerCardProps): JSX.Element => {
  const handleEditClick = (
    event: React.MouseEvent<HTMLElement>,
    cardValue: string | number,
  ): void => {
    event.stopPropagation();
    console.log("Button edit card ", cardValue);
  };

  const handleCardClick = (
    cardValue: string | number,
    isFront: boolean,
  ): void => {
    if (cardValue !== "add") {
      console.log("Card click", cardValue);
      if (!isFront) {
        makeCoverActive(String(cardValue));
      }
    } else {
      console.log("Add click");
    }
  };

  return (
    <Grid item className={classes.cardContainer}>
      <div
        className={cn(classes.pokerCard, {
          [classes.bigCard]: cardSizeClass === "bigCard",
          [classes.smallCard]: cardSizeClass !== "bigCard",
          [classes.activeCover]: activeClassCard === "active",
        })}
      >
        {frontCard ? (
          <div
            className={cn(classes.cardFront, {
              [classes.addCard]: cardValue === "add",
            })}
            onClick={() => handleCardClick(cardValue, true)}
          >
            {lobbyPokerCard && cardValue != "add" && (
              <IconButton
                aria-label="edit card"
                onClick={(event) => handleEditClick(event, cardValue)}
              >
                <CreateTwoToneIcon />
              </IconButton>
            )}

            {cardValue != "add" ? (
              cardValue != "coffee" ? (
                <p className={classes.pokerCardValue}>{cardValue}</p>
              ) : (
                <LocalCafeOutlinedIcon
                  aria-label="coffee card"
                  fontSize="inherit"
                  className={classes.pokerCardValue}
                />
              )
            ) : (
              <AddCircleOutlineIcon
                aria-label="add new card"
                fontSize="inherit"
                htmlColor="#6b6b6b"
                className={classes.addIcon}
              />
            )}
          </div>
        ) : (
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
