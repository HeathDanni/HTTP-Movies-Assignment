import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory} from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { push } = useHistory();
  //this is the same as using history.push

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const deleteMovie = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/movies/${movie.id}`)
      .then((res) => {
        console.log("delete res:", res)
      })
      .catch((err) => {
        console.log('delete err', err)
      })
      push('/')
  }

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <button onClick= {() => push(`/update-movie/${movie.id}`)} className="update-button">
        Edit
      </button>
      <button onClick={deleteMovie} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default Movie;
