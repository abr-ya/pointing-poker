import React from "react";
import ButtonPrim from "../ButtonPrim/ButtonPrim";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
// import MenuItem from "@material-ui/core/MenuItem";
import { nanoid } from "nanoid"; // ToDo убрать, когда не будет нужно!

interface IModalCreateIssue {
  issueIsOpen: boolean;
  yesFunc: (data: any) => void;
  noFunc: () => void;
}

const ModalCreateIssue = ({
  issueIsOpen,
  yesFunc,
  noFunc,
}: IModalCreateIssue): JSX.Element => {
  const yesButtonHandler = () => {
    const salt = nanoid(6);
    yesFunc({
      issueText: `newTask_${salt}`,
      link: `http://1234556_${salt}`,
      priority: "low",
    });
  };

  return (
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
          {/* пришлось закомментировать - Матириал ругается на эту штуку, я не понял сходу
          abr-ya
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
          </TextField> */}
        </form>
      </DialogContent>
      <DialogActions>
        <ButtonPrim text="Yes" handler={yesButtonHandler}></ButtonPrim>
        <ButtonPrim text="No" handler={noFunc}></ButtonPrim>
      </DialogActions>
    </Dialog>
  );
};

export default ModalCreateIssue;
