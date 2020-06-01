import React, { Component } from "react";
import PropTypes from "prop-types";
import { changeFinshed, removeItem } from "../store/actions"
import { connect } from "react-redux";

class Item extends Component {
    static propTypes = {
        todItem: PropTypes.object.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
            hasFlag: false
        }
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
    render() {
        const { todItem } = this.props;
        const { hasFlag } = this.state;
        const { _changeFinshed, _romeItem } = this.props;
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
