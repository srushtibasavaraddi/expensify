import React from "react";
import Form from './form';
import {connect} from 'react-redux';
import {editExpense} from '../actions/expenses';
const EditExpense =(props) =>{
    // console.log(props.);
    return (
        <div>
            <h3>Edit expense!</h3>

            <Form expense={props.expense} 
                onSubmit={(expense)=>{
                    props.dispatch(editExpense(props.expense.id,expense));
                    props.history.push('/');
                    console.log("updated");
                }}/> 
        </div>
    );
}

const mapStateToProps = (state,props)=>({
    expense:state.expense.find((expense)=>props.match.params.id===expense.id)
});

export default connect(mapStateToProps) (EditExpense);