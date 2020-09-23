import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from "./saga.js"

const sagaMiddleware = createSagaMiddleware();
const composeRnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeRnhancers(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySagas);

export default store;