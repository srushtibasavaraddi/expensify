import React from "react";
import {Router,Route,Switch,Link,NavLink} from 'react-router-dom';  
import EditExpense from '../components/editExpense';
import ExpenseDash from '../components/expense';
import AddExpense from '../components/create';
import FourO from '../components/notFound';
import Login from '../components/login';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

export const history =createHistory();
const AppRouter=()=>(
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDash}/>
                <PrivateRoute path="/edit/:id" component={EditExpense}/> 
                <PrivateRoute path="/create" component={AddExpense}/> 
                <Route component={FourO}/>        
            </Switch>
        </div> 
    </Router>
);

export default AppRouter;