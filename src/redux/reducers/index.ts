import { combineReducers } from "redux";
import game from "./gameReducer";
import users from "./usersReducer";
import currentUser from "./currentUserReducer";

const reducers = combineReducers({
  game,
  users,
  currentUser,
});

export default reducers;
