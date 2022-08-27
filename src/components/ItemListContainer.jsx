import { Box } from "@mui/material";
import ItemList from "./ItemList";

export default function ItemListContainer({generarTitulo}) {
  
  return (
    <div>
      <h1>{generarTitulo()}</h1>
      <Box sx={{display:"flex", justifyContent:"space-around"}}>
        <ItemList/>
      </Box>
    </div>

  )
}
