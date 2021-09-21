import React from "react";
import Chat from "../components/Chat/Chat";
import RoomConnector from "../components/Chat/RoomConnector";

const About = (): JSX.Element => {
  console.log("!");
  const gameID = "TVasX8";

  return (
    <div className="container">
      <h1>About page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        a rem id quae officiis distinctio ipsa, quidem nisi amet eos?
      </p>
      <RoomConnector roomName={gameID} />
      <Chat />
    </div>
  );
};

export default About;
