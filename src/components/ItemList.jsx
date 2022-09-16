import { Grid } from '@mui/material';
import Item from './Item';

export default function ItemList({movies}) {

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
        {movies.map((movie => <Item movie={movie}/>))}
    </Grid>
  )
}
