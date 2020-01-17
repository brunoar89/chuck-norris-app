import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import CategoryReducer from 'store/category/reducers';

const rootReducer = (history) => combineReducers({
  category: CategoryReducer,
  router: connectRouter(history),
});

export default rootReducer;
