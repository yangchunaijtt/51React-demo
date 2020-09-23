import React,{useRef,useEffect,useState} from "react";

function UseRefs(){
    const inputEl = useRef(null);
    const clickBT = () => {
        inputEl.current.value = 'Hello,JSPang';
        setText(inputEl.current.value );
    };
    const [text,setText] = useState('JSPang');
    const textRef = useRef();
    useEffect( () => {
        textRef.current = text;
        console.log('值变化',textRef);
    })
    return (
        <div>
           <h2>useRef获取DOM，保存变量</h2> 
            <input ref={inputEl} type='text' value={text} onChange={((e)=>{ setText(e.target.value)})}></input>
            <button onClick={clickBT}>在input上展示文字</button>
        </div>
    )
};

export default UseRefs;