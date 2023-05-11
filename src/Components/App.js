import React from 'react'
import NavBar from './NavBar/NavBar';
import Main from './ItemListContainer/Main';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import Cart from './Cart/Cart';
import FinalPurchase from './FinallPurchase/FinallPurchase';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/category/:categoryId' element={<Main />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<FinalPurchase />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
      <Footer />
    </Router>
  )
}

export default App;
