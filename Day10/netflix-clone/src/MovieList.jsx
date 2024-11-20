import React from 'react';
import "./MovieList.css"
import movies from './movies';

const MovieList = () => {
  return (
    <div className='movie-list'>
        {movies.map((movie)=>(
            <div key={movie.id} className='movie-card'>
                <img src={movie.image} className='movie-img' />
                <p className='title'><b>Title:</b> {movie.title}</p>
                <p className='lang'><b>Language:</b> {movie.language}</p>
                <p className='cost'><b>Cost:</b> {movie.cost}</p>
            </div>
        ))}
    </div>
  );
};

export default MovieList;
