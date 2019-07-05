import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import LoginPage  from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;



