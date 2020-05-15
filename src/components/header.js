import React from "react";
import {Link} from 'react-router-dom';  
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

const Header =(props) =>(
    <header className="header">
        <div className="content-container">
            <div className="header__container">
                <Link to="/dashboard" className="header__title" >
                    <h1>Expensify!</h1>
                </Link>
                <button className="button button--link" onClick={()=>props.dispatch(startLogOut())}>Logout</button>
            </div>
        </div>
    </header>
);

export default connect() (Header);

// <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//         <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>