import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { posterPeliculas } from '../mocks/mockData';

export default function Item({movie}) {



  return (
      <Grid item xs={2}>
          <Card sx={{ minWidth:200, maxWidth:200, height: 400, margin:"2rem", backgroundColor:"whitesmoke"}}>
            <CardMedia
              component="img"
              height="300"
              image={posterPeliculas(movie.poster_path)}
              sx={{objectFit:"cover"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                  {movie.title}
              </Typography>
              </CardContent>
          </Card>
      </Grid>
  )
}





