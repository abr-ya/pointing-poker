import { createCustomAction } from "typesafe-actions"; // createAction - без payload
import { SET_LOADING } from "./usersTypes"; // SET_USERS

// export const setMovie = createCustomAction(SET_MOVIE, (data: any) => ({
//   payload: data,
// }));

export const setLoading = createCustomAction(SET_LOADING, (flag: boolean) => ({
  payload: flag,
}));
