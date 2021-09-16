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

const API_FILE = process.env.API_FILE;

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
  firstName: string;
  lastName: string;
  position: string;
  isObserver: boolean;
  image: string;
}

const ModalConnectToLobby = ({
  connectedToLobby,
  confirmFunc,
  cancelFunc,
  onSubmit,
  isMaster,
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
              firstName: "",
              lastName: "",
              position: "",
              isObserver: false,
              image: "",
            }}
            onSubmit={(values) => {
              onSubmit(values);
            }}
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
                            name="isObserver"
                            checked={values.isObserver}
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
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextField
                    label="Your last name:"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    margin="normal"
                    name="lastName"
                    value={values.lastName}
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
