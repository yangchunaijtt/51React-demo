import {
    REMOVE_ITEM,
    ADD_TODO,
    DELE_ALL_FINSHED,
    FOOT_CHECK_ALL,
    CHANGE_FINSHED,
    REQ_ALL_ITEM
} from "./actionTypes"


//删除一条数据
export const getAllItemAction = (todos) => ({
    type: REQ_ALL_ITEM,
    todos
})

export const removeItem = (todoId) => ({
    type: REMOVE_ITEM,
    todoId
});
export const addTodo = (title) => ({
    type: ADD_TODO,
    title
});
export const deledAllFinshed = () => ({
    type: DELE_ALL_FINSHED
});
export const footCheckAll = (isChecked) => ({
    type: FOOT_CHECK_ALL,
    isChecked
});
export const changeFinshed = (todoId, finished) => ({
    type: CHANGE_FINSHED,
    todoId,
    finished
});