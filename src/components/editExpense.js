import React from "react";
import Form from './form';
import {connect} from 'react-redux';
import {startEditExpense,startRemoveExpense} from '../actions/expenses';
const EditExpense =(props) =>{
    // console.log(props.);
    return (
        <div>
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">Edit expense</h1>
            </div>
        </div>

        
        <div className="content-container">
            <Form expense={props.expense} 
            onSubmit={(expense)=>{
                props.dispatch(startEditExpense(props.expense.id,expense));
                props.history.push('/dashboard');
            }}/> 
            <button className="button button--remove" onClick={()=>
                {props.dispatch(startRemoveExpense(props.expense.id));
                    props.history.push('/dashboard');
                }
            }>remove expense</button>
        </div>
        </div>
    );
}

const mapStateToProps = (state,props)=>({
    expense:state.expense.find((expense)=>props.match.params.id===expense.id)
});

export default connect(mapStateToProps) (EditExpense);