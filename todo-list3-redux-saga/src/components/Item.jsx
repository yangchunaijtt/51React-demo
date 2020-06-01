import React, { Component } from "react";
import PropTypes from "prop-types";
import store from "../store/index"
import { changeFinshed, removeItem } from "../store/actions"

export default class Item extends Component {
    static propTypes = {
        todItem: PropTypes.object.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = store.getState() // 从store中获取state数据
        this.state.hasFlag = false;
        this._storeChange = this._storeChange.bind(this);
        store.subscribe(this._storeChange) // 订阅Redux的状态
    };
    _overLi(flag) {
        this.setState({
            hasFlag: flag
        })
    };
    _outLi(flag) {
        this.setState({
            hasFlag: flag
        })
    };
    _changeFinshed(todoId, finished) {
        const action = changeFinshed(todoId, finished);
        store.dispatch(action);
    };
    _romeItem(todoId) {
        const action = removeItem(todoId);
        store.dispatch(action);
    };
    _storeChange = () => {
        this.setState(store.getState())
    };
    render() {
        const { todItem } = this.props;
        const { hasFlag } = this.state;
        return (
            <li
                onMouseOver={() => { this._overLi(true) }}
                onMouseOut={() => { this._outLi(false) }}
            >
                <label>
                    <input type="checkbox"
                        checked={todItem.finished}
                        onChange={() => { this._changeFinshed(todItem.id, !todItem.finished) }}
                    />
                    <span>{todItem.title}</span>
                </label>
                <button
                    onClick={() => { this._romeItem(todItem.id) }}
                    className="btn btn-warning" style={{ display: hasFlag ? "block" : "none" }}
                >删除</button>
            </li>
        )
    };

}