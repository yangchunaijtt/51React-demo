import React, { Component } from "react";
import PropTypes from "prop-types";
import { changeFinshed, removeItem } from "../store/actions"
import { connect } from "react-redux";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFlag: false
        };
    };
    static propTypes = {
        todItem: PropTypes.object.isRequired,
<<<<<<< HEAD:920ReactHooks/src/components/Item.jsx
=======
    }
    constructor(props) {
        super(props)
        this.state = store.getState() // 从store中获取state数据
        this.state.hasFlag = false;
        this._storeChange = this._storeChange.bind(this);
        store.subscribe(this._storeChange) // 订阅Redux的状态
>>>>>>> react:todo-list3-redux-thunk/src/components/Item.jsx
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
<<<<<<< HEAD:920ReactHooks/src/components/Item.jsx
=======
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
>>>>>>> react:todo-list3-redux-thunk/src/components/Item.jsx
    render() {
        const { hasFlag } = this.state;
        const { todItem, _changeFinshed, _romeItem } = this.props;
        return (
            <li
                onMouseOver={() => { this._overLi(true) }}
                onMouseOut={() => { this._outLi(false) }}
            >
                <label>
                    <input type="checkbox"
                        checked={todItem.finished}
                        onChange={() => { _changeFinshed(todItem.id, !todItem.finished) }}
                    />
                    <span>{todItem.title}</span>
                </label>
                <button
                    onClick={() => { _romeItem(todItem.id) }}
                    className="btn btn-warning" style={{ display: hasFlag ? "block" : "none" }}
                >删除</button>
            </li>
        )
    };

};

//  将state映射到Counter组件的props
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
//  将action映射到Counter组件的props
const mapDispatchToProps = (dispatch) => {
    return {
        _changeFinshed(todoId, finished) {
            const action = changeFinshed(todoId, finished);
            dispatch(action);
        },
        _romeItem(todoId) {
            const action = removeItem(todoId);
            dispatch(action);
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)
