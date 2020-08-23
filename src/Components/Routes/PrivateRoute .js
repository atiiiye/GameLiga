import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // console.log('PrivateRoute')
    return (

        <Route {...rest} render={props => (
            isLogin()
                ? <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;