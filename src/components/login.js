import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const Login = (props)=>(
    <div>
        <button onClick={()=>props.dispatch(startLogin())}>Login</button>
    </div>
);

export default connect()(Login);