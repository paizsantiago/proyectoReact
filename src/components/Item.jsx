import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { posterPeliculas } from '../mocks/mockData';
import { Link, useNavigate } from 'react-router-dom';

export default function Item({movie}) {


  const id = movie.id;
  id.toString();

  return (
      <Grid item xs={2}>
          <Card sx={{ minWidth:200, maxWidth:200, height:420, margin:"2rem", backgroundColor:"whitesmoke"}}>
            <CardMedia
              component="img"
              height="300"
              image={posterPeliculas(movie.poster_path)}
              sx={{objectFit:"cover"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                  {movie.title}
              </Typography>
              <Link to={`/detail/${id}`}>More details</Link>
              </CardContent>
          </Card>
      </Grid>
  )
}





