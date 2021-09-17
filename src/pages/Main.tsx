import React from "react";

import classes from "./Main.module.scss";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ButtonGroup } from "react-bootstrap";

const useStyles = makeStyles({
  logo: {
    marginTop: 50,
  },
  btn: {
    width: 200,
  },
  content: {
    marginLeft: 20,
  },
  create: {
    width: 180,
  },
});

const Main = (): JSX.Element => {
  const cl = useStyles();
  return (
    <div className="container">
      <Paper elevation={3} className={classes.paper}>
        <Grid container direction="column" spacing={10} alignItems="center">
          <Grid
            item
            container
            direction="row"
            md={12}
            xs={6}
            justifyContent="center"
            className={cl.logo}
          >
            <img alt="Logo" src="images/Logo.png" className={classes.img} />
            <div className={classes.title}>
              <h1 className={classes.title__string1}>Poker</h1>
              <h1 className={classes.title__string2}>Planning</h1>
            </div>
          </Grid>
          <Grid item md={12} xs={6}>
            <h3 className={classes.green}>Start your planning:</h3>
            <ButtonGroup>
              <Typography variant="body1" className={cl.create}>
                Create session:
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={cl.btn}
                onClick={() => console.log("clicked!")}
              >
                Start your game
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item md={12} xs={6}>
            <h3 className={classes.green}>OR:</h3>
            <Typography variant="body1">
              Connect to lobby by <span className={classes.green}>URL:</span>
            </Typography>
            <ButtonGroup>
              <input></input>
              <Button
                variant="contained"
                color="primary"
                className={cl.btn}
                onClick={() => console.log("clicked!")}
              >
                Connect
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Main;
