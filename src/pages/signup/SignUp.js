import React from 'react';
import './signup.css';
import SignBG from '../img/netflix-logo.png'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    const homepage = ()=>{
        navigate('/home')
    }

  return (
    <div>
        <div className="signup-page">
            <a className="logo" href="/" target="_blank"><img src={SignBG} alt="logo"/></a>
            <form className="signup" action="home">
                <h1 className="signup__title">Sign In</h1>
                <div className="signup__group">
                    <input className="signup__group__input" type="text" placeholder="Email or phone number" required />
                </div>
                <div className="signup__group">
                    <input className="signup__group__input" type="password" placeholder="Password" required />
                </div>
                <button className="signup__sign-in" type="submit" onClick={homepage}>Sign In</button>
                <div className="signup__secondary-cta"><a className="signup__secondary-cta__text" href="/">Remember me</a>
                    <a className="signup__secondary-cta__text signup__secondary-cta__text--need-help" href="/">Need help?</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp
