import React, { Component } from "react";
import { Link } from "react-router-dom";


class RAbout extends Component {
    render() {
        return (
            <div>
                我是about页
                XXXX
                <Link to="/login">去登录页关注我把</Link>
                <Link to="/flower">老找我吧</Link>
            </div>
        )
    };
    componentDidMount() { }
}


export default RAbout;