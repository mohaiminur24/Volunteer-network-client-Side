import React, { useContext } from 'react';
import { Authcontext } from './AuthcationContext';
import LoadingLayout from '../ShareableComponent/LoadingLayout';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext);
    const location = useLocation();

    if(loading){
        return <LoadingLayout/>
    };

    if(user){
        return children;
    };


    return <Navigate to="/login" state={{from:location}} replace/>
};

export default PrivateRoute;