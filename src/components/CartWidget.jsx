import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <Link style={{textDecoration: 'none'}} to="/cart">
    <Button sx={{color: '#F15025'}} variant="outlined">
        <ShoppingCartCheckoutIcon fontSize="large" />
        <Typography variant="h5">3</Typography>
    </Button>
    </Link>
  )
}

export default CartWidget
