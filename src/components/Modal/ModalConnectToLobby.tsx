import React, { useState } from "react";
import ButtonPrim from "../ButtonPrim/ButtonPrim";
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
import FileLoader from "../FileLoader/FileLoader";

const API_FILE = process.env.API_FILE;

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
  const [img, setImg] = useState(null);
  const [imgError, setImgError] = useState(false);

  const cancelHandler = () => {
    setImg(null);
    cancelFunc();
  };

  const imgSuccesHandler = (name: string) => {
    setImg(name);
    setImgError(false);
  };

  const imgErrorHandler = (text: string) => {
    setImg(null);
    setImgError(true);
    console.log(text);
  };

  return (
    <div>
      <ButtonPrim text="Connect to lobby" handler={confirmFunc}></ButtonPrim>
      <Dialog
        open={connectedToLobby}
        onClose={cancelHandler}
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
            <FileLoader
              succesHandler={imgSuccesHandler}
              errorHandler={imgErrorHandler}
            />
            {img && (
              <Avatar
                className={classes.avatar}
                alt="User"
                src={`${API_FILE}files/${img}`}
              />
            )}
            {imgError && <span>Некорректно выбран файл - красным!</span>}
          </form>
        </DialogContent>
        <DialogActions>
          <ButtonPrim text="Confirm" handler={confirmFunc}></ButtonPrim>
          <ButtonPrim text="Cancel" handler={cancelHandler}></ButtonPrim>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalConnectToLobby;
