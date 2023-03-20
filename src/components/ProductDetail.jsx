import React from 'react'
import { Grid } from '@mui/material'
import CardProductDetailRender from './CardProductDetailRender'

const ProductDetail = ({products}) => {

    const productRendering = product => {
        return (
          <Grid item container xs={12} p={1} sx={{justifyContent: "center"}}>
            <CardProductDetailRender product={product}/>
          </Grid>
        )}
  return (
    <Grid container m={2}>
            {products.map(product => productRendering(product))}
        </Grid>
  )
}

export default ProductDetail
