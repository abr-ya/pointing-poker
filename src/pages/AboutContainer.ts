import { connect } from "react-redux";
import About from "./About";
import { RootStateType } from "../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  gameID: state.game.id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
