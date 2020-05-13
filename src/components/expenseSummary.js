import React from 'react';
import sum from '../selectors/sum_expense';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selector from '../selectors/expenses';



const ExpenseSummary = (props) => (
    <div>
        Viewing {props.expenses.length} expenses with total of {numeral(props.totalAmount/100).format('$0,0.00')}
    </div>
);


const mapToState=(state)=>{
    return {    
        totalAmount:sum(state.expense),
        expenses:selector(state.expense,state.filter)
    }
}

export default connect(mapToState) (ExpenseSummary);