import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSagas from 'store/sagas';
import createRootReducer from 'store/reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger({});

export const browserHistory = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(browserHistory),
    composeEnhancers(applyMiddleware(
      routerMiddleware(browserHistory),
      sagaMiddleware,
      loggerMiddleware,
    )),
  );

  sagaMiddleware.run(rootSagas);

  return store;
}
