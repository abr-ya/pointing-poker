import React from "react";
import classes from "./PokerCard.module.scss";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";

interface ICardValue {
  cardValue: string | number;
}

const CardValue = ({ cardValue }: ICardValue): JSX.Element => {
  const isNumber: boolean = typeof cardValue === "number";
  return (
    <>
      {isNumber && <p className={classes.pokerCardValue}>{cardValue}</p>}
      {!isNumber && cardValue === "coffee" && (
        <LocalCafeOutlinedIcon
          aria-label="coffee card"
          fontSize="inherit"
          className={classes.pokerCardValue}
        />
      )}
      {!isNumber && cardValue === "?" && (
        <p className={classes.pokerCardValue}>{cardValue}</p>
      )}
      {!isNumber && cardValue === "add" && (
        <AddCircleOutlineIcon
          aria-label="add new card"
          fontSize="inherit"
          htmlColor="#6b6b6b"
          className={classes.addIcon}
        />
      )}
    </>
  );
};

export default CardValue;
