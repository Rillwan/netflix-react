import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';


function Banner() {

  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[0]);
      setMovie(response.data.results[0]);
      // console.log(response.data.results[0].release_date);
    })
  }, []);

  return (
    <div className='BANNER'>
      
        {/* Full Body(backgroung image) */}
        <div
              className="bg-image"
              style={{
                backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : "" })` ,
                backgroundSize: "cover",
                position: "absolute",
              }}
        ></div>
          {/* Banner */}

          <div className='banner' id="home">
              <div className='content'>
                  <h1 className='title'> {movie ? movie.title : ""} </h1>
                  <p className='discription'> {movie ? movie.overview : "" } </p>
                  <p style={{color:'rgb(130, 130, 131)'}} > 2023 <span> | </span>
                   <span style={{ textTransform : "capitalize" }}> { movie ? movie.media_type : "" } </span> <span> |
                      </span> <span style={{marginLeft:'20px'}} > 18+ </span> </p>
                  <div className='banner_buttons'>
                      <button className='button'><i className="far fa-play-circle"></i> Play </button>
                      <button className='button'><i className="fa-solid fa-circle-plus"></i> Add List</button>
                  </div>

              </div>
              {/*  <div className='fade_bottom'></div>  */}
          </div>
      
    </div>
  )
}

export default Banner
