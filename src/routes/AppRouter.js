/**
 * Routes of the app
 * @author Daniel Rodriguez
 */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

// Components
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import ProfilePage from '../components/ProfilePage';
import ProjectsPage from '../components/ProjectsPage';

export const history = createHistory();

export const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PrivateRoute path="/dashboard" component={DashboardPage} />
                    <PrivateRoute path="/profile" component={ProfilePage} />
                    <PrivateRoute path="/projects" component={ProjectsPage} />
                    <Route path="/" component={LoginPage} />
                </Switch>
            </div>
        </Router>
    )
}
