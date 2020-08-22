import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    console.log('PublicRoute')
    return (
        // restricted = false meaning public route /
        // restricted = true meaning restricted route signup

        <Route {...rest} render={props => (
            isLogin() && restricted
                ? <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;