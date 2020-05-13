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
import './firebase/firebase';
//parent can change prop passed causing the child to get rendered  

const store=configureStore();

const appRoot=document.getElementById("app");
const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx,appRoot); 