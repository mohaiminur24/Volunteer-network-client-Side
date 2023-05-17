import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../FirebaseConfigLayout/FirebaseConfig';



export const Authcontext = createContext(null);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();


const AuthcationContext = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Firebase all function start from here
    const handleCreteUser = (email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass);
    };

    const loggedout = ()=>{
        setLoading(true);
        return signOut(auth);
    };

    const handleLoginUser = (email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    };

    const googleLogin = ()=>{
        return signInWithPopup(auth, googleprovider);
    };




    // Firebase Action user function is here
    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth, loggeduser=>{
            setuser(loggeduser);
            setLoading(false);
        })
        return ()=>{
            return unsuscribe;
        }
    },[]);



    const AuthValue ={
        user,
        handleCreteUser,
        loggedout,
        handleLoginUser,
        loading,
        googleLogin
    }



    return (
        <Authcontext.Provider value={AuthValue}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthcationContext;