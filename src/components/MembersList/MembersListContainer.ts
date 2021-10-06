import { connect } from "react-redux";
import MembersList from "./MembersList";
import { RootStateType } from "../../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  data: state.users.data,
  loading: state.users.loading,
  isMaster: state.currentUser.is_master,
  isLobbyPage: state.game.status === "lobby",
});

export default connect(mapStateToProps, null)(MembersList);
