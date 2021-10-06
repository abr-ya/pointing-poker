import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2B3A67",
    },
    secondary: {
      main: "#496A81",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "3px",
        border: "1px solid #496A81",
        padding: "4px 16px",
      },
      outlined: {
        borderRadius: "3px",
        border: "1px solid #496A81",
        padding: "4px 16px",
      },
      label: {
        textShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
        fontSize: "18px",
      },
    },
    MuiDialogActions: {
      root: {
        padding: "16px 24px",
        justifyContent: "space-between",
      },
    },
  },
});

export default theme;
