
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {data} from "../mocks/mockData"

export default function ItemListContainer({generarTitulo}) {
  

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect (()=>{
      setLoading(true)
      data
      .then((res)=>setMovies(res))
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))
    }, [])

  return (
    <div>
      <h1 style={{textAlign: "center"}}>{generarTitulo()}</h1>
        {loading ? <h2 style={{textAlign: "center", fontFamily:"sans-serif"}}>Cargando...</h2> : <ItemList movies={movies}/>}
    </div>

  )
}
