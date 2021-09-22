import React from "react";
import Chat from "../components/Chat/Chat";
import RoomConnector from "../components/Chat/RoomConnector";

const About = (): JSX.Element => {
  const tempGameID = "TVasX8";
  const tempUserName = "PokerPlayer";

  return (
    <div className="container">
      <h1>About page</h1>
      <p>Здесь будет About page. Но пока что здесь чат.</p>
      <RoomConnector roomName={tempGameID} />
      <Chat username={tempUserName} />
    </div>
  );
};

export default About;
