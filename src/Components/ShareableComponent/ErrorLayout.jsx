import React from 'react';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';

const ErrorLayout = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='text-center'>
                <img className='w-32 h-auto mx-auto' src="https://easydrawingguides.com/wp-content/uploads/2021/12/cute-dog-step-by-step-drawing-tutorial-step-10.png" alt="" />
                <h1 className='text-4xl font-bold text-red-500'>{error.status}</h1>
                <h2>{error.statusText}</h2>
                <p>{error.data}</p>
                <button onClick={()=>navigate("/")} className='btn btn-success font-bold text-white mt-5 focus:bg-green-700'>Back to Home</button>
            </div>
        </div>
    );
};

export default ErrorLayout;