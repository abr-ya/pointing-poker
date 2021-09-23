import { createCustomAction } from "typesafe-actions"; // createAction - без payload

const SET_LOADING = "SET_LOADING";

export const setLoading = createCustomAction(SET_LOADING, (flag: boolean) => ({
  payload: flag,
}));
