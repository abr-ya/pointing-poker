import { makeStyles, createStyles, Button, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Score } from "@material-ui/icons";
import React from "react";
import GameSummary from "../components/GameSummary/GameSummaryContainer";
import IssueList from "../components/IssueList/IssueListContainer";
import MembersList from "../components/MembersList/MembersListContainer";
import ScoreList from "../components/ScoreList/ScoreList";

const useStyles = makeStyles(() =>
  createStyles({
    page: {
      padding: "20px",
    },
    bold: {
      fontWeight: "bold",
    },
    input: {
      display: "none",
    },
    field: {
      borderRight: "1px solid rgba(0, 0, 0, 0.5)",
      padding: "20px",
    },
    flexGrow: {
      flexGrow: 1,
    },
  }),
);

interface IGameProps {
  isMaster: boolean;
}

const Game = ({ isMaster }: IGameProps): JSX.Element => {
  const classes = useStyles();

  const handlerExitGame = (): void => {
    console.log("Exit Game");
  };

  const handlerRunRound = (): void => {
    console.log("Run round");
  };

  const handlerDeleteUser = (userID: string) => {
    console.log("delete user UserID =", userID);
  };

  const score = ["In progress", "In progress", "In progress", "In progress"];

  return (
    <Container maxWidth={false} disableGutters className={classes.flexGrow}>
      <Grid container direction="row" wrap="nowrap">
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-start"
          className={classes.field}
        >
          <Grid item>
            <GameSummary handlerExitGame={handlerExitGame} />
          </Grid>
          <Grid item container direction="row" spacing={4}>
            <Grid item>
              <Typography
                variant="h5"
                component="h3"
                align="center"
                className={classes.bold}
                paragraph
              >
                Issues:
              </Typography>
              <IssueList />
            </Grid>
            <Grid item>
              {isMaster && (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handlerRunRound}
                >
                  Run round
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-end"
          wrap="nowrap"
          spacing={6}
          className={classes.page}
        >
          <Grid item>
            <Typography
              variant="h5"
              component="h3"
              align="center"
              className={classes.bold}
              paragraph
            >
              Score:
            </Typography>
            <ScoreList data={score} />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="h3"
              align="center"
              className={classes.bold}
              paragraph
            >
              Players:
            </Typography>
            <MembersList handlerDeleteUser={handlerDeleteUser} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Game;
