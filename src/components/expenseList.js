import React from 'react';
import {connect} from 'react-redux';
import ExportListComponent from './expenseListComponent';
import selector from '../selectors/expenses';
import ExpenseFilter from './expenseFilter';
import ExpenseSummary from './expenseSummary';

const ExpenseList =(props)=>(
    <div>
        <h2>Expense list</h2>
        <ExpenseSummary/>
        <ExpenseFilter/>
        {props.expenses.map((expense)=><ExportListComponent key={expense.id} {...expense}/>)}
    </div>
);

const mapToState=(state)=>{
    return {    
        expenses:selector(state.expense,state.filter)
    }
}

export default connect(mapToState)(ExpenseList);
