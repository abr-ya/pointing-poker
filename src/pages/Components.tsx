import React from "react";
import ButtonPrim from "../components/ButtonPrim/ButtonPrim";

const Components = (): JSX.Element => {
  const butonClickHandler = () => {
    console.log("Это был клик по кнопке!");
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
    </div>
  );
};

export default Components;
