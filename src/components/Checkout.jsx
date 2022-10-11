import { Box, Button, Divider } from '@mui/material'
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {
    
    const {cart, cartTotal, clear} = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const [buyer, setBuyer] = useState({});
    const navigate = useNavigate();

    const infoBuyer = (e) =>{
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    }

    const finalizarCompra = (e) =>{ // sube las ordenes a firestore
        e.preventDefault();
        if(Object.values(buyer).length !== 4){
            toast.error('Please, complete the form', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            const db = getFirestore();
            const orders = collection(db, "orders");
            addDoc(orders, {
                buyer,
                items: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }).then((res)=>{
                setOrderId(res.id);
                clear();
            }).catch((error)=>console.log(error));
        }

    }

  return (
    <Box className='formularioCheckout'>
        {!orderId ?
         <Box>
            <h1>Checkout</h1>
            <Divider/>
            <form onSubmit={finalizarCompra}>
                <label for="nombre">Your name</label>
                <input type="text" placeholder='Name' name='name' onChange={infoBuyer}/>
                <label for="nombre">Your last name</label>
                <input type="text" placeholder='Last name' name='lastName' onChange={infoBuyer}/>
                <label for="nombre">Your phone</label>
                <input type="number" placeholder='Tel: 32131231' name='phone' onChange={infoBuyer}/>
                <label for="nombre">Your email</label>
                <input type="email" placeholder='example@gmail.com' name='email' onChange={infoBuyer}/>
                <Button type='submit' variant="contained">Finish</Button>
            </form>
        </Box>
        :
        <Box className='postCheckout'>
            <h2>Thanks you! :)</h2>
            <h3>Your order ID is: {orderId}</h3>
            <Button onClick={()=>navigate('/')} variant="contained">Back</Button>
        </Box>}
        <ToastContainer />
    </Box>
  )
}
