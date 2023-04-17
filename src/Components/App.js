import React from 'react'
import NavBar from './NavBar/NavBar';
import Main from './ItemListContainer/Main';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Main /> } /> 
        <Route path='/category/:categoryId' element={ <Main/> } /> 
        <Route path='/detalle/:id' element={ <ItemDetailContainer/> } /> 
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    
      <Footer />
    </Router>
  )
}

export default App;
