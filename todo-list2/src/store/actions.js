import {
    REMOVE_ITEM,
    ADD_TODO,
    DELE_ALL_FINSHED,
    FOOT_CHECK_ALL,
    CHANGE_FINSHED
} from "./actionTypes"

//删除一条数据
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
export const footCheckAll = (isChecked) => ({
    type: FOOT_CHECK_ALL,
    isChecked
});
export const changeFinshed = (todoId,finished) => ({
    type: CHANGE_FINSHED,
    todoId,
    finished
});