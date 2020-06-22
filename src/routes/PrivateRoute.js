/**
 * Routes protected by authentication
 * @author Daniel Rodriguez
 */
import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props) => (
                <div>
                    <NavBar {...props} />
                    <Component {...props} />
                </div>
            )}
        />
    )
}

export default PrivateRoute
