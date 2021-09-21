import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/usersActions";
import { IUser } from "../../interfaces";

const currentUser: IUser = {
  id: "DVasX8",
  first_name: "David",
  last_name: "Blaim",
  position: "Junior",
  image: "Elon_Musk_2015.jpg",
  is_observer: false,
  is_master: true,
  game: "TVasX8",
};

export type currentUserActions = ActionType<typeof actions>;

const currentUserReducer = (
  state = currentUser,
  action: currentUserActions,
): IUser => {
  switch (action.type) {
    case getType(actions.setLoading):
      return { ...state };
    // case getType(actions.setCurrentPage):
    //   return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};

export default currentUserReducer;
