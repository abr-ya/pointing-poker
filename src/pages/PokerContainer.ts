import { connect } from "react-redux";
import Poker from "./Poker";
import { RootStateType } from "../redux/ReduxProvider";
import { goToLobby, goToGame, goToResult } from "../redux/actions/gameActions";

const mapStateToProps = (state: RootStateType) => ({
  game: state.game,
});

const mapDispatchToProps = {
  goToLobby,
  goToGame,
  goToResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(Poker);
