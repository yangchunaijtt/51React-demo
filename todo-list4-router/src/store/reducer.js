import {
    REMOVE_ITEM,
    ADD_TODO,
    DELE_ALL_FINSHED,
    FOOT_CHECK_ALL,
    CHANGE_FINSHED
} from "./actionTypes"
// reducers.js

// 默认值
import defaultState from './state.js'


export default (state = defaultState, action) => {
    // 删除一条数据
    if (action.type === REMOVE_ITEM) {
       
        let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
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
        newState.finishedCount = finishedCount;
        return newState;
    };
    // 添加一条数据
    if (action.type === ADD_TODO) {
        let newState = JSON.parse(JSON.stringify(state));
        const todo = {
            id: newState.todos.length === 0 ? 1 : newState.todos[newState.todos.length - 1].id + 1,
            title: action.title,
            finished: false
        };
        newState.todos.push(todo);
        return newState;
    };
    // 清除所有已完成
    if (action.type === DELE_ALL_FINSHED) {
        let newState = JSON.parse(JSON.stringify(state));
        let arr = [];
        newState.todos.forEach(item => {
            if (!item.finished) {
                arr.push(item);
            }
        })
        newState.todos = arr;
        newState.finishedCount = 0;
        return newState;
    };
    // 底部checkbox点击操作
    if (action.type === FOOT_CHECK_ALL) {
        let newState = JSON.parse(JSON.stringify(state));
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
    };
    // list多选框，点击 操作
    if (action.type === CHANGE_FINSHED) {
        let newState = JSON.parse(JSON.stringify(state));
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
    };
    return state;
}