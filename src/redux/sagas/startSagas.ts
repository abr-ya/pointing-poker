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

function* connectGameSaga(
  action: ReturnType<typeof gameActions.connectGameSaga>,
) {
  try {
    yield put(gameActions.setLoading(true));
    const response: IGame = yield call(api.getGame, action.payload);
    if (Array.isArray(response) && response.length === 1) {
      // всё хорошо
      yield put(gameActions.setGame(response[0]));
      console.log(
        "connectGameSaga: подключились к игре - должны попасть в лобби",
      );
    } else {
      // здесь обработать - что-то пошло не так
      console.log("connectGameSaga, ответ получен, но это не 1 игра");
    }
  } catch (error) {
    console.error(error); // ToDo - ставить ошибку в Redux?
  } finally {
    yield put(gameActions.setLoading(false));
  }
}

export default function* watchEntities() {
  yield takeLatest(gameActions.NEW_GAME_SAGA, newGameSaga);
  yield takeLatest(gameActions.CONNECT_GAME_SAGA, connectGameSaga);
}
