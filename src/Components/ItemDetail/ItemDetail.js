import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


const ItemDetail = ({id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (cant) => {
    setQuantityAdded(cant)

    const item = {
      id, name, price, category,
    }
    
    addItem(item, cant)

  }

  
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

        {
          quantityAdded > 0 ? (
            <Link to='/cart' className='Option'>
              <Button variant="primary" className='Button'>
              Terminar Compra
              </Button>
            </Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
          )
        }
  
      </CardActions>
    </Card>
  );
}

export default ItemDetail;