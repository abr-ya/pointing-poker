import { connect } from "react-redux";
import GameSummary from "./GameSummary";
import { RootStateType } from "../../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  role: state.currentUser.is_master ? "master" : "player",
  loading: state.users.loading,
});

export default connect(mapStateToProps, null)(GameSummary);
