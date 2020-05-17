import React, { Component } from "react";
import PropTypes from "prop-types"
import Item from "./Item"

export default class List extends Component {
    
    static propTypes = {
        tods: PropTypes.array.isRequired,
    }
    render() {
        const { tods } = this.props;
       
        return (
            <ul className="todo-main">
                {tods.map((item, index) => (
                  <Item key={item.id} todItem={item}/>
                ))}
            </ul>
        )

    };
    
}