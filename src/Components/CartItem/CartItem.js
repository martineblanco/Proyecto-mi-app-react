import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap';
import { CartContext } from '../Context/CartContext';

const CartItem = ({ id, name, price, cant }) => {

  const { removeItem } = useContext(CartContext)

  const handleRemove = () => {
    removeItem(id)
  }

  return (

    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', m: 1, fontSize: 18}}>{name}</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', m: 1, fontSize: 18}}>{`cantidad: ${cant}`} </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', m: 1, fontSize: 18}}>{`Precio x Unidad: $${price}`}</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', m: 1, fontSize: 18}}>{`Subtotal: $${price * cant}`}</TableCell>
            <TableCell align="right" >
              <Button variant="danger" onClick={handleRemove}>X</Button>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>

    </TableContainer>

  )
}

export default CartItem


