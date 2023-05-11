import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Cards.css'
import { Link } from "react-router-dom"


const Cards = ({ id, name, img, price, stock }) => {
  return (
    <Card sx={{ maxWidth: 345}} className='TipoCards' >
      <CardActionArea>
        <Typography gutterBottom variant="h5" className='TitleCards'>
          {name}
        </Typography>

        <CardMedia
          className='imageProducts'
          component="img"
          image={img}
          alt="Notebook"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {`Precio: $${price}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Stock disponible: ${stock}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='ButtonDetail'>
        <Link to={`/detalle/${id}`} >
          <Button  variant="contained" size="small" color="primary">
            Ver Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Cards;