import { connect } from "react-redux";
import Main from "./Main";
import { RootStateType } from "../../redux/ReduxProvider";
import { newGameSaga } from "../../redux/actions/gameActions";

const mapStateToProps = (state: RootStateType) => ({});

const mapDispatchToProps = {
  newGameSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
