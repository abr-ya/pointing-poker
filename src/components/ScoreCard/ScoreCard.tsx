import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import classes from "./ScoreCard.module.scss";

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 50,
    display: "flex",
    alignItems: "center",
  },
});

export interface IScoreCardProps {
  scoreText: string;
}

const ScoreCard = ({ scoreText }: IScoreCardProps): JSX.Element => {
  const cl = useStyles();

  return (
    <Grid item md={4}>
      <Card className={cl.card}>
        <div className={classes.container}>
          <div className={classes.info}>
            <Typography variant="h5" className={classes.scoreText}>
              {scoreText}
            </Typography>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default ScoreCard;
