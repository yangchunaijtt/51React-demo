import React, { Component } from "react";
import store from "../store/index"
import { deledAllFinshed, footCheckAll } from "../store/actions"


export default class Foot extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.state.isChecked = false;
        this._storeChange = this._storeChange.bind(this);
        store.subscribe(this._storeChange) // 订阅Redux的状态
        this.inputRef = React.createRef();
    };
    _selected() {
        const { todos, finishedCount, isChecked } = this.state;
        let checked = isChecked;
        checked = finishedCount === todos.length ? true : todos.length ? checked : false;

        const action = footCheckAll(!checked);
        store.dispatch(action);
        this.setState({
            isChecked: !checked
        })
    };
    _deleAllFinsed() {
        const action = deledAllFinshed();
        store.dispatch(action);
    };
    _storeChange = () => {
        this.setState(store.getState())
    };
    render() {
        const { todos, finishedCount, isChecked } = this.state;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                        checked={finishedCount === todos.length ? true : todos.length ? isChecked : false}
                        onChange={() => { this._selected() }}
                    />
                </label>
                <span>
                    <span>已完成{finishedCount}件</span> / 总计{todos.length}件
                </span>
                <button
                    onClick={() => this._deleAllFinsed()}
                    className="btn btn-warning">清除已完成任务</button>
            </div>
        )
    }
}