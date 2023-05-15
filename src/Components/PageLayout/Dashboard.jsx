import React from 'react';
import EventHeader from '../ShareableComponent/EventHeader';

const Dashboard = () => {
    return (
        <>
        <EventHeader>Dashboard</EventHeader>
        <div className="w-full bg-white p-10 rounded-md flex justify-center items-center border-[20px] min-h-[calc(100vh-100px)] border-gray-100">
            <h1 className="text-3xl font-bold font-inter">Welcome to Admin panel</h1>
        </div>
        </>
    );
};

export default Dashboard;