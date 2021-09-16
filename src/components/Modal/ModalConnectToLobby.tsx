import React, { useState } from "react";
import ButtonPrim from "../ButtonPrim/ButtonPrim";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FileLoader from "../FileLoader/FileLoader";
import { Formik, Form } from "formik";
import axios from "axios";

const API_FILE = process.env.API_FILE_USER;

const useStyles = makeStyles({
  switcher: {
    justifyContent: "flex-end",
  },
  btn: {
    display: "inline-block",
    marginTop: 35,
    marginLeft: 20,
    maxWidth: 100,
  },
  avatar: {
    width: 100,
    height: 100,
  },
});

interface IModalConnectToLobby {
  connectedToLobby: boolean;
  confirmFunc: () => void;
  cancelFunc: () => void;
  onSubmit: (values: IUserInfo) => void;
  isMaster: boolean;
}

export interface IUserInfo {
  first_name: string;
  last_name: string;
  position: string;
  is_observer: boolean;
  image: string;
  game: string;
}

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
        open={connectedToLobby}
        onClose={cancelHandler}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{"Connect to lobby"}</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              position: "",
              is_observer: false,
              image: "",
            }}
            onSubmit={(values) => {
              // onSubmit(values);
              axios
                .post(
                  API_FILE,
                  { ...values, is_master: isMaster, image: "123.jpg" },
                  {
                    headers: {
                      // "Access-Control-Allow-Origin": "*",
                      "Content-Type": "application/json",
                    },
                  },
                )
                .then((response) => {
                  //setSubmitionCompleted(true);
                  console.log("success!");
                  console.log(response.data);
                  console.log(response.status);
                  console.log(response.statusText);
                  console.log(response.headers);
                  console.log(response.config);
                });
            }}
            //

            // {
            //   "first_name": "Leanne",
            //   "last_name": "Graham",
            //   "position": "Junior QA",
            //   "image": "image303.jpg",
            //   "is_observer": true,
            //   "is_master": true,
            //   "game": "TVasX8"
            // }

            //
          >
            {({ values, handleChange, handleBlur }) => {
              return (
                <Form>
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
                  <TextField
                    label="Your first name:"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    margin="normal"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextField
                    label="Your last name:"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    margin="normal"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextField
                    label="Your job position:"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    margin="normal"
                    name="position"
                    value={values.position}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
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
                  {imgError && <span>Некорректно выбран файл - красным!</span>}
                  <pre>{JSON.stringify(values, null, 2)}</pre>

                  <DialogActions>
                    {/* <ButtonPrim
                          text="Confirm"
                          handler={onSubmit}
                        ></ButtonPrim> */}
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
