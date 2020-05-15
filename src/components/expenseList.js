import React from 'react';
import {connect} from 'react-redux';
import ExportListComponent from './expenseListComponent';
import selector from '../selectors/expenses';
import ExpenseFilter from './expenseFilter';
import ExpenseSummary from './expenseSummary';

const ExpenseList =(props)=>(
    <div>
        <ExpenseSummary/>
        <ExpenseFilter/>
        <div className="content-container">
        <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {props.expenses.map((expense)=><ExportListComponent key={expense.id} {...expense}/>)}
        </div>
        </div>
    </div>
);

const mapToState=(state)=>{
    return {    
        expenses:selector(state.expense,state.filter)
    }
}

export default connect(mapToState)(ExpenseList);
