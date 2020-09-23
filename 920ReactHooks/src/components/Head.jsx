import React, { Component } from "react";
import { addTodo } from "../store/actions"
import { connect } from 'react-redux'


class Head extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    };
    addOne = (e) => {
        const { addTodo } = this.props;
        if (e.keyCode === 13) {
            let title = this.inputRef.current.value;
            addTodo(title);

            this.inputRef.current.value = "";
        }
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

//  将state映射到Counter组件的props
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
//  将action映射到Counter组件的props
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo(todo) {
            const action = addTodo(todo);
            dispatch(action);
        }
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Head)