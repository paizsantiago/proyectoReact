import React, { useState } from 'react'
import { Box } from "@mui/material";

export default function ItemCount({stock, initial, onAdd}) {
    let [contador, setContador] = useState(initial);
  return (
    <Box sx={{margin: "2rem"}}>
        <div style={{display:"flex", gap:"2rem", marginBottom: "1rem"}}>
        <button onClick={()=>{
            if(contador > initial){
                setContador(contador-1);
            }
        }}>-</button>
        <h3>{contador}</h3>
        <button onClick={()=>{
            if(contador < stock){
                setContador(contador+1);
            }
        }}>+</button>
        </div>
        <button onClick={() =>{
            onAdd(contador);
            setContador(initial);
        }}>Agregar al carrito</button>
    </Box>
  )
}
