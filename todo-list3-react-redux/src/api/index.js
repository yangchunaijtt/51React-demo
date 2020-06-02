import ajax from "./ajax.js";

const CONFIG_HD = "/api/"
/**
 * 请求tido数据
 */
export const getTodoList = () => {
    return new Promise((resolve, reject) => {

        ajax("get", `${CONFIG_HD}todos`).then(res => {
            resolve(res.data);
        }).catch(error => {
            reject(error)
        });
    })
}