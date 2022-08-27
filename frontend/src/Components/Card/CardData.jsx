import React from 'react'
import {Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid
} from '@mui/material';
const CardData = (value) => {
  // const {id, title, author, content, thumbnail} = value
  return (
   <>
   <Grid container spacing={3}>
<Grid item xs={12}>
   <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="140"
        // image={thumbnail.small}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
   </>
  )
}

export default CardData;