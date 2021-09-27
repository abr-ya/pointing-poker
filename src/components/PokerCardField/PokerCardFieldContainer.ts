import { connect } from "react-redux";
import PokerCardField from "./PokerCardField";
import { RootStateType } from "../../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  isLobbyPage: state.game.status === "lobby",
});

export default connect(mapStateToProps, null)(PokerCardField);
