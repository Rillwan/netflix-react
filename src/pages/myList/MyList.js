import React, { useContext } from 'react';
import { imageUrl } from '../../constants/constants';
import { ListContext } from '../../Context/Context';
import './myList.css';

function MyList() {

    const {list} = useContext(ListContext);

    // console.log(list);

    //Delete list
    const handleDelete = ()=>{
        // console.log("Delete Button Not work,Notification Bell  Not Completed");
    }

    return (
        <div className='MYLIST'>
            <div className="mylist">
                <div className="head">
                    <h1>My List</h1>
                </div>
                <div className="contents">
                    <ul className="list-items">

                    { list.map((obj) => 
                        (
                        
                            <li className="list-item" key={obj.id}>
                                <span><img src={`${imageUrl + obj.backdrop_path}`}
                                    alt="poster" /></span>                        
                                <h3>{obj.name ? obj.name : obj.original_title }</h3>
                                <p>2023</p>
                                <p>Movie</p> 
                                <p><i className="fas fa-trash" onClick={handleDelete()} ></i></p>
                            </li>
                        ))
                    }
         
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyList
