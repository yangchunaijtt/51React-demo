import React, { Component } from "react";
import Item from "./Item"
import { connect } from 'react-redux'

class List extends Component {
    constructor(props) {
        super(props);
    };
    render() {
<<<<<<< HEAD
        const { todos } = this.props;
=======
        const {todos }= this.props;
>>>>>>> react
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
//  将state映射到Counter组件的props
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}



export default connect(
    mapStateToProps,
    null
)(List)