import React, { useState } from "react";

const Home = (): JSX.Element => {
  const [test, setTest] = useState(true);

  return (
    <div className="container">
      <h1 className="title">Home</h1>
      <p>Добро пожаловать в приложение Planning Poker!</p>
      <p>Это домашняя страница.</p>
      <p>Скоро здесь будет много всего интересного!..</p>
    </div>
  );
};

export default Home;
