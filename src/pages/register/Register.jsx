import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import './register.scss'
function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    className='logo' 
                />
                <button className='loginButton'>Sign Up</button>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email? (
                    <div className='input'>
                        <input type="email" placeholder='Email Address' ref={emailRef} />
                        <button className='registerButton' onClick={handleStart}>Get Started</button>
                    </div>
                ): (
                    <form className='input'>
                        <input type="password" placeholder='password' ref={passwordRef} />
                        <button className='registerButton' onClick={handleFinish}>
                            Start
                        </button>
                    </form>
                )}
                

            </div>
        </div>
      
    </div>
  )
}

export default Register
