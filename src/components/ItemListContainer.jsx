import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Grid } from '@mui/material'
import Catalog from './Catalog'
import Loader from './loader'


const ItemListContainer = ( ) => {

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const {categoryid} = useParams()

  useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const productCollects = collection(db, "superarticulosDB")
    getDocs(productCollects).then(snapshot => {
      setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
      setLoading(false)
    })
  }, [])

const categoryFilter = products.filter(product => product.categoryid === categoryid)

  return (
    <>
      <Grid container direction="column">
        <Grid container>
          <Grid item xs={0} md={1} lg={2}/>
          <Grid item xs={12} md={10} lg={8}>
            {loading ? <Loader /> : (categoryid ? <Catalog products={categoryFilter} /> : <Catalog products={products} />)}
          </Grid>
          <Grid item xs={0} md={1} lg={2}/>
        </Grid>
      </Grid>
    </>
  )
}

export default ItemListContainer
