
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {data, data2, data3, data4} from "../mocks/mockData";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {

    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoriaId} = useParams();
    
    useEffect (()=>{
      setLoading(true)
      // if(categoriaId === "Popular") {
      //   data2
      //   .then((res)=>setMovies(res))
      //   .catch((error) => console.log(error))
      //   .finally(()=> setLoading(false))
      // }else if(categoriaId === "Upcoming"){
      //   data3.then((res)=>setMovies(res))
      //   .catch((error) => console.log(error))
      //   .finally(()=> setLoading(false))
      // }else if(categoriaId === "Top rated"){
      //   data4.then((res)=>setMovies(res))
      //   .catch((error) => console.log(error))
      //   .finally(()=> setLoading(false))
      // }
      // else{
      //   data
      // .then((res)=>setMovies(res))
      // .catch((error) => console.log(error))
      // .finally(()=> setLoading(false))
      // }
      switch (categoriaId) {
        case "Popular":
          data2
          .then((res)=>setMovies(res))
          .catch((error) => console.log(error))
          .finally(()=> setLoading(false))
          break;
        case "Upcoming" :
          data3.then((res)=>setMovies(res))
          .catch((error) => console.log(error))
          .finally(()=> setLoading(false))
          break;
        case "Top rated":
          data4.then((res)=>setMovies(res))
          .catch((error) => console.log(error))
          .finally(()=> setLoading(false))
          break;
        default:
          data
          .then((res)=>setMovies(res))
          .catch((error) => console.log(error))
          .finally(()=> setLoading(false))
          break;
      }
    }, [categoriaId])

  return (
    <div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "30rem", backgroundImage: "url(https://i.postimg.cc/gjCLQHJg/57389.jpg)", backgroundSize: "cover",
      }}>
          {categoriaId ? <h1 style={{color: "whitesmoke", fontSize:"5rem"}}>{categoriaId}</h1> : <h1 style={{color: "whitesmoke", fontSize:"5rem"}}>Now Playing</h1>}
        </div>
        {loading ? <h2 style={{textAlign: "center", fontFamily:"sans-serif"}}>Cargando...</h2> : <ItemList movies={movies}/>}
    </div>

  )
}
