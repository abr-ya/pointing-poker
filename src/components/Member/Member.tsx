import React from "react";

import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import { makeStyles } from "@material-ui/core";
import classes from "./Member.module.scss";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  avatar: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
  },
});

export interface IMember {
  id: number;
  name: string;
  surname: string;
  position: string;
  avatar: string;
}

const Member = ({
  id,
  name,
  surname,
  position,
  avatar,
}: IMember): JSX.Element => {
  const cl = useStyles();
  return (
    <Grid item md={4}>
      <Card className={cl.card}>
        <div className={classes.container}>
          <Avatar src={avatar} className={cl.avatar}></Avatar>
          <div className={classes.info}>
            <Typography variant="h5" className={classes.name}>
              {name} {surname}
            </Typography>
            <Typography variant="body2" className={classes.position}>
              {position}
            </Typography>
          </div>
          <IconButton>
            <NotInterestedIcon fontSize="large" />
          </IconButton>
        </div>
      </Card>
    </Grid>
  );
};

export default Member;
