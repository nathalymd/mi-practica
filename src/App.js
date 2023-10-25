
import './App.css';
import Navegacion from './components/Navegacion';
import ListMovie from './components/ListMovie';
import dataMovie from './data/Movie';
import { useState } from 'react';
import ListFavorito from './components/ListFavorito';
import CreateMovie from './components/CreateMovie';


function App() {
  const [listMovie, setListMovie] = useState(dataMovie);
  const [listMovieFavoritas, setListMovieFavoritas] = useState([]);
  
function addMovieFavorites(element) {
   
    const isAlreadyInFavorites = listMovieFavoritas.some((favorite) => favorite.Title === element.Title);

    if (!isAlreadyInFavorites) {
      const tempListMovie = [...listMovieFavoritas];
      tempListMovie.push(element);
      setListMovieFavoritas(tempListMovie);
     }
    }

    function handleRemoveFavorite(updatedFavorites) {
    setListMovieFavoritas(updatedFavorites);
   }
    
   function newMovie(element){
   let templistMovie = [...listMovie];
   templistMovie.push(element);
   setListMovie(templistMovie);
    }
   

  return (
    <div className="App">
     <Navegacion />
     <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h1>Peliculas Marvel</h1>
          <ListMovie 
            elements={listMovie}
            fnAddFavorites={addMovieFavorites}/>
        </div>
        <div className="col-md-3">
          <CreateMovie fnNewMovie={newMovie}/> 
         <ListFavorito elements={listMovieFavoritas} onRemoveFavorite={handleRemoveFavorite} />
        </div>
      </div>
     </div>    
    </div>
  );
}

export default App;
