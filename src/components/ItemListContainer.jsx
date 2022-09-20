
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {data, data2, data3, data4} from "../mocks/mockData";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SouthIcon from '@mui/icons-material/South';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function ItemListContainer() {

    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoriaId} = useParams();
    
    useEffect (()=>{
      setLoading(true)
      setTimeout(()=>{
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
      }, 1500)
    }, [categoriaId])

  return (
      <Box className="prueba">
        <Box className="titlesPages">
          {categoriaId ? <h1>{categoriaId}</h1> : <h1>Now Playing</h1>}
          <ArrowDownwardIcon fontSize="inherit"/>
        </Box>
          {loading ? <Loader/> : <ItemList movies={movies}/>}
      </Box>

  )
}
