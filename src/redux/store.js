import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import history from '../utils/history';

import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';
import dataReducer from './reducers/dataReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

export { history };

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    router: connectRouter(history),
    form: reduxFormReducer,
    user: userReducer,
    data: dataReducer,
    UI: uiReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;