import { Grid } from '@mui/material';
import Item from './Item';

export default function ItemList({movies}) {

  return (
    <Grid container spacing={7}>
        {movies.map((movie => <Item movie={movie}/>))}
    </Grid>
  )
}
