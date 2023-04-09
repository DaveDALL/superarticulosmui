import React from 'react'
import { Grid } from '@mui/material'
import CardRendering from './CardRendering'

const Catalog = ({products}) => {

    const productRendering = product => {
        return (
          <Grid item container xs={12} md={6} lg={4} p={1} sx={{justifyContent: "center"}}>
            <CardRendering product={product}/>
          </Grid>
        )}

    return (
        <Grid container m={2}>
            {products.map(product => productRendering(product))}
        </Grid>
    )
}

export default Catalog
