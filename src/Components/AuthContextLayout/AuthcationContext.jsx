import React, { createContext, useState } from 'react';



const Authcontext = createContext(null);

const AuthcationContext = ({children}) => {
    const [user, setuser] = useState(null);



    const AuthValue ={
        user
    }



    return (
        <Authcontext.Provider value={AuthValue}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthcationContext;