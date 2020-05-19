import React, { Component } from "react";
import PropTypes from "prop-types"

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    static propTypes = {
        _addOneTodo: PropTypes.func.isRequired
    }
    addOne = (e) => {
        const { _addOneTodo } = this.props;
        if (e.keyCode === 13) {
            let value = this.inputRef.current.value;
            _addOneTodo(value);
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