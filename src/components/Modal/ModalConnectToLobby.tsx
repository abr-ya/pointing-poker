import React from "react";

import ButtonPrim from "../ButtonPrim/ButtonPrim";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles({
  switcher: {
    justifyContent: "flex-end",
  },
  btn: {
    display: "inline-block",
    marginTop: 35,
    marginLeft: 20,
    maxWidth: 100,
  },
  avatar: {
    width: 100,
    height: 100,
  },
});

interface IModalConnectToLobby {
  connectedToLobby: boolean;
  confirmFunc: () => void;
  cancelFunc: () => void;
}

const ModalConnectToLobby = ({
  connectedToLobby,
  confirmFunc,
  cancelFunc,
}: IModalConnectToLobby): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      <ButtonPrim text="Connect to lobby" handler={confirmFunc}></ButtonPrim>
      <Dialog
        open={connectedToLobby}
        onClose={cancelFunc}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{"Connect to lobby"}</DialogTitle>

        <DialogContent>
          <form>
            <FormGroup className={classes.switcher} aria-label="position" row>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Connect as Observer"
                labelPlacement="start"
              />
            </FormGroup>
            <TextField
              label="Your first name:"
              variant="outlined"
              color="secondary"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Your last name:"
              variant="outlined"
              color="secondary"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Your job position:"
              variant="outlined"
              color="secondary"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Choose file"
              variant="outlined"
              color="secondary"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              component="label"
              className={classes.btn}
            >
              Button
              <input type="file" hidden />
            </Button>
            <Avatar
              className={classes.avatar}
              alt="User"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/327px-Elon_Musk_2015.jpg"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <ButtonPrim text="Confirm" handler={confirmFunc}></ButtonPrim>
          <ButtonPrim text="Cancel" handler={cancelFunc}></ButtonPrim>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalConnectToLobby;
