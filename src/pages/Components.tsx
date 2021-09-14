import React, { useState } from "react";
import ButtonPrim from "../components/ButtonPrim/ButtonPrim";
import ModalLobby from "../components/Modal/ModalLobby";
import ModalCreateIssue from "../components/Modal/ModalCreateIssue";
import ModalConnectToLobby from "../components/Modal/ModalConnectToLobby";
import { createStyles, Grid, makeStyles } from "@material-ui/core";
import PokerCard from "../components/PokerCard/PokerCard";

const cardValues = [
  "0",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "21",
  "34",
  "55",
  "89",
  "add",
];

const Components = (): JSX.Element => {
  const useStyles = makeStyles(() =>
    createStyles({
      pokerCardContainer: {
        width: "100%",
      },
    }),
  );

  const classes = useStyles();

  const butonClickHandler = () => {
    console.log("Это был клик по кнопке!");
  };
  const [open, setOpen] = useState(false);
  const [issueIsOpen, setIssueOpen] = useState(false);
  const [connectedToLobby, setConnectedToLobby] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openIssue = () => {
    setIssueOpen(true);
  };

  const closeIssue = () => {
    setIssueOpen(false);
  };

  const confirmFunc = () => {
    setConnectedToLobby(true);
  };

  const cancelFunc = () => {
    setConnectedToLobby(false);
  };

  const cards: JSX.Element[] = cardValues.map((elem: string): JSX.Element => {
    return (
      <PokerCard
        cardValue={elem}
        cardSizeClass="smallPokerCard"
        key={elem}
        lobbyPokerCard
      />
    );
  });

  return (
    <div className="container">
      <h1>Components page</h1>
      <p>
        Это может быть страница для проверки наших компонентов. И не наших
        тоже.))
      </p>
      <h2>Кастомная кнопка</h2>
      <ButtonPrim text="Я кнопка" handler={butonClickHandler} />
      <ButtonPrim
        text="Я доп. кнопка"
        handler={butonClickHandler}
        isAdditional
      />
      <h2>Модальное окно (Kick Player)</h2>
      <ModalLobby
        name="David Blane"
        open={open}
        yesFunc={handleClickOpen}
        noFunc={handleClose}
      />
      <h2>Модальное окно (Create Issue)</h2>
      <ModalCreateIssue
        issueIsOpen={issueIsOpen}
        yesFunc={openIssue}
        noFunc={closeIssue}
      />
      <h2>Модальное окно (Connect to lobby)</h2>
      <ModalConnectToLobby
        connectedToLobby={connectedToLobby}
        confirmFunc={confirmFunc}
        cancelFunc={cancelFunc}
      />
      <h2>Poker Cards</h2>
      <Grid
        className={classes.pokerCardContainer}
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        {cards}
      </Grid>
    </div>
  );
};

export default Components;
