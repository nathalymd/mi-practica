function Navegacion(){
    return (
        <ul class="nav justify-content-end">
       <nav className="navbar navbar-light bg-transparent">
      <form className="form-inline">
        <div className="input-group"> 
          <input className="form-control" type="Buscar" placeholder="Buscar" aria-label="Buscar" />
          <div className="input-group-append">
            <button className="btn btn-outline-info" type="submit">Buscar</button>
          </div>
        </div>
      </form>
    </nav>
  
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pelicula</a>
        </li>
              
      </ul>
    );
}

export default Navegacion;