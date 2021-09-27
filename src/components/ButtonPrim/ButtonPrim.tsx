import React from "react";
import Button from "@material-ui/core/Button";

interface IButtonPrim {
  text: string;
  handler: () => void;
  isAdditional?: boolean;
}

const ButtonPrim = ({
  text,
  handler,
  isAdditional,
}: IButtonPrim): JSX.Element => (
  <Button
    variant={isAdditional ? "outlined" : "contained"}
    color="primary"
    onClick={handler}
  >
    {text}
  </Button>
);

export default ButtonPrim;
