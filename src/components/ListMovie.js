import Movie from "./Movie";

function ListMovie(props){
     let  listMovieRendered = props.elements.map(element=> {
          return <Movie  
                    key={element.Id}
                    value = {element}
                    fnAddFavorites={props.fnAddFavorites}
                />
     
    });
    
     return(
          <div className='row'>
            {listMovieRendered}
          </div>
    );
}

export default ListMovie;