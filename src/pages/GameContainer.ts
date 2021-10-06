import { connect } from "react-redux";
import Game from "./Game";
import { RootStateType } from "../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  isMaster: state.currentUser.is_master,
});

export default connect(mapStateToProps, null)(Game);
