import React, {useState} from 'react';
import axios from 'axios';
import {useParams, useHistory} from "react-router-dom";

const initialState = {
    id: Date.now(),
    title: "",
    director: "",
    metascore: "",
    stars: []
    };


const UpdateMovie = (props) => {
    const {id} = useParams();
    const {push} = useHistory();
    const [inputs, setInputs] = useState(initialState);

    const handleChange = (e) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${id}`, inputs)
        .then((res) => {
            console.log('res', res)
        })
        .catch((err) => {
            console.log('err', err)
        })

        setInputs(initialState);
        push(`/`);

    }
    

    return (
     <div className="movie-card flex-container">
         <h2>Update Movie</h2>
         <form onSubmit={handleSubmit} className="flex-container">
         <label htmlFor='title' className='inputLabel'>
             Title:
             <input
             name='title'
             id='title'
             onChange={handleChange}
             ></input>
         </label>
         <label htmlFor='director' className='inputLabel'>
             Director:
             <input
             name='director'
             id='director'
             onChange={handleChange}
             ></input>
         </label>
         <label htmlFor='metascore' className='inputLabel'>
             Metascore:
             <input
             name='metascore'
             id='metascore'
             onChange={handleChange}
             ></input>
         </label>
         {/* <label htmlFor='actors' className='inputLabel'>
             Actors:
             <input
             name='stars'
             id='stars'
             ></input> */}
         {/* </label> */}
         <button>Save</button>
         </form>
     </div>
    );
  };

  export default UpdateMovie;