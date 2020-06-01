import React, { Component } from "react";
import Item from "./Item"
import store from "../store/index"


export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        // 订阅store的改变
        this._storeChange = this._storeChange.bind(this);
        store.subscribe(this._storeChange) // 订阅Redux的状态
    };
    _storeChange = () => {
        this.setState(store.getState())
    };
    render() {
        const todos = this.state.todos;
        return (
            <ul className="todo-main">
                {todos.map((item, index) => (
                    <Item
                        key={item.id}
                        todItem={item} />
                ))}
            </ul>
        )

    };
}