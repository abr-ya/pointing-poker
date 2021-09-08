import React from "react";

import ButtonPrim from "../ButtonPrim/ButtonPrim";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface IModalLobby {
  name: string;
  open: boolean;
  yesFunc: () => void;
  noFunc: () => void;
}

const ModalLobby = ({
  name,
  open,
  yesFunc,
  noFunc,
}: IModalLobby): JSX.Element => (
  <div>
    <ButtonPrim text="Kick player" handler={yesFunc}></ButtonPrim>
    <Dialog
      open={open}
      onClose={noFunc}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{"Kick player?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          Are you really want to remove player {name} from game session?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonPrim text="Yes" handler={yesFunc}></ButtonPrim>
        <ButtonPrim text="No" handler={noFunc}></ButtonPrim>
      </DialogActions>
    </Dialog>
  </div>
);

export default ModalLobby;
