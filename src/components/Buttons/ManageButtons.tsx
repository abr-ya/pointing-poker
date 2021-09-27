import React from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditButtons from "./EditButtons";

interface IManageButtonsProps {
  issueText: string;
  isLobby: boolean;
}

const ManageButtons = ({
  issueText,
  isLobby,
}: IManageButtonsProps): JSX.Element => {
  return (
    <>
      {issueText === "Create new Issue" ? (
        <IconButton aria-label="edit issue">
          <AddIcon fontSize="large" />
        </IconButton>
      ) : (
        <EditButtons isLobby={isLobby} />
      )}
    </>
  );
};

export default ManageButtons;
