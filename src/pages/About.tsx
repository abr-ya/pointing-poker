import React from "react";
import Chat from "../components/Chat/Chat";

interface IAbout {
  gameID: string;
}

const About = ({ gameID }: IAbout): JSX.Element => {
  const tempUserName = "PokerPlayer";
  console.log("About - запустим чат", gameID, tempUserName);

  return (
    <div className="container">
      <h1>About page</h1>
      <p>Здесь будет About page. Но пока что здесь чат.</p>
      <Chat username={tempUserName} />
    </div>
  );
};

export default About;
