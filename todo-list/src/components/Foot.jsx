import React, { Component } from "react";
import PropTypes from "prop-types"

export default class Foot extends Component {
    static propType = {
        finishedCount: PropTypes.number.isRequired,
        totalCount: PropTypes.number.isRequired,
        _deleAllFinsed:PropTypes.func.isRequired,
        _footCheckAll:PropTypes.func.isRequired,
    };
    constructor(props){
        super(props);
        this.state = {
            isChecked:false
        }
    };
    _selected(){
        const {_footCheckAll} = this.props;
        let checked = this.state.isChecked;
        this.setState({
            isChecked:!checked
        })
        _footCheckAll(!checked)
    };
    _isCheckedFalse(){
        this.setState({
            isChecked:false
        })
    };
    render() {
        const {finishedCount,totalCount,_deleAllFinsed} = this.props;
        const {isChecked} = this.state;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" 
                    checked={isChecked}
                    onChange={() => { this._selected()}}
                    />
                </label>
                <span>
                 <span>已完成{finishedCount}件</span> / 总计{totalCount}件
                </span>
                <button 
                onClick={() =>_deleAllFinsed()}
                className="btn btn-warning">清除已完成任务</button>
            </div>
        )
    }
}