import React from "react";
import axios from "axios";
import { Button, createStyles, makeStyles } from "@material-ui/core";

const API_FILE = process.env.API_FILE;

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      display: "none",
    },
  }),
);

interface IFileLoader {
  succesHandler: (name: string) => void;
  errorHandler?: (text: string) => void;
}

const FileLoader = ({
  succesHandler,
  errorHandler,
}: IFileLoader): JSX.Element => {
  const classes = useStyles();

  const onUploadProgress = (event) => {
    console.log("loaded", event.loaded, "total", event.total);
  };

  const sendFileToServer = (file) => {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${API_FILE}upload/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      })
      // .then(console.log)
      .then((req) => succesHandler(req.data.name))
      .catch(console.log);
  };

  const badFileMessage = () => {
    errorHandler("некорректно выбран файл - можно картинки до 100 Кб");
  };

  const fileValidate = (file) => {
    if (!file) return false;

    console.log(file.type, file.size);
    const hasCorrectType = ["image/png", "image/jpeg"].includes(file.type);
    const hasCorrectSize = file.size < 100000;

    return hasCorrectType && hasCorrectSize;
  };

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    if (fileValidate(file)) {
      sendFileToServer(file);
    } else {
      badFileMessage();
    }
  };

  return (
    <>
      <input
        type="file"
        onChange={fileChangedHandler}
        className={classes.input}
        id="upload-avatar"
        accept="image/*"
      />
      <label htmlFor="upload-avatar">
        <Button variant="contained" color="primary" component="span">
          Upload image
        </Button>
      </label>
    </>
  );
};

export default FileLoader;
