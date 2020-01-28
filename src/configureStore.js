import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './reducer/index';
import { INITIAL_STATE } from './initialState';

const history = createBrowserHistory();
const composeEnhancer =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancer(
    applyMiddleware(thunk, routerMiddleware(history))
);

export default createStore(connectRouter(history)(rootReducer), INITIAL_STATE, enhancer);