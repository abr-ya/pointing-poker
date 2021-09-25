import { all, fork } from "redux-saga/effects";

import startSagas from "./startSagas";

export default function* rootSaga() {
  yield all([fork(startSagas)]);
}
