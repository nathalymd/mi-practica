import { useState } from "react";
function CreateMovie(props){
        const [title, setTitle] = useState("");
        const [released, setReleased] = useState("");
        const [plot, setPlot] = useState("");
        const [poster, setPoster] = useState("");
  
        function handleSubmit(e){
            e.preventDefault();
            props.fnNewMovie({
                'Title' : title,
                'Released' : released,
                'Plot' : plot,
                'Poster' : poster

            });
            setTitle("");
            setReleased("");
            setPlot("");
            setPoster("");
        }
        
return(
<form onSubmit={(e) => handleSubmit(e)}
className="border border-2 border-secundary p-2 rounded">

 <input placeholder="Title"
 className="form-control mb-2"
 type="text"
 value={title}
 onChange={(e)=> setTitle(e.target.value)}
 />
  <input placeholder="Released"
 className="form-control mb-2"
 type="text"
 value={released}
 onChange={(e)=> setReleased(e.target.value)}
 />
 <input placeholder="Plot"
 className="form-control mb-2"
 type="text"
 value={plot}
 onChange={(e)=> setPlot(e.target.value)}
 />
  <input placeholder="Poster"
 className="form-control mb-2"
 type="text"
 value={poster}
 onChange={(e)=> setPoster(e.target.value)}
 /> 
 <input type="submit" value="Create"
 className="btn btn-primary"/>
 

 
</form>
);

}

export default CreateMovie;