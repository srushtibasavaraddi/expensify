import React from "react";
import {NavLink} from 'react-router-dom';  
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

const Header =(props) =>(
    <header>
        <h1>Expenssify!</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <button onClick={()=>props.dispatch(startLogOut())}>Logout</button>
    </header>
);

export default connect() (Header);