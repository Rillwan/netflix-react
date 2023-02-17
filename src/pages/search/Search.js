import React from 'react';
import { imageUrl } from '../../constants/constants';
import './search.css';

function Search(props) {

    // console.log(props.value);
    const results = props.value
    
  return (
    <div className='SEARCH'>
      <div className="search">
        <div className="row">
            <div className="posters">

            {
                results.map((obj) => (
                    <div className="poster" key={obj.id}>
                        <img src={`${imageUrl + obj.poster_path}`} height="300" width="200" alt="Network Error" />
                    </div>
                ))
            }
                  
            </div>
        </div>
    </div>
    </div>
  )
}

export default Search
