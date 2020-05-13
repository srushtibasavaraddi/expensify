import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routes/AppRouter';
import {startSetExpenses} from './actions/expenses';
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

ReactDOM.render(<p>Loading..!!</p>,appRoot);

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx,appRoot); 
}).catch((e)=>{
    console.log("error loading!");
})
