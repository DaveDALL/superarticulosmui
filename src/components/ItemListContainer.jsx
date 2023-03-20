import React from 'react'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Catalog from './Catalog'
import { useParams } from 'react-router-dom'


const ItemListContainer = ( ) => {

  const [products, setProducts] = useState([""])
  const {categoryid} = useParams()

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

  const categoryFilter = products.filter(product => product.categoryid === categoryid)

  return (
    <>
      <Grid container direction="column">
        <Grid container>
          <Grid item xs={0} md={1} lg={2}/>
          <Grid item xs={12} md={10} lg={8}>
            {categoryid ? <Catalog products={categoryFilter} /> : <Catalog products={products} />}
          </Grid>
          <Grid item xs={0} md={1} lg={2}/>
        </Grid>
      </Grid>
    </>
  )
}

export default ItemListContainer
