import React, {  useEffect, useState } from 'react';
import './NavBar.css';
import Logo from '../img/netflix.jpg'
import Avatar from '../img/user.jpg'
import Avatar2 from '../img/user2.png'
import { API_KEY, imageUrl } from '../../constants/constants';
import MyList from '../../pages/myList/MyList';
import Search from '../../pages/search/Search';
import axios from "../../axios";


function NavBar(props) {

    const [movie, setMovie] = useState([]);

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);


    //searching
    const handleSearch = (e)=>{
        e.preventDefault();
        // console.log(query);
        axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`).then((response)=>{
            // console.log(response.data);
            if(response.data.results.length !== 0 ){
                // console.log("array");
                setResults(response.data.results);
            }else{
                console.log("Movie not mention")
            }
        })
    }

    //search-box open and close
    const search = ()=>{
        var s = document.getElementById("search");
        if (s.style.display === "none") {
            s.style.display = "block";
        } else {
            s.style.display = "none";
        }
    }

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
                <form className="d-flex input-group w-auto bg-dark rounded-pill mb-2 mb-lg-0 ms-5" onSubmit={handleSearch} >
                    <span className="input-group-text text-white border-0 rounded" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                    <input onClick={search} value={query} onChange={e => setQuery(e.target.value)} type="search" className="form-control rounded-pill bg-dark text-light" placeholder="Search"
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
                            <li><a className="dropdown-item " href="/netflix-react">Manage Profile</a></li>
                            
                            <li><a className="dropdown-item" href="/netflix-react">Your Account</a></li>
                            <li><a className="dropdown-item" href="/netflix-react">Help</a></li>
                            <li className="disabled">
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/netflix-react">Log Out</a></li>
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

    {/* search page */}
    <div className='search-box' id='search'  style={{display:'none'}}>
        <Search value={results} />
    </div>

    </div>
  )
}

export default NavBar;
