import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';

const ExportListComponent=({description,amount,createdAt,dispatch,id})=>(
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{createdAt}-{amount}</p>
        <button onClick={()=>{dispatch(removeExpense({id}))}}>remove expense</button>
    </div>
);

export default connect()(ExportListComponent);