import React from 'react'
import './Login.css'
import Logo from './Logo.png'

function Login() {
    return (
        <div className='login'>
            <img src={Logo} alt="" />
            <form>
               <input placeholder="Full name (required if registering)" type="text" /> 
               <input placeholder="Profile pic URL(optional) "type ="text"/>
               <input placeholder="Email" type="email"/>
               <input placeholder="Password" type="password"/>
               <button>Sign In</button>
            </form>
            <p>Not a member?</p>
            <span>Register Now</span>
        </div>
    )
}
export default Login
