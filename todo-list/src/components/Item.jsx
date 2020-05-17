import React, { Component } from "react";
import PropTypes from "prop-types"

export default class Item extends Component {
    static propTypes = {
        todItem: PropTypes.object.isRequired
    }
    constructor(props) {
        super(props)
        this.state = {
            hasFlag: false
        }
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
                    <input type="checkbox" />
                    <span>{todItem.title}</span>
                </label>
                <button className="btn btn-warning" style={{ display: hasFlag ? "block" : "none" }}>删除</button>
            </li>
        )
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
}