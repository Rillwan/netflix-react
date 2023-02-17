import React, { useContext, useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import { ListContext } from '../../Context/Context';
import YouTube from 'react-youtube';


function Banner() {

  const [movie, setMovie] = useState();

  const {list,setList} = useContext(ListContext);
  const [urlId, setUrlId] = useState('');


  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[0]);
      setMovie(response.data.results[0]);
      // console.log(response.data.results[0].release_date);
    })
  }, []);

  //add List
  const handleList = ()=>{
    //Adding MyList (str to array convert)
    const newList = movie
    setList([...list,newList]);
  }

  //click poster 
  const handleMovie = ()=>{
    // console.log(obj.id);

    axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      // console.log(response.data);

      if(response.data.results.length !== 0 ){
        // console.log(response.data.results[0]);

        setUrlId(response.data.results[0]);

      }else{
        console.log('Array Empty');
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  //youtube size
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

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
                      <button className='button' onClick={handleMovie}><i className="far fa-play-circle"></i> Play </button>
                      <button className='button' onClick={handleList}><i className="fa-solid fa-circle-plus"></i> Add List</button>
                  </div>

              </div>
          </div>
          {/* auto Play vedio */}
          { urlId && <YouTube opts={opts} videoId={urlId.key} /> }
      
    </div>
  )
}

export default Banner
