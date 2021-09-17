import React, { useState } from "react";
import ButtonPrim from "../ButtonPrim/ButtonPrim";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FileLoader from "../FileLoader/FileLoader";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const API_FILE = process.env.API_FILE;

const useStyles = makeStyles({
  switcher: {
    justifyContent: "flex-end",
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
});
interface IModalConnectToLobby {
  isOpen: boolean;
  confirmFunc: (data?: any) => void;
  cancelFunc: () => void;
}

interface IUserFormData {
  first_name: string;
  last_name: string;
  position: string;
  image: string;
  is_observer: boolean;
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
  isOpen,
  confirmFunc,
  cancelFunc,
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

  const formSubmitHandler = (values, { resetForm }) => {
    const data: IUserFormData = { ...values, image: img };
    confirmFunc(data);
    resetForm();
  };

  return (
    <Dialog
      className={classes.dialog}
      open={isOpen}
      onClose={cancelHandler}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">Connect to lobby</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={InitialValues}
          validationSchema={SignupValidation}
          onSubmit={formSubmitHandler}
        >
          {({ values, handleChange, handleBlur }) => {
            return (
              <Form className={classes.form} id="userForm">
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
              </Form>
            );
          }}
        </Formik>
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          form="userForm"
        >
          confirm
        </Button>
        <ButtonPrim text="Cancel" handler={cancelHandler} isAdditional />
      </DialogActions>
    </Dialog>
  );
};

export default ModalConnectToLobby;
