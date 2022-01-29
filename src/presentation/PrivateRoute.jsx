import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getParticularData } from '../utils/localstorage';

const PrivateRoute = ({component: Component, isAuth, ...rest}) => {

    const token = getParticularData('token')

    return (
        <Route {...rest} render={props => (
            !!token ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;