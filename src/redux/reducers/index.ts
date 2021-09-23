import { combineReducers } from "redux";
import game from "./gameReducer";
import users from "./usersReducer";
import currentUser from "./currentUserReducer";
import issues from "./issuesReducer";

const reducers = combineReducers({
  game,
  users,
  currentUser,
  issues,
});

export default reducers;
