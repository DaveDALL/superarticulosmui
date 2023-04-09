import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Grid } from '@mui/material'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Error from './components/Error'
import CartContextProvider from './context/CartContextProvider'

function App() {

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <Grid container direction="column">
        <Grid item container>
            <NavBar />
        </Grid>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/catalog" element={<ItemListContainer />} />
            <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
            <Route exact path="/productdetail/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </Grid>
      </BrowserRouter>
      </CartContextProvider>
      
    </>
  )
}

export default App
