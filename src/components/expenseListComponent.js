import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExportListComponent=({description,amount,createdAt,dispatch,id})=>(
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{moment(createdAt).format('Do MMMM,YYYY')}-{numeral(amount/100).format('$0,0.00')}</p>
        <button onClick={()=>{dispatch(removeExpense({id}))}}>remove expense</button>
    </div>
);

export default connect()(ExportListComponent);