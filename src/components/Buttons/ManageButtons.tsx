import React from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditButtons from "./EditButtons";

interface IManageButtonsProps {
  issueID: string;
  issueText: string;
  isLobby: boolean;
  handlerEditIssue: (issueID: string) => void;
  handlerDeleteIssue: (issueID: string) => void;
  handlerAddIssue: () => void;
}

const ManageButtons = ({
  issueID,
  issueText,
  isLobby,
  handlerEditIssue,
  handlerDeleteIssue,
  handlerAddIssue,
}: IManageButtonsProps): JSX.Element => {
  return (
    <>
      {issueText === "Create new Issue" ? (
        <IconButton aria-label="add issue" onClick={() => handlerAddIssue()}>
          <AddIcon fontSize="large" />
        </IconButton>
      ) : (
        <EditButtons
          issueID={issueID}
          isLobby={isLobby}
          handlerEditIssue={handlerEditIssue}
          handlerDeleteIssue={handlerDeleteIssue}
        />
      )}
    </>
  );
};

export default ManageButtons;
