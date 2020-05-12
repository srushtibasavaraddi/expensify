import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

const expenseReducerDefaultState=[];
const expenseReducer = (state=expenseReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXP':
            return [...state,action.expense];
        case 'REM_EXP':
            return state.filter(({id})=>id!==action.id);
        case 'EDIT_EXP':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    console.log(action);
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense
                }
                
            });
        default:
            return state
    }
}

const filterReducerDefaultState={
    text:'rent',
    sortBy:'amount',
    startDate:undefined,
    endDate:undefined
};

const filterReducer = (state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'CNG_TEXT':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT_AMT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'STR_DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }
        default:
            return state
    }
}

const store=createStore(
    combineReducers({
        expense:expenseReducer,
        filter:filterReducer
    })
);
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch= typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch= typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = text===undefined || expense.description.toLowerCase().includes(text.toLowerCase());  
        // console.log(startDateMatch,endDateMatch,textMatch);
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1 :-1;
        }else if(sortBy==='amount'){
            return a.amount < b.amount?1:-1;
        }
    });
   
}

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expense,state.filter)
    console.log(visibleExpenses);
});

const addExpense= ({
    description='',
    note='',
    amount=0,
    createdAt=0
    } = {}
) => ({
    type:"ADD_EXP",
    expense:{
        id:uuid(),
        amount,
        description,
        note,
        createdAt
    }
});

const removeExpense= ({id}={})=>(
    {
        type:"REM_EXP",
        id
    }
);

const editExpense=(id,updates={})=>(
    {
        type:'EDIT_EXP',
        id,
        updates
    }
);

const editText=(text='')=>({
    type:'CNG_TEXT',
    text
});

const sortByDate=()=>({
    type:'SORT_DATE'
});


const sortByAmount=()=>({
    type:'SORT_AMT'
});

const setStartDate=(startDate)=>({
    type:'STR_DATE',
    startDate
});

const setEndDate=(endDate)=>({
    type:'END_DATE',
    endDate
});
const expenseOne=store.dispatch(addExpense({description:'rent paind',amount:15523,createdAt:4444}));
const expenseTwo=store.dispatch(addExpense({description:'wee rent',amount:1233,createdAt:1000}));
// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:300}));
// store.dispatch(editText('ee'));
// store.dispatch(editText());
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(12003));
// store.dispatch(setEndDate(553335));
// store.dispatch(setStartDate(443));
// store.dispatch(setStartDate(448));
// console.log(temp);
const demoState= {
    expense:[{
        id:'1323d',
        description:'asdads',
        note:'sfdf',
        amount:123,
        createdAt:0
    }],
    filter:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}
