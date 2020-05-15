import React from 'react';
import {connect} from 'react-redux';
import {editText,sortByDate,sortByAmount,setEndDate, setStartDate} from '../actions/filter';
import {DateRangePicker} from 'react-dates';

class ExpenseFilter extends React.Component{

    state= {
        calenderFocused:null
    }

    onDatesChange =({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calenderFocused)=>{
        this.setState(()=>({calenderFocused}));
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="input__text"  placeholder="Search Expenses" value={this.props.filter.text} onChange={(e)=>{
                            this.props.dispatch(editText(e.target.value))
                        }}/>
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filter.sortBy} onChange={(e)=>{
                            if(e.target.value==="date"){
                                this.props.dispatch(sortByDate());
                            }
                            else if(e.target.value==="amount"){
                                this.props.dispatch(sortByAmount());
                            }
                        }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>    
                    </div>

                    <div className="input-group__text">
                        <DateRangePicker
                        startDate={this.props.filter.startDate}
                        endDate={this.props.filter.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        showClearDates={true}   
                        />
                    </div>
                </div>  
            </div>
        )
    }    
}

const mapStateToProps = (state)=>({   
    filter:state.filter
});

export default connect(mapStateToProps)(ExpenseFilter);