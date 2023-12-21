import React from 'react';
import './LoginSignup.css'
import { FaUser, FaLock,  } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from 'react';

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up")

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                    <input type="text" placeholder='Full Name'/>
                    <FaUser className='icon' />
                </div>}
                <div className="input">
                    <input type="email" placeholder='Email'/>
                    <MdAlternateEmail className='icon'/>
                </div>
                <div className="input">
                    <input type="password" placeholder='Password'/>
                    <FaLock className='icon'/>                 
                </div>
            </div>
            {action==="Sign Up"?<div></div>:  <div className="forgot-password">
                Forgot Password? <span>Click Here!</span>
            </div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}} >Login</div>
            </div>
        </div>
    )
}

export default LoginSignup