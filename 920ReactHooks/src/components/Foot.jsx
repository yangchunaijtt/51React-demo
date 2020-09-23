import React, { Component } from "react";
import { deledAllFinshed, footCheckAll } from "../store/actions"
import { connect } from 'react-redux'

class Foot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
        this.inputRef = React.createRef();
    };
    _selected() {
        const { isChecked } = this.state;
        const { todos, finishedCount, _footCheckAll } = this.props;
        let checked = isChecked;
        checked = finishedCount === todos.length ? true : todos.length ? checked : false;
        _footCheckAll();
        this.setState({
            isChecked: !checked
        })
    };
    render() {
        const { todos, finishedCount, _deledAllFinshed } = this.props;
        const { isChecked } = this.state;
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
                    onClick={() => _deledAllFinshed()}
                    className="btn btn-warning">清除已完成任务</button>
            </div>
        )
    }
}


//  将state映射到Counter组件的props
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
//  将action映射到Counter组件的props
const mapDispatchToProps = (dispatch) => {
    return {
        _deledAllFinshed(todo) {
            const action = deledAllFinshed();
            dispatch(action);
        },
        _footCheckAll(checked) {
            const action = footCheckAll(!checked);
            dispatch(action);
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Foot)