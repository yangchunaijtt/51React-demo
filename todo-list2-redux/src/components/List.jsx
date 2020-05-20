import React, { Component } from "react";
import Item from "./Item"
import store from "../store/index"


export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        store.subscribe(this.storeChange) // 订阅Redux的状态
    };
    storeChange = () => {
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