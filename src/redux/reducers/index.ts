import { combineReducers } from "redux";
import users from "./usersReducer";

const reducers = combineReducers({
  users,
});

export default reducers;
