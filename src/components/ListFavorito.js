import Favorito from "./Favorito";

function ListFavoritos(props){
  const handleRemoveFavorite = (element) => {
    
      const updatedFavorites = props.elements.filter((favorite) => favorite !== element);
      props.onRemoveFavorite(updatedFavorites);
    };
  
    const listaFavoritosRendered = props.elements.map((element) => {
      return (
        <Favorito key={element.imdbID} value={element} onRemoveFavorite={handleRemoveFavorite} />
      );
    });
  
  
    return (
      <div>
        <h4>Lista Favorito</h4>
        {listaFavoritosRendered}
      </div>
    );
  }

export default ListFavoritos;