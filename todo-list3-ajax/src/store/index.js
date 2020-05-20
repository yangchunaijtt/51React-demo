import { createStore } from 'redux'
import reducer from './reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 使浏览器中redux-devtool插件生效
);
export default store;