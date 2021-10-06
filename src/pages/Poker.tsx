import React from "react";
import { IGame } from "../interfaces";
import { Main, Lobby, Game, Result } from "./index";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/HeaderContainer";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import Chat from "../components/Chat/Chat";
import cn from "classnames";
import { useSelector } from "react-redux";
import { RootStateType } from "../redux/ReduxProvider";

const drawerWidth = 450;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    window: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: "0",
    },
    windowShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
  }),
);

interface IPoker {
  game: IGame;
  goToLobby: () => void;
  goToGame: () => void;
  goToResult: () => void;
}

const Poker = ({ game }: IPoker): JSX.Element => {
  let Component: React.FC = Main; // default to order page
  switch (game.status) {
    case "lobby":
      Component = Lobby;
      break;
    case "game":
      Component = Game;
      break;
    case "result":
      Component = Result;
      break;
  }

  const classes = useStyles();
  const openChat = useSelector((state: RootStateType) => state.game.isChatOpen);

  return (
    <div
      className={cn(classes.window, {
        [classes.windowShift]: openChat,
      })}
    >
      <Header />
      <Component />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={openChat}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Chat username={"Henry"} />
      </Drawer>
      <Footer />
    </div>
  );
};

export default Poker;
