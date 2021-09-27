import React from "react";
import { IconButton } from "@material-ui/core";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CloseIcon from "@material-ui/icons/Close";

interface IEditButtonProps {
  isLobby: boolean;
}

const EditButtons = ({ isLobby }: IEditButtonProps): JSX.Element => {
  const buttons: JSX.Element = isLobby ? (
    <>
      <IconButton aria-label="edit issue">
        <CreateOutlinedIcon fontSize="large" />
      </IconButton>
      <IconButton color="secondary" aria-label="delete issue">
        <DeleteOutlineIcon fontSize="large" />
      </IconButton>
    </>
  ) : (
    <IconButton aria-label="delete issue">
      <CloseIcon fontSize="large" />
    </IconButton>
  );
  return buttons;
};

export default EditButtons;
