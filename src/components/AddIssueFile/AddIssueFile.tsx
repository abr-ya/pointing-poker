import React from "react";
import { Button, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      display: "none",
    },
  }),
);

const AddIssueFile = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className="container">
      <input
        accept=".csv"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default AddIssueFile;
