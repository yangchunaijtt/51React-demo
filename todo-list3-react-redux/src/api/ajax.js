import axios from "axios";

const ajax = (type = "get", url, params) => {
    return new Promise((resolve, reject) => {
        type = type.toUpperCase();
        let promises;
        if (type === "GET") {
            let paramsStr = "";
            if (params) {
                paramsStr = "?"
                Object.keys(params).forEach(item => {
                    paramsStr += `${item} = ${params.item}&`;
                })
                paramsStr = paramsStr.substring(paramsStr.length - 1, 0);
            }
            // debugger
            url +=paramsStr;
            promises = axios.get(url);
        } else if (type === "POST") {
            promises = axios.post(url, params);
        }
        promises.then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    })

}

export default ajax;