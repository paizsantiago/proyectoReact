import { Alert, Box, Button } from "@mui/material";

export default function ItemCount({stock, initial, onAdd, contador, setContador}) {
    
  return (
    <Box sx={{margin: "2rem"}}>
        <div style={{display:"flex", gap:"2rem", marginBottom: "1rem"}}>
        <Button variant="contained" onClick={()=>{
            if(contador > initial){
                setContador(contador-1);
            }
        }}>-</Button>
        <h3>{contador}</h3>
        <Button variant="contained" onClick={()=>{
            if(contador < stock){
                setContador(contador+1);
            }
        }}>+</Button>
        </div>
        <Button variant="contained" onClick={() =>{
            onAdd();
            setContador(initial);
        }}>Agregar al carrito</Button>
    </Box>
  )
}
