import { combineReducers } from "redux";
import game from "./gameReducer";
import users from "./usersReducer";

const reducers = combineReducers({
  game,
  users,
});

export default reducers;
