import React, { useState } from 'react'
import { login } from './features/userSlice';
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import './Login.css'
import Logo from './Logo.png'

function Login() {
    const[email ,setEmail]= useState("");
    const[password ,setPassword]= useState("");
    const[name ,setName]= useState("");
    const[profilepic ,setProfilePic]= useState("");
    const dispatch = useDispatch();
    const logintoApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        }).catch((error) => alert(error));
    };
    const register = () => {
        if(!name){
            return alert('please enter a full name');
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilepic,
                
            })
            .then(()=>{
               dispatch(login({
                   email: userAuth.user.email,
                   uid: userAuth.user.uid,
                   displayName: name,
                   photoURL: profilepic,
               }))
            })
        })
        .catch((error)=> alert(error.message));
    };
    return (
        <div className='login'>
            <img src={Logo} alt="" />
            <form>
               <input value={name} onChange={e=> setName(e.target.value)} placeholder="Full name (required if registering)" type="text" /> 
               <input value={profilepic} onChange={e=> setProfilePic(e.target.value)} placeholder="Profile pic URL(optional) "type ="text"/>
               <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
               <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
               <button type='submit' onClick={logintoApp}>Sign In</button>
            </form>
            <p>Not a member?{' '}</p>
            <span className="login__register" onClick={register}>Register Now</span>
        </div>
    )
}
export default Login
