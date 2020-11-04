import React from 'react';

const UpdateMovie = () => {
    return (
     <div className="movie-card flex-container">
         <h2>Update Movie</h2>
         <label htmlFor='title' className='inputLabel'>
             Title:
             <input
             name='title'
             id='title'
             ></input>
         </label>
         <label htmlFor='director' className='inputLabel'>
             Director:
             <input
             name='director'
             id='director'
             ></input>
         </label>
         <label htmlFor='metascore' className='inputLabel'>
             Metascore:
             <input
             name='metascore'
             id='metascore'
             ></input>
         </label>
         <label htmlFor='actors' className='inputLabel'>
             Actors:
             <input
             name='actors'
             id='actors'
             ></input>
         </label>
     </div>
    );
  };

  export default UpdateMovie;