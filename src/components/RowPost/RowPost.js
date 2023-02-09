import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return (
    <div className="ROWPOST">
      {/* <!--Row Post--> */}
      <div className="row row-post" style={{ margin: "0" }} id={props.tag}>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj) => (
            <img
              src={`${imageUrl + obj.backdrop_path}`}
              alt="loading"
              className={props.isSmall ? "small-poster" : "poster"}
              key={obj.id}
            />
          ))}
        </div>
        {/* <YouTube /> */}
      </div>
    </div>
  );
}

export default RowPost;
