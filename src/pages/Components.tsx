import React, { useState } from "react";
import ButtonPrim from "../components/ButtonPrim/ButtonPrim";
import ModalLobby from "../components/Modal/ModalLobby";
import ModalCreateIssue from "../components/Modal/ModalCreateIssue";
import ModalConnectToLobby from "../components/Modal/ModalConnectToLobby";
import FileLoader from "../components/FileLoader/FileLoader";
import axios from "axios";

const API_FILE_USER = process.env.API_FILE_USER;

const Components = (): JSX.Element => {
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

  return (
    <div className="container">
      <h1>Components page</h1>
      <p>
        Это может быть страница для проверки наших компонентов. И не наших
        тоже.))
      </p>
      <h2>Кастомная кнопка</h2>
      <ButtonPrim text="Я кнопка" handler={butonClickHandler} />
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
    </div>
  );
};

export default Components;
