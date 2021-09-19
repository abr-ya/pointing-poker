import { createCustomAction } from "typesafe-actions"; // createAction - без payload

// types
// const SET_USERS = "SET_USERS";
const SET_LOADING = "SET_LOADING";

// export const setMovie = createCustomAction(SET_MOVIE, (data: any) => ({
//   payload: data,
// }));

export const setLoading = createCustomAction(SET_LOADING, (flag: boolean) => ({
  payload: flag,
}));
