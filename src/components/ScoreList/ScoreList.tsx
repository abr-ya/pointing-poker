import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import ScoreCard from "../ScoreCard/ScoreCard";

interface IScoreList {
  data: string[];
}

const ScoreList = ({ data }: IScoreList): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="stretch"
      justifyContent="center"
    >
      {data &&
        Array.isArray(data) &&
        data.map((score, index) => (
          <ScoreCard scoreText={score} key={`${score}${index}`} />
        ))}
    </Grid>
  );
};

export default ScoreList;
