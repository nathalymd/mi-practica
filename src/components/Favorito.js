import React from 'react';

function Favorito(props) {
   const handleRemoveFavorite = () => {
        
        props.onRemoveFavorite(props.value);
      };


  return (
    <div className="alert alert-info p-2" role="alert">
      <img width="50px" src={props.value.Poster} alt="Movie Poster" />
      <small className="ml-2">{props.value.Title}</small>
      <button className="btn btn-danger btn-sm ml-2" onClick={handleRemoveFavorite}>
        Eliminar
      </button>
    </div>
  );
}

export default Favorito;