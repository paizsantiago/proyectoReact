
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({item}) {
    // const [id, title, description, price, pictureUrl] = item;
    // intente descontracturar el item pero no me dejaba
  return (
    // card de material ui para estilizar
    <div>
        <Card sx={{ maxWidth: 300, backgroundColor: "whitesmoke"}}>
      <CardMedia
        component="img"
        height="400"
        image={item.pictureUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.id}: {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="secondary">
          Price: ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}





