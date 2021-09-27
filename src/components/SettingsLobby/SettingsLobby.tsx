import {
  createStyles,
  FormControl,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Select,
  Switch,
  TextField,
  Theme,
} from "@material-ui/core";
import React from "react";
import PokerCardField from "../PokerCardField/PokerCardFieldContainer";
import classNames from "classnames";
import { Formik, Form } from "formik";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    label: {
      fontSize: 24,
      fontWeight: "bold",
      width: 500,
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    labelScore: {
      width: "300px",
    },
    scoreAlign: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "570px",
    },
    textField: {
      width: "150px",
    },
    time: {
      width: "70px",
    },
    shortScore: {
      paddingTop: "15px",
      paddingBottom: "15px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    accordion: {
      width: "100%",
    },
    table: {
      minWidth: "500px",
      width: "100%",
    },
    pokerCardContainer: {
      width: "100%",
      marginBottom: "10px",
      marginLeft: "5px",
    },
  }),
);

enum shortScoreType {
  "story-point" = "SP",
  "duration" = "DUR",
  "ideal-days" = "ID",
}
export interface ISettings {
  is_master_player: boolean;
  is_auto_card_open: boolean;
  timerNeeded: boolean;
  round_time: number;
  score_type: string;
  score_type_short: string;
  cover: string;
  cards: (string | number)[];
}

const cardCovers = ["card-back-1.jpg", "card-back-2.jpg", "card-back-3.jpg"];

interface ISettingsProps {
  saveSettings: (data?: ISettings) => void;
}

const SettingsLobby = ({ saveSettings }: ISettingsProps): JSX.Element => {
  const classes = useStyles();

  // const [settings, setSettings] = useState<ISettings>({
  //   masterAsPlayer: false,
  //   changingCard: false,
  //   timerNeeded: true,
  //   scoreType: "story-point",
  //   scoreTypeShort: "sp",
  //   cardValues: [],
  // });

  // settings: {
  //   is_master_player: true,
  //   is_auto_card_open: true,
  //   score_type: "story point",
  //   score_type_short: "SP",
  //   round_time: 120,
  //   cards: [1, 2, 3, 5, "?", "coffee"],
  // },

  const InitialValues: ISettings = {
    is_master_player: false,
    is_auto_card_open: true,
    timerNeeded: false,
    round_time: 120,
    score_type: "story-point",
    score_type_short: "sp",
    cover: "card-back-1.jpg",
    cards: [1, 2, 3, 5, "?", "coffee"],
  };

  // const renderCovers = (cover: string): JSX.Element[] => {
  //   const covers = cardCovers.map((elem: string): JSX.Element => {
  //     console.log("elem = ", elem, "cover = ", cover, "\n");
  //     return (
  //       <PokerCard
  //         cardSizeClass="bigCard"
  //         key={elem}
  //         frontCard={false}
  //         coverImage={`/covers/${elem}`}
  //         activeClassCard={`${elem === cover ? "active" : ""}`}
  //       />
  //     );
  //   });
  //   return covers;
  // };

  const formSubmitHandler = (values: ISettings) => {
    saveSettings(values);
  };

  return (
    <>
      <h3>Game settings</h3>
      <Formik initialValues={InitialValues} onSubmit={formSubmitHandler}>
        {({ values, handleChange }) => {
          return (
            <Form className={classes.form} id="settingsForm">
              <FormControlLabel
                control={
                  <Switch
                    checked={values.is_master_player}
                    onChange={handleChange}
                    name="is_master_player"
                    color="primary"
                  />
                }
                label="Scram master as player:"
                labelPlacement="start"
                classes={{
                  label: classes.label,
                }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={values.is_auto_card_open}
                    onChange={handleChange}
                    name="is_auto_card_open"
                    color="primary"
                  />
                }
                label="Changing card in round end:"
                labelPlacement="start"
                classes={{
                  label: classes.label,
                }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={values.timerNeeded}
                    onChange={handleChange}
                    name="timerNeeded"
                    color="primary"
                  />
                }
                label="Is timer needed:"
                labelPlacement="start"
                classes={{
                  label: classes.label,
                }}
              />
              {values.timerNeeded && (
                <>
                  <FormControl className={classes.scoreAlign}>
                    <label
                      className={`${classes.label} ${classes.labelScore} MuiFormControlLabel-labelPlacementStart`}
                      id="scoreType-label"
                    >
                      Round time:
                    </label>
                    <div>
                      <TextField
                        id="outlined-number"
                        label="minutes"
                        type="text"
                        defaultValue={2}
                        className={classes.time}
                        InputProps={{
                          readOnly: true,
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-number"
                        label="seconds"
                        type="text"
                        defaultValue={"00"}
                        inputProps={{
                          inputMode: "numeric",
                          pattern: "[0-9]{2}",
                        }}
                        className={classes.time}
                        InputProps={{
                          readOnly: true,
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                    </div>
                  </FormControl>
                </>
              )}
              {/* duration, ideal days or story points */}
              <FormControl required className={classes.scoreAlign}>
                <label
                  className={`${classes.label} ${classes.labelScore} MuiFormControlLabel-labelPlacementStart`}
                  id="scoreType-label"
                >
                  Score type:
                </label>
                <Select
                  labelId="scoreType-label"
                  id="scoreType"
                  value={values.score_type}
                  onChange={handleChange}
                  name="score_type"
                  displayEmpty
                  className={classes.textField}
                >
                  <MenuItem value={"story-point"}>Story point</MenuItem>
                  <MenuItem value={"duration"}>Duration</MenuItem>
                  <MenuItem value={"ideal-days"}>Ideal days</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.scoreAlign}>
                <label
                  className={`${classes.label} ${classes.labelScore} MuiFormControlLabel-labelPlacementStart`}
                  id="scoreType-label"
                >
                  Score type (short):
                </label>
                <TextField
                  id="scoreTypeShort"
                  variant="outlined"
                  value={shortScoreType[`${values.score_type}`]}
                  className={classNames(classes.shortScore, classes.textField)}
                  InputProps={{
                    readOnly: true,
                  }}
                  size="small"
                />
              </FormControl>

              <h3>Game cards</h3>
              <h4
                className={`${classes.label} MuiFormControlLabel-labelPlacementStart`}
              >
                Select cover:
              </h4>
              <PokerCardField
                coverImage={cardCovers}
                frontCard={false}
                saveActive={(data) => {
                  values.cover = data;
                }}
                cover={values.cover}
              />
              <h4
                className={`${classes.label} MuiFormControlLabel-labelPlacementStart`}
              >
                Add card values:
              </h4>
              <PokerCardField cardValues={values.cards} />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SettingsLobby;
