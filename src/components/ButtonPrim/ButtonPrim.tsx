import React from "react";
import Button from "@material-ui/core/Button";

interface IButtonPrim {
  text: string;
  handler: () => void;
}

const ButtonPrim = ({ text, handler }: IButtonPrim): JSX.Element => (
  <Button variant="outlined" color="primary" onClick={handler}>
    {text}
  </Button>
);

export default ButtonPrim;
