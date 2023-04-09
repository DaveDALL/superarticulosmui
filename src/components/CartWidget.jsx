import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const CartWidget = () => {

  const {calculateItemsInCart} = useContext(CartContext)
  const itemsInCart = calculateItemsInCart()

  return (
    <>
    {(itemsInCart) ? (
      <Link style={{textDecoration: 'none'}} to="/cart">
        <Button sx={{color: '#F15025'}} variant="outlined">
          <ShoppingCartCheckoutIcon fontSize="large" />
          <Typography variant="h5">{itemsInCart}</Typography>
        </Button>
      </Link>) : (
      <Button sx={{color: '#F15025'}} variant="outlined" disabled>
        <ShoppingCartCheckoutIcon fontSize="large" />
        <Typography variant="h5">{itemsInCart}</Typography>
      </Button>
    )}
    </>
  )
}

export default CartWidget
