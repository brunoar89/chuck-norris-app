import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSagas from 'store/sagas';
import createRootReducer from 'store/reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();


export const browserHistory = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    createRootReducer(browserHistory),
    composeEnhancers(applyMiddleware(
      routerMiddleware(browserHistory),
      sagaMiddleware,
    )),
  );

  sagaMiddleware.run(rootSagas);

  return store;
}
