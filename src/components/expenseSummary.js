import React from 'react';
import sum from '../selectors/sum_expense';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selector from '../selectors/expenses';



const ExpenseSummary = (props) => (
    <div>
        <h3>Viewing {props.expenseLength} expenses with total of {numeral(props.totalAmount/100).format('$0,0.00')}</h3>
    </div>
);


const mapToState=(state)=>{
    return {    
        totalAmount:sum(state.expense),
        expenseLength:selector(state.expense,state.filter).length
    }
}

export default connect(mapToState) (ExpenseSummary);