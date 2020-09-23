/**
 * react+redux
 * 在原本项目基础上，使用react-redux
 * React-Redux
 */
import React, { Component } from 'react';

import '..//App.css';
import Foot from "./Foot"
import Head from "./Head"
import List from "./List"
import ReducerPage from './UseReducerPage/ReducerPage'
import UseRefs from "./UseRef";
import UseMenmos from "./UseMenmoPage/useMenmo"
import MackHooks from "./mackHooks";
import store from "../store"
import { getAllItemAction } from '../store/actions'

/**
 * 执行yarn eject命令
npx create-react-app xxx
cd xxx
yarn eject
新建项目后要先执行 yarn eject 命令再修改，否则报错，需要重新建项目。
特别注意，整个过程是不可逆的。
 */
class Todo extends Component {
    render() {
        return (
            <div className="App">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Head />
                        <List />
                        <Foot />
                    </div>
                </div>
                <ReducerPage/>
                <UseMenmos/>
                <UseRefs/>
                <MackHooks/>
            </div>
        )
    };
    componentDidMount() {
        const action = getAllItemAction();
        store.dispatch(action);
    };
}

export default Todo;
