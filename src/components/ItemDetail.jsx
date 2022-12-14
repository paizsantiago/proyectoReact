import React from 'react'
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Divider } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Loader from './Loader';


export default function ItemDetail({movieDetail}) {

  let [contador, setContador] = useState(1);
  let [compraLlena, setCompraLlena] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {addItem, isInCart} = useContext(CartContext);
  
  const {title, overview, vote_average, price, img, id} = movieDetail;
  let {stock} = movieDetail;

  const onAdd = () => { // agrega los items al carrito
    let purchase = {
      id,
      stock,
      title, 
      price,
      img,
      quantity:contador
    }
    setCompraLlena(true);
    if (isInCart(id)) {
      alert("no hay stock");
    }else{
      addItem(purchase);
      toast.success('Success, added to cart 👍​', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  useEffect(()=>{
      setTimeout(() => {
          setLoading(false)
      }, 1500);
  },[])

  return (
    <Box className='containerDetail'>
      {!loading ? <Box className='detail'>
        <Box className='imgDetail'>
          <img src={img} alt="" />
        </Box>
        <Box className='infoDetail'>
          <h2>{title}</h2>
          <Divider/>
          <h3><span>Description: </span>{overview}</h3>
          <Box className='voteAverage'>
          <h4>Vote average: {vote_average}</h4>
          <ThumbUpIcon className='voteAverageIcon'/>
          </Box>
          <h4>Price: ${price}</h4>
          {compraLlena ? <Box className='contador'>
        <Button variant="outlined"onClick={()=>navigate('/cart')}>Ir al carrito</Button> 
        <Button variant="outlined"onClick={()=>navigate('/')}>Seguir comprando</Button> 
      </Box>: <ItemCount stock={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/>} 
        </Box>
      </Box>:
      <Loader/>
      }
      <ToastContainer />
    </Box>
  )
}
