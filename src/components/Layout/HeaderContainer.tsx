import { connect } from "react-redux";
import Header from "../Layout/Header";
import { RootStateType } from "../../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  isMain: state.game.status === "main",
});

export default connect(mapStateToProps, null)(Header);
