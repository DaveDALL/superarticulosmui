import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'


const Cart = () => {
  return (
    <Grid container>
        <Grid item xs={0} md={2}/>
        <Grid item container xs={12} md={8} mt={4} sx={{justifyContent:'center', color:'#F15025'}}>
            <Typography variant="h3">
                CARRITO DE COMPRAS
            </Typography>
        </Grid>
        <Grid item xs={0} md={2}/>
    </Grid>
  )
}

export default Cart
