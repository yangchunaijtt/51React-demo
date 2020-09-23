import React,{ useState, useEffect, useCallback } from 'react';
import useWinSize from "./useWinSize";




function MackHooks() {
    const size= useWinSize({});
    return (
        <div>
            <h2>自定义Hooks函数</h2>
            <p>useCallback，用于，缓存方法</p>
            <p>宽度：{size.width}</p>
            <p>高度：{size.height}</p>
        </div>
    )
};


export default MackHooks;