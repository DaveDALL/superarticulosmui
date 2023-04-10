import React from 'react'
import Card from '@mui/material/Card';
import { Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'

const ProductCounter = ({id, name, imageurl, price, stock}) => {

    const {quantity, addQuantity, substractQuantity, resetQuantity, addItemToCart, calculateItemsInCart} = useContext(CartContext)
    const item = {id, name, imageurl, price, stock}
    const itemsInCart = calculateItemsInCart()

    return (
        <Card sx={{ maxWidth:700 }}>
            <Grid container direcion="column">
                <Grid item container sx={{justifyContent:"center"}}>
            <CardActions>
                <Button
                    sx={{backgroundColor: "#F15025"}}
                    variant="contained"
                    size="body1"
                    onClick={() => addQuantity(stock, id)}>
                        MAS
                </Button>
            </CardActions>
            <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    {quantity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx={{backgroundColor: "#F15025"}}
                    variant="contained"
                    size="body1"
                    onClick={() => substractQuantity()}>
                    MENOS
                </Button>
            </CardActions>
            <CardActions>
                <Button sx={{backgroundColor: "#F15025"}} variant="contained" size="body1" onClick={() => resetQuantity()}>PRODUCTOS A CERO</Button>
            </CardActions>
            </Grid>
            <Grid item container sx={{justifyContent:"center"}}>
            <CardActions>
                {(quantity == 0) ? (
                <Button 
                    disabled
                    sx={{backgroundColor: "#F15025"}}
                    variant="contained"
                    size="body1"
                    >AGREGAR AL CARRITO</Button>) : (
                <Button
                    sx={{backgroundColor: "#F15025"}}
                    variant="contained"
                    size="body1"
                    onClick={() => addItemToCart(item, quantity)}
                    >AGREGAR AL CARRITO</Button>)}
            </CardActions>
            <Link style={{textDecoration: 'none'}} to="/catalog">
                <CardActions>
                    <Button
                        sx={{backgroundColor: "#F15025"}}
                        variant="contained"
                        size="body1"
                    >SEGUIR COMPRANDO</Button>
                </CardActions>
            </Link>
            <CardActions>
                {(!itemsInCart) ? (
                <Button 
                    disabled
                    sx={{backgroundColor: "#F15025"}}
                    variant="contained"
                    size="body1"
                    >FINALIZAR COMPRA</Button>) : (
                <Link style={{textDecoration: 'none'}} to="/cart">   
                <Button
                    sx={{backgroundColor: "#F15025"}}
                    variant="contained"
                    size="body1"
                    >FINALIZAR COMPRA</Button>
                </Link> )}
            </CardActions>
            </Grid>
            </Grid>
        </Card>
  )
}

export default ProductCounter
