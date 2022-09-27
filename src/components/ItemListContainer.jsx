
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { Box } from "@mui/system";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { getDocs, collection, getFirestore} from 'firebase/firestore'


export default function ItemListContainer() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    let {categoriaId} = useParams();
    
    useEffect (()=>{
      setLoading(true)
      setTimeout(()=>{
        switch (categoriaId) {
          case "Popular":
              categoriaId = "moviesPopular";
            break;
          case "Upcoming":
              categoriaId = "moviesUpcoming";
              break;
          case "Top rated":
            categoriaId = "moviesTopRated";
              break
          default:
            categoriaId = "moviesNowPlaying";
            break;
        }

        const db = getFirestore();
        const collectionRef = collection(db, categoriaId);
        getDocs(collectionRef).then((res)=>{

          let cleanMovies = [];
          res.docs.forEach((movie) => {
              const cleanMovie = {...movie.data(), id: movie.id}
              cleanMovies.push(cleanMovie);
          });

          setMovies(cleanMovies);
          setLoading(false);
        });
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
