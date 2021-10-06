import { createStyles, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import AddCard from "../PokerCard/AddCard";
import LobbyCovers from "./LobbyCovers";
import SettingsCards from "./SettingsCards";

interface IPokerCardFieldProps {
  cardValues?: (string | number)[];
  frontCard?: boolean;
  coverImage?: string[];
  isLobbyPage: boolean;
  cover?: string;
  saveActive?: (data: string) => void;
}

const PokerCardField = ({
  cardValues,
  isLobbyPage,
  frontCard = true,
  cover,
  saveActive,
  coverImage,
}: IPokerCardFieldProps): JSX.Element => {
  const useStyles = makeStyles(() =>
    createStyles({
      pokerCardContainer: {
        width: "100%",
        marginBottom: "10px",
        marginLeft: "5px",
      },
    }),
  );

  const classes = useStyles();

  const content = isLobbyPage ? "flex-start" : "center";

  const [activeCover, setActive] = useState<string>(cover);

  const makeCoverActive = (data: string): void => {
    setActive(data);
    saveActive(data);
  };

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
    <Grid
      className={classes.pokerCardContainer}
      container
      spacing={6}
      justifyContent={content}
      alignItems="center"
      wrap="wrap"
    >
      {frontCard && (
        <SettingsCards
          cardValues={cardValues}
          handleCardClick={handleCardClick}
          handleEditClick={handleEditClick}
        />
      )}
      {!frontCard && (
        <LobbyCovers
          coverImage={coverImage}
          handleCardClick={handleCardClick}
          handleEditClick={handleEditClick}
          activeCover={activeCover}
        />
      )}
      {isLobbyPage && (
        <AddCard
          handleCardClick={handleCardClick}
          handleEditClick={handleEditClick}
        />
      )}
    </Grid>
  );
};

export default PokerCardField;

// Карточки представляют собой последовательность чисел Фибоначчи: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.
