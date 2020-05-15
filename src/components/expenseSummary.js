import React from 'react';
import sum from '../selectors/sum_expense';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selector from '../selectors/expenses';
import {Link } from 'react-router-dom';



const ExpenseSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expenseLength}</span> expenses with total of <span>{numeral(props.totalAmount/100).format('$0,0.00')}</span></h1>
                <div className="page-header__action">
                    <Link className="button" to="/create">Add Expense</Link>            
                </div>
        </div>
    </div>
);


const mapToState=(state)=>{
    return {    
        totalAmount:sum(state.expense),
        expenseLength:selector(state.expense,state.filter).length
    }
}

export default connect(mapToState) (ExpenseSummary);