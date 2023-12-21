import React from 'react';
import './LoginForm.css'
import { FaUser, FaLock,  } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";





const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign up</h1>
                <div className="input-box">
                    <input type="text" placeholder='First Name' required/>
                    < FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Last Name' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email' required/>
                    <MdAlternateEmail className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <button type="submit">Sign Up</button>

                <div className="login-link">
                    {/* <p>Already have an account? <a href="Login"></a></p> */}
                </div>
            </form>
        </div>
    )
}

export  default LoginForm;