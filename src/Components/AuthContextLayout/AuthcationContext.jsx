import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../FirebaseConfigLayout/FirebaseConfig';



export const Authcontext = createContext(null);
const auth = getAuth(app);


const AuthcationContext = ({children}) => {
    const [user, setuser] = useState(null);


    // Firebase all function start from here
    const handleCreteUser = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass);
    };

    const loggedout = ()=>{
        return signOut(auth);
    };

    const handleLoginUser = (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    };




    // Firebase Action user function is here
    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, loggeduser=>{
            setuser(loggeduser);
        })
        return ()=>{
            return unsuscribe;
        }
    },[]);



    const AuthValue ={
        user,
        handleCreteUser,
        loggedout,
        handleLoginUser
    }



    return (
        <Authcontext.Provider value={AuthValue}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthcationContext;