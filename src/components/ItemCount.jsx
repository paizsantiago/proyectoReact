import { Box, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function ItemCount({stock, initial, onAdd, contador, setContador}) {
    
  return (
    <Box>
        <div className="contador">
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
        <Button className="botonAgregar" variant="contained" onClick={() =>{
            onAdd();
            setContador(initial);
        }}><AddShoppingCartIcon sx={{padding: ".6rem"}}/>Add to cart</Button>
    </Box>
  )
}
