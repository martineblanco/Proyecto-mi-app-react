import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'


const ItemDetail = ({id, name, img, category, description, price, stock }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='TipoCards' >
      <CardActionArea>
      <Typography gutterBottom variant="h5" className='TitleCards'>
            {name} 
      </Typography>
        
        <CardMedia
          component="img"
          image={img}
          alt="Notebook"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`Precio: $${price}`} 
          </Typography>
          <Typography variant="body2" color="text.secondary" p={1}>
          {`Stock disponible: ${stock}`} 
          </Typography>
        
          <Typography variant="body2" color="text.secondary" p={1}>
          {`Categoria: ${category}`} 
          </Typography>
         
          <Typography variant="body2" color="text.secondary" p={1}>
          {`Descripcion: ${description}`} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='CardsDetailAction'>
        
          <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log('cantidad agregada',quantity)}/>
       
      </CardActions>
    </Card>
  );
}

export default ItemDetail;