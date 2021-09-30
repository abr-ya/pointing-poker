import React from "react";
import { IconButton } from "@material-ui/core";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CloseIcon from "@material-ui/icons/Close";

interface IEditButtonProps {
  issueID: string;
  isLobby: boolean;
  handlerEditIssue: (issueID: string) => void;
  handlerDeleteIssue: (issueID: string) => void;
}

const EditButtons = ({
  issueID,
  isLobby,
  handlerEditIssue,
  handlerDeleteIssue,
}: IEditButtonProps): JSX.Element => {
  const buttons: JSX.Element = isLobby ? (
    <>
      <IconButton
        aria-label="edit issue"
        onClick={() => handlerEditIssue(issueID)}
      >
        <CreateOutlinedIcon fontSize="large" />
      </IconButton>
      <IconButton
        color="secondary"
        aria-label="delete issue"
        onClick={() => handlerDeleteIssue(issueID)}
      >
        <DeleteOutlineIcon fontSize="large" />
      </IconButton>
    </>
  ) : (
    <IconButton
      aria-label="delete issue"
      onClick={() => handlerDeleteIssue(issueID)}
    >
      <CloseIcon fontSize="large" />
    </IconButton>
  );
  return buttons;
};

export default EditButtons;
