import React from 'react';
import ShowArea from "./showArea";
import Buttons from "./Buttons.js"
import {Color} from "./color"

function ReducerPage() {
    return (
        <div>
            <h2>useReducer</h2>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default ReducerPage;