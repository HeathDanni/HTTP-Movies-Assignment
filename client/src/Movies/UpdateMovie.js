import React, {useState} from 'react';

const UpdateMovie = () => {
    const [inputs, setInputs] = useState({
        title: "",
        director: "",
        metascore: "",
    });

    const handleChange = (e) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

        console.log(inputs)
    };

    console.log(inputs)

    return (
     <div className="movie-card flex-container">
         <h2>Update Movie</h2>
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
         <label htmlFor='actors' className='inputLabel'>
             Actors:
             <input
             name='actors'
             id='actors'
             ></input>
         </label>
         <button>Save</button>
     </div>
    );
  };

  export default UpdateMovie;