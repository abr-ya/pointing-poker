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
    width: 200,
  },
});

const Main = (): JSX.Element => {
  const cl = useStyles();
  return (
    <div className="container">
      <Paper elevation={3} className={classes.paper}>
        <Grid container direction="column" md={12} spacing={10}>
          <Grid
            item
            container
            direction="row"
            md={12}
            justifyContent="center"
            className={cl.logo}
          >
            <img alt="Logo" src="images/Logo.png" className={classes.img} />
            <div className={classes.title}>
              <h1 className={classes.title__string1}>Poker</h1>
              <h1 className={classes.title__string2}>Planning</h1>
            </div>
          </Grid>
          <Grid
            item
            container
            md={12}
            spacing={6}
            direction="column"
            className={cl.content}
          >
            <Grid item container md={6} spacing={6}>
              <Grid item md={6}>
                <Typography variant="h5" className={classes.green}>
                  Start your planning:
                </Typography>
              </Grid>

              <Grid
                container
                item
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
              >
                <Grid item md={3}>
                  <Typography variant="body1" className={cl.create}>
                    Create session:
                  </Typography>
                </Grid>
                <Grid item md={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={cl.btn}
                    onClick={() => console.log("clicked!")}
                  >
                    Start your game
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container md={6} direction="column" spacing={6}>
              <Grid item md={6}>
                <Typography variant="h5" className={classes.green}>
                  OR:
                </Typography>
              </Grid>
              <Grid item container md={6}>
                <Typography variant="body1">
                  Connect to lobby by{" "}
                  <span className={classes.green}>URL:</span>
                </Typography>
              </Grid>

              <Grid container item md={6}>
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
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Main;
