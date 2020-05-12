import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

const defaultForm=[];
const submittedFormReducer=(state=defaultForm,action)=>{
    switch(action.type){
        case 'ADD_ENT':
            return state.concat(action.newEntry);
        default:
            return state
    }
}

const store=createStore(combineReducers({
    submittedForm:submittedFormReducer
}));

store.subscribe(()=>{
    console.log(store.getState())
});

const addEntry = ({
    firstName='',
    lastName='',
    fathersName='',
    mothersName='',
    annualIncome=0,
    address='',
    phoneNo=0
} = {}
) => ({
    type:'ADD_ENT',
    newEntry:{
        firstName,
        lastName,
        fathersName,
        mothersName,
        annualIncome,
        address,
        phoneNo
    }
});

store.dispatch(addEntry({firstName:'ded'}));
