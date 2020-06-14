/**
 * Routes of the app
 * @author Daniel Rodriguez
 */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; 
import { createBrowserHistory as createHistory } from 'history';

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
                    <Route path="/" component={LoginPage} exact={true} />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/projects" component={ProjectsPage} />
                </Switch>
            </div>
        </Router>
    )
}
