import React from "react";
import { useSelector } from "react-redux";
import MovieCart from "./MovieCart";

const PublicMovies = () => {
  const publicMovies = useSelector((store) => store.public);

  const renderMovies = publicMovies.map((movie) => (
    <MovieCart key={movie.id} name={movie.name} />
  ));

  return (
    <div className="container" id="public-movies">
      <h2>Public Movies</h2>
      <p>here you can choose what movies you have watched or wish to see</p>
      {renderMovies}
    </div>
  );
};

export default PublicMovies;
