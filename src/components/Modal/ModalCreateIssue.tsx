import React from "react";
import ButtonPrim from "../ButtonPrim/ButtonPrim";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

interface IModalCreateIssue {
  issueIsOpen: boolean;
  yesFunc: () => void;
  noFunc: () => void;
}

const ModalCreateIssue = ({
  issueIsOpen,
  yesFunc,
  noFunc,
}: IModalCreateIssue): JSX.Element => (
  <div>
    <ButtonPrim text="Create Issue" handler={yesFunc}></ButtonPrim>
    <Dialog
      open={issueIsOpen}
      onClose={noFunc}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{"Create Issue"}</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            label="Title"
            defaultValue="Issue 13"
            variant="outlined"
            color="secondary"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Link"
            defaultValue="http://jira.my-company.com/issue-13"
            variant="outlined"
            color="secondary"
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Priority"
            variant="outlined"
            color="secondary"
            fullWidth
            margin="normal"
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="middle">Middle</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <ButtonPrim text="Yes" handler={yesFunc}></ButtonPrim>
        <ButtonPrim text="No" handler={noFunc}></ButtonPrim>
      </DialogActions>
    </Dialog>
  </div>
);

export default ModalCreateIssue;
