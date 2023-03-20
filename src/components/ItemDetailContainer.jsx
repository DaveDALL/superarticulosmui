import React from 'react'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from './ProductDetail'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([""])
    const {id} = useParams()
    const fetchingData = () => {
        fetch('/inventory/inventoryProducts.json')
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            setProducts(data)
        }).catch()
    }
    useEffect(() => {
        fetchingData()
    },[])

    const idFilter = products.filter(product => product.id == id)

  return (
    <>
        <Grid container direction="column">
            <Grid container>
                <Grid item sm={0} md={2}/>
                <Grid item sm={12} md={8}>
                    {id ? <ProductDetail products={idFilter} /> : <ProductDetail products={products} />}
                </Grid>
                <Grid item sm={0} md={2}/>
            </Grid>
      </Grid>
    </>
  )
}

export default ItemDetailContainer
