import {
    REMOVE_ITEM,
    ADD_TODO,
    DELE_ALL_FINSHED,
    FOOT_CHECK_ALL,
    CHANGE_FINSHED
} from "./actionTypes"
// reducers.js

// 工具函数，用于组织多个reducer，并返回reducer集合
import {
    combineReducers
} from 'redux'
// 默认值
import defaultState from './state.js'


export default (state = defaultState, action) => {
    switch (action.type) {
        case REMOVE_ITEM:
            //删除操作
            let newState = state;
            let finishedCount = 0;
            newState.todos.forEach((item, index) => {
                if (item.id === action.todoId) {
                    newState.todos.splice(index, 1);
                }
            })
            newState.todos.forEach((item, index) => {
                if (item.finished) {
                    finishedCount += 1;
                }
            })
            return newState;
            break;
        case ADD_TODO:
            // 添加一条数据
            let newState = state;
            const todo = {
                id: newState.todos.length === 0 ? 1 : newState.todos[newState.todos.length - 1].id + 1,
                title: action.title,
                finished: false
            };
            newState.todos.push(todo);
            return newState;
            break;
        case DELE_ALL_FINSHED:
            // 清除所有已完成
            let newState = state;
            let arr = [];
            newState.todos.forEach(item => {
                if (!item.finished) {
                    arr.push(item);
                }
            })
            newState.todos = arr;
            newState.finishedCount = 0;
            return newState;
            break;
        case FOOT_CHECK_ALL:
            // 底部checkbox点击操作
            let newState = state;
            let finishedCount = 0;
            if (!newState.todos.length && action.isChecked) {
                newState.finishedCount = finishedCount;
                return newState;
            }
            newState.todos.forEach(item => {
                if (action.isChecked) {
                    if (!item.finished) {
                        item.finished = true;
                    }
                    finishedCount = newState.todos.length;
                } else {
                    if (item.finished) {
                        item.finished = false;
                    }
                    finishedCount = 0;
                }
            })
            newState.finishedCount = finishedCount;
            return newState;
            break;
        case CHANGE_FINSHED:
            // list多选框，点击 操作
            let newState = state;
            let finishedCount = 0;
            newState.todos.forEach((item, index) => {
                if (item.id === action.todoId) {
                    item.finished = action.finished;
                }
            })
            newState.todos.forEach((item, index) => {
                if (item.finished) {
                    finishedCount += 1;
                }
            })
            newState.finishedCount = finishedCount;
            return newState;
            break;
        default:
            return state;
    }
    return state;
}