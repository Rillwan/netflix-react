import React from 'react';
import './login.css'
import loginBG from '../img/netflix-logo.png'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const signup = ()=>{
        navigate('/signup')
    }

  return (
    <div className='Login-page'>
       {/*  background image  */}
        <div className="bgm-body"></div>
        <div className="bgm-body-color"></div>

        {/*  Navbar  */}
        <nav className="Login-navbar navbar navbar-expand-lg text-light ">
            {/*  Container wrapper  */}
            <div className="container">
                {/*  Navbar brand  */}
                <a className="navbar-brand me-2" href="/">
                    <img src={loginBG} height="55" width="145" alt="Logo" loading="lazy"
                        style={{marginTop:"-1px"}}/>
                </a>

                {/*  Toggle button  */}
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars text-light" ></i>
                </button>

                {/*  Collapsible wrapper  */}
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    {/*  Left links  */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/*  empty Div */}
                        </li>
                    </ul>
                    {/*  Left links  */}

                    <div className="d-flex align-items-center">
                        <div className="dropdown  ">
                            <button className="btn dropdown-toggle text-light" type="button" id="dropdownMenuButton"
                                data-mdb-toggle="dropdown" aria-expanded="false">
                                English
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="/">Malayalam</a></li>
                                <li><a className="dropdown-item" href="/">Hindi</a></li>
                            </ul>
                        </div>
                        <button type="button" className="login-btn btn me-3 text-light" onClick={signup}>
                            Sign Out
                        </button>

                    </div>
                </div>
                {/*  Collapsible wrapper  */}
            </div>
            {/*  Container wrapper  */}
        </nav>
        {/*  Navbar  */}

        {/*  center  */}
        <div className="login-center-body ">

            <h1>Unlimited movies, TV shows and more.</h1>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="login-body" >
                <form action="/home" method="get">
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">Get Started {">"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;
