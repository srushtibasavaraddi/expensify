import React from "react";
import ReactDOM from "react-dom";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter,{history} from './routes/AppRouter';
import {startSetExpenses} from './actions/expenses';
import {login,logout} from './actions/auth';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {firebase} from './firebase/firebase';
import Loader from './components/loader';
//parent can change prop passed causing the child to get rendered  

const store=configureStore();

const appRoot=document.getElementById("app");
const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


let hasRendered=false;

const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,appRoot); 
        hasRendered=true;
    }
}
ReactDOM.render(<Loader/>,appRoot);
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname==='/'){
                history.push('/dashboard');
            } 
        }).catch((e)=>{
            console.log("error loading!");
        })
    }else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
})