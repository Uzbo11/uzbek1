import React from 'react';
import './LoginForm.css'
// import { FaUser, FaLock, MdAlternateEmail } from "react-icons/fa";




const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign up</h1>
                <div className="input-box">
                    <input type="text" placeholder='First Name' required/>
                    {/* <FaUser className='icon'/> */}
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Last Name' required/>
                    {/* <FaUser className='icon'/> */}
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email' required/>
                    {/* <MdAlternateEmail className='icon'/> */}
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    {/* <FaLock className='icon'/> */}
                </div>

                <div className="remember-forot"></div> 
            </form>
        </div>
    )
}

export  default LoginForm;