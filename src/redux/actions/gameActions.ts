import { createAction, createCustomAction } from "typesafe-actions"; // createAction - без payload

// types
// const SET_USERS = "SET_USERS";
const SET_LOADING = "SET_LOADING";
const GO_TO_LOBBY = "GO_TO_LOBBY";
const GO_TO_GAME = "GO_TO_GAME";
const GO_TO_RESULT = "GO_TO_RESULT";

// export const setMovie = createCustomAction(SET_MOVIE, (data: any) => ({
//   payload: data,
// }));

export const setLoading = createCustomAction(SET_LOADING, (flag: boolean) => ({
  payload: flag,
}));

export const goToLobby = createAction(GO_TO_LOBBY)();
export const goToGame = createAction(GO_TO_GAME)();
export const goToResult = createAction(GO_TO_RESULT)();
