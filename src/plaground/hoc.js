import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
        Hi there! {props.info}
    </div>
);

const HigherComp=(props)=>(
    <div>
        This is private.
        <Info {...props}></Info>
    </div>
);
const appRoot=document.getElementById("app");
ReactDOM.render(<HigherComp info="sru"/>,appRoot);