import React, { Component } from "react";
import { Link } from "react-router-dom"

class Flower extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                Flower
                <Link to="/login">去登录页关注我把</Link>
                <p>
                    传入的参数：{this.props.match.params.id}
                </p>
            </div>
        )
    };
    componentDidMount() {
        console.log("flower页", this.props, this.props.match.params.id);
    }
}

export default Flower;