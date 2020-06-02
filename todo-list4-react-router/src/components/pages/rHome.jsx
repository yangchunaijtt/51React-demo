import React,{Component} from "react";
import {Link} from "react-router-dom"



const list = [
    {
        id:1,path:"/",title:"主页",lib:"123"
    },
    {
        path:"/rabout",title:"RAbout 组件",lib:"www"
    },
    {
        path:"/rcontaine",title:"RContaine 组件",lib:"2sdsadsad"
    },
];


class RHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            list
        }
    };
    render(){
        return (
            <div>
                我是主页
                <ul>
                    {
                        this.state.list.map((value,index) => {
                            return (
                                <li key={index}>
                                    <Link to={value.path}>{value.title}</Link>
                                    <br/>
                                    <Link to={`/rabout?lib=${value.lib}`}>{value.title}哈哈哈</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default RHome;