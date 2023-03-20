import React from 'react'
import Card from '@mui/material/Card';
import { Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {useState} from 'react'
import { useParams } from 'react-router-dom';

const ProductCounter = props => {

    const {id, name, price, stock} = props
    const [quatity, setQuatity] = useState(1)

    return (
        <Card sx={{ maxWidth:700 }}>
            <Grid container direcion="column">
                <Grid item container sx={{justifyContent:"center"}}>
            <CardActions>
                <Button
                    sx={{backgroundColor: "#F15025"}}
                    variant="contained"
                    size="body1"
                    onClick={() => ((quatity>=stock) ? console.log("No hay existencias") : setQuatity(quatity+1))}>
                        MAS
                </Button>
            </CardActions>
            <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                    {quatity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx={{backgroundColor: "#F15025"}}
                    variant="contained"
                    size="body1"
                    onClick={() => ((quatity<=1) ? console.log("No se puede asignar cantidades menores a 1") : setQuatity(quatity-1))}>
                    MENOS
                </Button>
            </CardActions>
            <CardActions>
                <Button sx={{backgroundColor: "#F15025"}} variant="contained" size="body1" onClick={() => (setQuatity(0))}>PRODUCTOS A CERO</Button>
            </CardActions>
            </Grid>
            <Grid item container sx={{justifyContent:"center"}}>
            <CardActions>
                <Button sx={{backgroundColor: "#F15025"}} variant="contained" size="body1">AGREGAR AL CARRITO</Button>
            </CardActions>
            </Grid>
            </Grid>
        </Card>
  )
}

export default ProductCounter
