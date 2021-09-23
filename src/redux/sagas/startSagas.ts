import { takeLatest, put, call } from "redux-saga/effects"; // takeEvery, select
import * as api from "../../api/poker-service";
import * as gameActions from "../actions/gameActions";
import { IGame } from "../../interfaces";

interface IResponse {
  data?: any;
}

function* newGameSaga() {
  try {
    yield put(gameActions.setLoading(true));
    const response: IGame = yield call(api.newGame);
    yield put(gameActions.setGame(response)); // response.data, если не обработали в апи!
    yield put(gameActions.setLoading(false));
  } catch (error) {
    console.error(error); // ToDo - ставить ошибку в Redux?
    yield put(gameActions.setLoading(false));
  }
}

export default function* watchEntities() {
  yield takeLatest(gameActions.NEW_GAME_SAGA, newGameSaga);
}
