import { connect } from "react-redux";
import MembersList from "./MembersList";
import { RootStateType } from "../../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  data: state.users.data,
  loading: state.users.loading,
});

export default connect(mapStateToProps, null)(MembersList);
