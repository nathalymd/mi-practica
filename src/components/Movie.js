import { useState } from 'react';
import '../index.css'
function Movie(props){

    const [verMas, setverMas] = useState(false);


    let sectionVerMas = <button 
                           onClick={() => setverMas(true)}     
                           className="btn btn-secondary">Ver más</button>

    if(verMas)
    {
        sectionVerMas = <div>
            <button type="button"
               onClick={() => setverMas(false)}
               className="btn-sencodary float-end"
               aria-label="Close" />
            <hr />
            {props.value.Plot}
        </div>
    }
    return(
        <div className="col-md-3">
            <div className="card mb-3" >
               <img src= {props.value.Poster} className="card-img-top" alt="..." />
                <div className="card-body text-lingt">
                   <h5 className="card-title">{props.value.Title}</h5>
                   <p className="card-text">{props.value.Plot.substring(0, 30)}</p> 
                   <p className="card-text"><small className="text-muted">{props.value.Released}</small></p> 
                   {sectionVerMas}
                   <button
                        onClick={()=>props.fnAddFavorites(props.value)}
                        className="btn btn-warning">Favorito</button>
                </div>                
            </div>
        </div>
    );
}

export default Movie;