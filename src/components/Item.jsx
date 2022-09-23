import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';


export default function Item({movie}) {

  const navigate = useNavigate();
  const id = movie.id;
  let {categoriaId} = useParams();
  return (
      <Grid item sx={{margin: 1}}>
          <Card sx={{ minWidth:220, maxWidth:220, height:450, margin:"2rem", backgroundColor:"whitesmoke"}}className="card">
            <CardMedia
              component="img"
              height="310"
              image={movie.img}
              sx={{objectFit:"cover"}}
            />
            <CardContent>
              <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", height: 90}}>
                <Typography gutterBottom variant="h7" component="div" style={{fontWeight: "bold"}}>
                    {movie.title}
                </Typography>
                <Button variant="contained" size="small" onClick={()=>navigate(`/detail/${categoriaId}/${id}`)}>More details</Button>
              </Box>
            </CardContent>
          </Card>
      </Grid>
  )
}





