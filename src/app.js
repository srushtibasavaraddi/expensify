import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routes/AppRouter';
import {addExpense} from './actions/expenses';
import {editText} from './actions/filter';
import configureStore from './store/configureStore';
import getVisibleExpense from './selectors/expenses';
import {Provider} from 'react-redux';
//parent can change prop passed causing the child to get rendered  

const store=configureStore();
// console.log(store);
store.dispatch(addExpense({description:'paid water bill',amount:14523}));
store.dispatch(addExpense({description:'rent',amount:1553,createdAt:1999}));
store.dispatch(addExpense({description:'gas bill',amount:14,createdAt:199}));
// store.dispatch(editText('paid'));
// console.log(store.getState());
// setTimeout(()=>{
//     store.dispatch(editText('rent'));
// },2000);

const state=store.getState();
const visibleExpense=getVisibleExpense(state.expense,state.filter);
// console.log(visibleExpense);
const appRoot=document.getElementById("app");
const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx,appRoot); 