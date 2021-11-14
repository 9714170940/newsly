import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getParticularData } from '../utils/localstorage';

const PrivateRoute = ({component: Component, isAuth, ...rest}) => {

    const token = getParticularData('token')

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            !!token ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;