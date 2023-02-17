import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import "./RowPost.css";
import { API_KEY, imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";
import { ListContext } from "../../Context/Context";


function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState('');

  const {list,setList} = useContext(ListContext);


  //get TMDB data collections
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        // console.log(response.data);
        setMovie(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  //youtube size
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  //click poster 
  const handleMovie = (obj)=>{
    // console.log(obj);

    //Adding MyList (str to array convert)
    const newList = obj
    setList([...list,newList]);

    axios.get(`/movie/${obj.id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
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

  return (
    <div className="ROWPOST">
      {/* <!--Row Post--> */}
      <div className="row row-post" style={{ margin: "0" }} id={props.tag ? props.tag : null}>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj) => (
            <img
              src={`${imageUrl + obj.backdrop_path}`}
              alt="loading"
              className={props.isSmall ? "small-poster" : "poster"}
              key={obj.id}
              onClick={()=>handleMovie(obj)}
            />
          ))}
        </div>
        {/* auto Play vedio */}
        { urlId && <YouTube opts={opts} videoId={urlId.key} /> }
      </div>
    </div>
  );
}

export default RowPost;
