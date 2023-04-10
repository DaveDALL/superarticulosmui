import React from 'react'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ProductDetail from './ProductDetail'
import Loader from './loader'
import Error from './Error'

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const productCollects = collection(db, "superarticulosDB")
        getDocs(productCollects).then(snapshot => {
            setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
          setLoading(false)
        })
      }, [])

      const idFilter = products.filter(product => product.id == id)
      
  return (
    <>
        <Grid container direction="column">
            <Grid container>
                <Grid item sm={0} md={2}/>
                <Grid item sm={12} md={8}>
                    {loading ? 
                    <Loader /> : (
                    (id && idFilter.length > 0) ? 
                    <ProductDetail products={idFilter} /> :
                    <Error />
                    )}
                </Grid>
                <Grid item sm={0} md={2}/>
            </Grid>
      </Grid>
    </>
  )
}

export default ItemDetailContainer
