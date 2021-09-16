import React, { useState } from "react";
import ButtonPrim from "../components/ButtonPrim/ButtonPrim";
import ModalLobby from "../components/Modal/ModalLobby";
import ModalCreateIssue from "../components/Modal/ModalCreateIssue";
import ModalConnectToLobby from "../components/Modal/ModalConnectToLobby";

import FileLoader from "../components/FileLoader/FileLoader";
import axios from "axios";

const API_FILE_USER = process.env.API_FILE_USER;

import { createStyles, Grid, makeStyles } from "@material-ui/core";
import PokerCard from "../components/PokerCard/PokerCard";
import MembersList from "../components/MembersList/MembersListContainer";

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

// const users = [
//   {
//     id: 1,
//     name: "David",
//     surname: "Blane",
//     position: "senior software engineer",
//     avatar:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/327px-Elon_Musk_2015.jpg",
//   },
//   {
//     id: 2,
//     name: "Dayana",
//     surname: "Ross",
//     position: "junior software engineer",
//     avatar:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/327px-Elon_Musk_2015.jpg",
//   },
//   {
//     id: 3,
//     name: "Daniel",
//     surname: "Horn",
//     position: "",
//     avatar:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/327px-Elon_Musk_2015.jpg",
//   },
//   {
//     id: 4,
//     name: "Mark",
//     surname: "Single",
//     position: "senior software engineer",
//     avatar: "",
//   },
//   {
//     id: 5,
//     name: "Jane",
//     surname: "Ring",
//     position: "software engineer",
//     avatar: "",
//   },
//   {
//     id: 6,
//     name: "Larry",
//     surname: "King",
//     position: "junior software engineer",
//     avatar: "",
//   },
//   {
//     id: 7,
//     name: "Fill",
//     surname: "",
//     position: "QA engineer",
//     avatar: "",
//   },
// ];


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

  // Connect to lobby
  const [connectedToLobby, setConnectedToLobby] = useState(false);

  const confirmFunc = () => {
    console.log("confirm Function");
    setConnectedToLobby(true);
  };

  const cancelFunc = () => {
    setConnectedToLobby(false);
  };


  const onSubmit = (data) => {
    // axios
    //   .post(API_FILE_USER, data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log("success!");
    //     console.log(response.data);
    //     console.log(response.status);
    //     console.log(response.statusText);
    //     console.log(response.headers);
    //     console.log(response.config);
    //     onSubmit(data);
    //   });
    console.log("onSubmit");
    console.log(data);
    setConnectedToLobby(false);
  };

  // ConnectToLobby end

  const fileLoadHandler = (name: string) => {
    console.log("загрузили файл", name, "(Components, fileLoadHandler)");
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
        onSubmit={onSubmit}
        isMaster={false}
        game={"12345"}
      />
      <h2>FileLoader</h2>
      <FileLoader succesHandler={fileLoadHandler} />

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
      <h2>Members</h2>
      <MembersList />
    </div>
  );
};

export default Components;
