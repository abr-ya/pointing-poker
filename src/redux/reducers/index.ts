import { combineReducers } from "redux";
import game from "./gameReducer";
import users from "./usersReducer";
import currUser from "./currUserReducer";

const reducers = combineReducers({
  game,
  users,
  currUser,
});

export default reducers;
