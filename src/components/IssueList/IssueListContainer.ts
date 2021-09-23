import { connect } from "react-redux";
import IssueList from "./IssueList";
import { RootStateType } from "../../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  data: state.issues.data,
  loading: state.issues.loading,
  isLobbyPage: state.game.status === "lobby",
  isMaster: state.currentUser.is_master,
});

export default connect(mapStateToProps, null)(IssueList);
