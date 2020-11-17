import {
    put,
    takeEvery
} from "redux-saga/effects"
import {
    REQ_ALL_ITEM,
    GET_ALL_ITEM
} from "./actionTypes"
import {
    getTodoList
} from "../api/index"

function* getAllItem() {

    const res = yield getTodoList();
    if (res.success_code === 200) {
        const todos = res.items;
        console.log("res", res)
        yield put({
            type: GET_ALL_ITEM,
            todos
        })
    }



    console.log(11);
};

function* mySagas() {
    yield takeEvery(REQ_ALL_ITEM, getAllItem);
}
export default mySagas;