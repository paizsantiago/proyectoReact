import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore} from 'firebase/firestore';
import Loader from './Loader';

export default function ItemDetailContainer() {

    const [movieDetail, setMovieDetail] = useState({});
    const [loading , setLoading] = useState(false);
    const {id} = useParams();
    let {categoriaId} = useParams();

    useEffect(()=>{ //recibe un id y los compara en los distintos fetch para encontrar la coincidencia
          const db = getFirestore();
          switch (categoriaId) {
            case "Popular":
              let movieRef = doc(db, "moviesPopular", id);
              getDoc(movieRef).then((res)=>{           
                const newObj = {...res.data(), id: res.id};
                setMovieDetail(newObj);
                setLoading(false);
              });
              break;
            case "Top rated":
              let movieRef2 = doc(db, "moviesTopRated", id);
              getDoc(movieRef2).then((res)=>{           
                const newObj = {...res.data(), id: res.id};
                setMovieDetail(newObj);
                setLoading(false);
              });
              break;
            case "Upcoming":
                let movieRef3 = doc(db, "moviesUpcoming", id);
                getDoc(movieRef3).then((res)=>{           
                  const newObj = {...res.data(), id: res.id};
                  setMovieDetail(newObj);
                  setLoading(false);
                });
                break; 
            case "Now Playing":
              let movieRef4 = doc(db, "moviesNowPlaying", id);
                getDoc(movieRef4).then((res)=>{           
                  const newObj = {...res.data(), id: res.id};
                  setMovieDetail(newObj);
                  setLoading(false);
                });
                break;
            case "undefined":
              let movieRef5 = doc(db, "moviesNowPlaying", id);
              getDoc(movieRef5).then((res)=>{           
                const newObj = {...res.data(), id: res.id};
                setMovieDetail(newObj);
                setLoading(false);
              });
              break;
            default:
              break;
          }        
    }, [categoriaId, id])

  return (
    <div>
        {loading ? <Loader/>: <ItemDetail movieDetail={movieDetail}/>}
    </div>
  )
}
