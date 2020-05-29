import React, { Component } from "react";
import store from "../store/index"
import { addTodo } from "../store/actions"


export default class Head extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.inputRef = React.createRef();
        this._storeChange = this._storeChange.bind(this);
        store.subscribe(this._storeChange) // 订阅Redux的状态
    };
    addOne = (e) => {
        if (e.keyCode === 13) {
            let title = this.inputRef.current.value;
            const action = addTodo(title);
            store.dispatch(action);
            this.inputRef.current.value = "";
        }
    };
    _storeChange = () => {
        this.setState(store.getState())
    };
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input
                        ref={this.inputRef}
                        onKeyDown={(e) => { this.addOne(e) }}
                        type="text" placeholder="请输入今天的任务清单，按回车键确认" />
                </div>
            </div >
        )
    }
}