import { createStyles, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import AddCard from "../PokerCard/AddCard";
import PokerCard from "../PokerCard/PokerCard";

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

  const renderCards = (): JSX.Element[] => {
    const cards: JSX.Element[] = cardValues.map(
      (elem: string | number): JSX.Element => {
        return (
          <PokerCard
            cardValue={elem}
            cardSizeClass="bigCard"
            key={elem}
            lobbyPokerCard
          />
        );
      },
    );
    return cards;
  };

  const makeCoverActive = (data: string): void => {
    setActive(data);
    saveActive(data);
  };

  const renderCovers = (): JSX.Element[] => {
    const covers: JSX.Element[] = coverImage.map(
      (elem: string): JSX.Element => {
        return (
          <PokerCard
            cardSizeClass="bigCard"
            key={elem}
            frontCard={false}
            coverImage={elem}
            activeClassCard={`${elem === activeCover ? "active" : ""}`}
            makeCoverActive={makeCoverActive}
          />
        );
      },
    );
    return covers;
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
      {frontCard && renderCards()}
      {!frontCard && renderCovers()}
      {isLobbyPage && <AddCard />}
    </Grid>
  );
};

export default PokerCardField;

// Карточки представляют собой последовательность чисел Фибоначчи: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.
