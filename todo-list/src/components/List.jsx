import React, { Component } from "react";
import PropTypes from "prop-types"
import Item from "./Item"

export default class List extends Component {
    
    static propTypes = {
        tods: PropTypes.array.isRequired,
        _romeItem:PropTypes.func.isRequired
    }
    render() {
        const { tods,_romeItem } = this.props;
       
        return (
            <ul className="todo-main">
                {tods.map((item, index) => (
                  <Item 
                  _romeItem={_romeItem}
                  key={item.id} 
                  todItem={item}/>
                ))}
            </ul>
        )

    };
    
}