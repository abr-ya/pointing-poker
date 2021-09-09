import Grid from "@material-ui/core/Grid/Grid";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import React from "react";
import "./PokerCard.scss";

interface IPokerCardProps {
  cardValue: number;
  cardSizeClass: string;
}

const PokerCard = ({
  cardValue,
  cardSizeClass = "",
}: IPokerCardProps): JSX.Element => {
  return (
    <Grid item>
      <div className={`pokerCard ${cardSizeClass}`}>
        <p className="pokerCardValue">{cardValue}</p>
      </div>
    </Grid>
  );
};

export default PokerCard;
