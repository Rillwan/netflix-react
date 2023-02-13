import React, { useEffect, useState } from 'react';
import './NavBar.css';
import Logo from '../img/netflix.jpg'
import Avatar from '../img/user.jpg'
import Avatar2 from '../img/user2.png'
import axios from 'axios';
import { imageUrl } from '../../constants/constants';
import MyList from '../../pages/myList/MyList';
// import { useNavigate } from 'react-router-dom';

function NavBar(props) {

    const [movie, setMovie] = useState([]);
    // const navigate = useNavigate();

    //---------Navbar
    //(services)_right links
    const ActiveBtn = ()=>{
        const service = document.querySelectorAll(".service");
        if (service.length) {
            service.forEach((obj) => {
                obj.addEventListener("click", (e) => {
                    service.forEach((obj) => {
                        obj.classList.remove("active");
                    });
                    obj.classList.add("active");
                });
            });
        }
    }

    // user DropDown Bar
    const toggleUser = (e)=>{
        e.preventDefault();
        var x = document.getElementById("UserBox");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    // bell Notification Box
    var BellDown = false;
    const toggleBell = (e)=>{
        e.preventDefault();
        const BellBox = document.getElementById("BellBox");
        const BellActive = document.getElementById("Bell-active")    
        if (BellDown) {
                BellActive.style.color = "white"
                BellBox.style.height = "0px";
                BellBox.style.opacity = 0; 
                BellDown = false;
         } else {
                BellActive.style.color = "red"
                BellBox.style.height = "100vh";
                BellBox.style.opacity = 1;
                BellDown = true;
         };
    }

    //get TMDB data collections upcoming Notification Bell
    useEffect(() => {
        axios
        .get(props.url)
        .then((response) => {
            // console.log(response.data.results);
            setMovie(response.data.results);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [props]);

    // console.log(movie.map((obj)=>obj.title))

    // const myList = (e)=>{
    //     e.preventDefault()
    //     navigate('/mylist')
    // }

  return (
    <div>
          {/*  Navbar  */}
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark ">
        {/*  Container wrapper  */}
        <div className="container-fluid">
            {/*  Navbar brand  */}
            <a className="navbar-brand ms-3" href="/">
                <img src={Logo} height="30" alt="logo" loading="lazy" />
            </a>

            {/*  Toggle button  */}
            <button className="navbar-toggler " type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>

            {/*  Collapsible wrapper  */}
            <div className="collapse navbar-collapse " id="navbarSupportedContent">

                {/*  Search form  */}
                <form className="d-flex input-group w-auto bg-dark rounded-pill mb-2 mb-lg-0 ms-5">
                    <span className="input-group-text text-white border-0 rounded" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                    <input type="search" className="form-control rounded-pill bg-dark text-light" placeholder="Search"
                        aria-label="Search" aria-describedby="search-addon" style={{ border:'none', boxShadow:'none', width: '50%'}}
                         />
                </form>

                {/*  Left links  */}
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item me-3 ">
                        <a className=" nav-link service " onClick={ActiveBtn} aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link service" onClick={ActiveBtn} href="#movies">TV Shows</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link service" onClick={ActiveBtn} href="#popular">Movies</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link service" onClick={ActiveBtn} href="#music">Music</a>
                    </li>

                    {/* MyList */}
                    <li className="nav-item me-3">
                        <a className="nav-link service" onClick={ActiveBtn}  role="button" data-mdb-toggle="collapse" href="#collapseExample"  aria-expanded="false"
                        aria-controls="collapseExample" ><span>My List</span></a>
                    </li>
                </ul>

                {/*  Left links  */}

                <ul className="navbar-nav mb-2 mb-lg-0">
                    {/*  Navbar dropdown Notification Bell */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle hidden-arrow " href="/"  role="button" onClick={toggleBell}>
                            <i className="fas fa-bell " id="Bell-active"></i>
                        </a>

                        <ul id="BellBox" className="bell-notify  p-1 text-light"
                            style={{backgroundColor:'black', boxShadow:'0px 0px 10px 2px rgba(255, 255, 255, 0.152)'}}>
                            { movie.map((obj)=>(
                                <li key={obj.id}>
                                    <div className="row">
                                        <div className="col-md">
                                            <img src={`${imageUrl + obj.backdrop_path}`} alt="movie" 
                                                height='63' width='auto' />
                                        </div>
                                        <div className="col-md">
                                            <p className="mb-0" style={{fontSize:"smaller",color:"red"}}>New</p>
                                            <p className="h6 mb-1"> {obj.title ? obj.title : ""} </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle toggle-user-button" href="/" role="button"
                        onClick={toggleUser}
                            >
                            <img src={Avatar} className="rounded-circle img-fluid" height='25' width='25' alt='avatar' />
                        </a>
                        {/*  Dropdown menu  */}
                        <ul id="UserBox" className="User-notify p-1 text-light " style={{display:'none'}}>
                            <li className="my-2 d-flex align-items-center">
                                <img src={Avatar2}
                                    className="rounded-circle img-fluid me-1" height='25' width='25' alt='avatar' /><span> welcome
                                    </span>
                            </li>
                            <li><a className="dropdown-item " href="/">Manage Profile</a></li>
                            
                            <li><a className="dropdown-item" href="/">Your Account</a></li>
                            <li><a className="dropdown-item" href="/">Help</a></li>
                            <li className="disabled">
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/">Log Out</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

    {/* MyList Page */}
    <div className="collapse mt-3" id="collapseExample">
        <MyList />     
    </div>

    </div>
  )
}

export default NavBar
