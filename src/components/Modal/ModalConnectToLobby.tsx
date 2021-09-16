import React, { useState } from "react";
import ButtonPrim from "../ButtonPrim/ButtonPrim";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, Button, createStyles, TextField, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FileLoader from "../FileLoader/FileLoader";
import { Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const API_FILE_USER = process.env.API_FILE_USER;
const API_FILE = process.env.API_FILE;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    switcher: {
      justifyContent: "flex-end",
    },
    btn: {
      display: "inline-block",
      marginTop: 35,
      marginLeft: 20,
      maxWidth: 100,
    },
    inputRoot: {
      width: "350px",
    },
    avatar: {
      width: 100,
      height: 100,
    },
    error: {
      color: "red",
    },
    infoField: {
      display: "flex",
      width: "500px",
      alignItems: "center",
      justifyContent: "space-between",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    dialog: {
      minWidth: "600px",
    },
  }),
);
interface IModalConnectToLobby {
  connectedToLobby: boolean;
  confirmFunc: () => void;
  cancelFunc: () => void;
  onSubmit: (values: IPostData) => void;
  isMaster: boolean;
  game: string;
}

export interface IUserInfo {
  first_name: string;
  last_name: string;
  position: string;
  image: string;
  is_observer: boolean;
}
export interface IPostData {
  first_name: string;
  last_name: string;
  position: string;
  image: string;
  is_observer: boolean;
  is_master: boolean;
  game: string;
}

const SignupValidation = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter your name"),
  last_name: Yup.string().min(2, "Too Short!").max(70, "Too Long!"),
});

const InitialValues = {
  first_name: "",
  last_name: "",
  position: "",
  is_observer: false,
  image: "",
};

const ModalConnectToLobby = ({
  connectedToLobby,
  confirmFunc,
  cancelFunc,
  onSubmit,
  isMaster,
  game,
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
    <>
      <ButtonPrim text="Connect to lobby" handler={confirmFunc}></ButtonPrim>
      <Dialog
        className={classes.dialog}
        open={connectedToLobby}
        onClose={cancelHandler}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{"Connect to lobby"}</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={InitialValues}
            validationSchema={SignupValidation}
            onSubmit={async (values, { resetForm }) => {
              const data: IPostData = {
                ...values,
                image: img,
                is_master: isMaster,
                game: game,
              };
              await onSubmit(data);
              resetForm();
            }}
            // onSubmit(values);
            //   const data: IPostData = {
            //     ...values,
            //     image: img,
            //     is_master: isMaster,
            //     game: game,
            //   };
            //   axios
            //     .post(API_FILE_USER, data, {
            //       headers: {
            //         "Content-Type": "application/json",
            //       },
            //     })
            //     .then((response) => {
            //       console.log("success!");
            //       console.log(response.data);
            //       console.log(response.status);
            //       console.log(response.statusText);
            //       console.log(response.headers);
            //       console.log(response.config);
            //       onSubmit(data);
            //     });
            // }}
          >
            {({ values, handleChange, handleBlur }) => {
              return (
                <Form className={classes.form}>
                  {!isMaster && (
                    <FormGroup
                      className={classes.switcher}
                      aria-label="position"
                      row
                    >
                      <FormControlLabel
                        control={
                          <Switch
                            color="primary"
                            name="is_observer"
                            checked={values.is_observer}
                            onChange={handleChange}
                          />
                        }
                        label="Connect as Observer"
                        labelPlacement="start"
                      />
                    </FormGroup>
                  )}
                  <Box className={classes.infoField}>
                    <TextField
                      required
                      label="Your first name:"
                      variant="outlined"
                      color="secondary"
                      margin="normal"
                      name="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      component="span"
                      className={classes.error}
                      name="first_name"
                    />
                  </Box>
                  <Box className={classes.infoField}>
                    <TextField
                      label="Your last name:"
                      variant="outlined"
                      // color="secondary"
                      // fullWidth
                      margin="normal"
                      name="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      component="span"
                      className={classes.error}
                      name="last_name"
                    />
                  </Box>
                  <TextField
                    label="Your job position:"
                    variant="outlined"
                    // color="secondary"
                    fullWidth
                    margin="normal"
                    name="position"
                    value={values.position}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Box className={classes.infoField}>
                    <Box>
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
                    </Box>
                    {imgError && (
                      <span className={classes.error}>
                        Некорректно выбран файл!
                      </span>
                    )}
                  </Box>
                  <DialogActions>
                    <Button type="submit" variant="contained" color="primary">
                      confirm
                    </Button>
                    <ButtonPrim
                      text="Cancel"
                      handler={cancelHandler}
                    ></ButtonPrim>
                  </DialogActions>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModalConnectToLobby;
