import React, { Component } from "react";
import PropTypes from "prop-types"
import Item from "./Item"

export default class List extends Component {
    
    static propTypes = {
        tods: PropTypes.array.isRequired,
        _romeItem:PropTypes.func.isRequired,
        _changeFinshed:PropTypes.func.isRequired,
    }
    render() {
        const { tods,_romeItem,_changeFinshed } = this.props;
       
        return (
            <ul className="todo-main">
                {tods.map((item, index) => (
                  <Item 
                  _romeItem={_romeItem}
                  _changeFinshed={_changeFinshed}
                  key={item.id} 
                  todItem={item}/>
                ))}
            </ul>
        )

    };
    
}