/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) =>{
        setLoading(true)
        return updateProfile( auth.currentUser, {displayName:name, photoURL:photo})
    }

    const emailLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const userLogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser)=>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}
        setUser(currentUser)
        console.log('Current user...',currentUser);
        setLoading(false)
        if(currentUser){
            axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
            .then(res => {
                console.log('token response',res.data);
            })
        }
        else{
            axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
            .then(res => {
                console.log(res.data);
            })
        }

        })
        
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        userLogOut,
        googleLogin,
        emailLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;