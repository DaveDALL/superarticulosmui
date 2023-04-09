import React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import CardRendering from './CardRendering'
import Loader from './loader'

const Home = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const q = query(
      collection(db, "superarticulosDB"),
      where("price", ">", 1500),
    )
    getDocs(q).then(snapshot => {
      setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
      setLoading(false)
    })
  }, [])

  const productRendering = product => {
    return (
      <Grid item container xs={12} md={6} p={1} sx={{justifyContent: "center"}}>
        <CardRendering product={product}/>
      </Grid>
    )}

  return (
    <>
      <Grid container direction="column" sx={{display:'grid'}}>
            <Grid item container sx={{justifyContent:'center', display:'grid'}}>
                <Typography sx={{fontFamily: 'Roboto', fontWeight:400, color: '#F15025', textAlign:'center'}} variant="h3" component="h3" mt={6}>
                    Bienvenidos a SuperArticulos
                </Typography>
                <Typography sx={{fontFamily: 'Roboto', fontWeight:400, color: '#F15025', textAlign:'center'}} variant="h5" component="h5" mb={4}>
                    ¡¡ Desde los más extraños hasta los más grandiosos !!
                </Typography>
                  <Grid item container xs={12} m={2}>
                    {loading ? <Loader /> : products.map(product => productRendering(product))}
                  </Grid>
            </Grid>
    </Grid>
    </>
  )
}

export default Home
