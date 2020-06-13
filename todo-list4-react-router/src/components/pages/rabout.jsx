import React, { Component } from "react";
import { Link } from "react-router-dom";



class RAbout extends Component {
    // constructor(props) {
    //     super(props);
    // };
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
    componentDidMount() {
        // console.log("about页", this.props);
    }
}

export default RAbout;