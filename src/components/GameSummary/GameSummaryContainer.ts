import { connect } from "react-redux";
import GameSummary from "./GameSummary";
import { RootStateType } from "../../redux/ReduxProvider";
import { IUser } from "../../interfaces";

const findMaster = (element: IUser) => {
  if (element.is_master) {
    return element;
  }
};

const mapStateToProps = (state: RootStateType) => ({
  masterInfo: state.users.data.find(findMaster),
  role: state.currentUser.is_master ? "master" : "player",
  gameID: state.game.id,
});

export default connect(mapStateToProps, null)(GameSummary);
