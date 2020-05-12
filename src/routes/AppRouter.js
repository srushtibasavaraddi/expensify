import React from "react";
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';  
import EditExpense from '../components/editExpense';
import ExpenseDash from '../components/expense';
import AddExpense from '../components/create';
import Header from '../components/header';
import FourO from '../components/notFound';

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDash} exact={true}/>
                <Route path="/edit/:id" component={EditExpense}/> 
                <Route path="/create" component={AddExpense}/> 
                <Route component={FourO}/>        
            </Switch>
        </div> 
    </BrowserRouter>
);

export default AppRouter;