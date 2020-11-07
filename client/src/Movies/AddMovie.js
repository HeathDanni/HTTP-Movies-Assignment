import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const initialState = {
    id: Date.now(),
    title: "",
    director: "",
    metascore: "",
    stars: []
    };

 const AddMovie = () => {
    const [form, setForm] = useState(initialState)
    const {push} = useHistory();

    const handleChange = (e) => {
        e.persist()
        setForm({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const addMovie = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/api/movies`, form)
            .then((res) => {
                console.log('movies res', res)
            })
            .catch((err) => {
                console.log('err', err)
            })
        push('/')
    }

    return (
        <form onSubmit={addMovie}>
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
         <button type='submit' >Add</button>
        </form>
    )
}





export default AddMovie;