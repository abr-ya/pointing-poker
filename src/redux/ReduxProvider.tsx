import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { StateType } from "typesafe-actions";
import reducers from "./reducers";
import rootSaga from "./sagas/rootSaga";

export type RootStateType = StateType<typeof reducers>;
interface IReduxProvider {
  children: React.ReactElement;
  initialState?: RootStateType;
}

const ReduxProvider = ({
  children,
  initialState,
}: IReduxProvider): JSX.Element => {
  const isDEV = true; // ToDo: взять из env!
  const isDevToolsOn = (middlewares: any, on: boolean) =>
    on ? composeWithDevTools(middlewares) : middlewares;

  const sagaMiddleware = createSagaMiddleware();

  // не забываем поставить
  // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
  const store = createStore(
    reducers,
    initialState,
    isDevToolsOn(applyMiddleware(sagaMiddleware), isDEV),
  );

  sagaMiddleware.run(rootSaga);

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
