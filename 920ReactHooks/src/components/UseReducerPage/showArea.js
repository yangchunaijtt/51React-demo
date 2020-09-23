import React,{useContext} from 'react';
import "./reducer.css"
import {ColorContext} from "./color";

function ShowArea () {
    const { color } = useContext(ColorContext);
    return (
        <div  style={{color:color}}>
            字体的颜色为{color}
        </div>
    )
}

export default ShowArea;