import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class Form extends React.Component{
    constructor(props){
            super(props);
            // console.log( props.expense.description);
            this.state={
                description:props.expense? props.expense.description:'',
                note:props.expense? props.expense.note:'',
                amount:props.expense?(props.expense.amount/100).toString():'',
                createdAt:props.expense?moment(props.expense.createdAt):moment(),
                calenderFocused:false,
                error:''
        }
    }

    onDescriptionChange=(e)=>{
        const description=e.target.value
        this.setState(()=>({description}))
    }

    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}));
    }

    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({
                amount
            }))
        }
    }

    onFocusChange=({focused})=>{
        this.setState(()=>({calenderFocused:focused}));
    }

    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}));            
            }
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:"Form incomplete"}))
        }
        else{
            this.setState(()=>({error:''}))
        }

        this.props.onSubmit({
            description:this.state.description,
            amount:parseFloat(this.state.amount,10)*100,
            createdAt:this.state.createdAt.valueOf(),
            note:this.state.note
        });
    }

    render() {
        return (
                <form  className="form" onSubmit={this.onSubmit}>
                <p className="form__error" >{this.state.error}</p>
                <input className="input__text" type="text" placeholder="description"
                onChange={this.onDescriptionChange}/>
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    onFocusChange={this.onFocusChange}
                    focused={this.state.calenderFocused}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
                <input className="input__text" value={this.state.amount} placeholder="amount" onChange={this.onAmountChange}/>
                <textarea className="textarea" placeholder="Add note about expense here (optional)"
                    onChange={this.onNoteChange}
                />
                <div>
                    <button className="button">Add Expense</button>
                </div>
                
                </form>
        )
    }
}