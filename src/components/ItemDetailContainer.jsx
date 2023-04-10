import React from 'react'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ProductDetail from './ProductDetail'
import Loader from './loader'
import Error from './Error'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const {id} = useParams()
    const {alertMessage, setAlertMessage} = useContext(CartContext)

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const productCollects = collection(db, "superarticulosDB")
        getDocs(productCollects).then(snapshot => {
            setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
          setLoading(false)
        })

      }, [])

      const alertNotification = () => {
        if(alertMessage.value === "true") {
          switch(alertMessage.type) {
            case "error" :
              toast.error(alertMessage.msg, {
                position: toast.POSITION.BOTTOM_CENTER
              })
            break
            case "success" :
              toast.success(alertMessage.msg, {
                position: toast.POSITION.BOTTOM_CENTER
              })
            break
          }
        }
        setTimeout(() => {
          setAlertMessage([])
        }, 300)
      }

      const idFilter = products.filter(product => product.id == id)
  
  return (
    <>
        <Grid container direction="column">
            <Grid container>
                <Grid item sm={0} md={2}/>
                <Grid item sm={12} md={8}>
                    {loading ? 
                    <Loader /> : (
                    (id && idFilter.length > 0) ? (
                    <ProductDetail products={idFilter} />
                    ) :
                    <Error />
                    )}
                    {alertNotification()}
                    <ToastContainer />
                </Grid>
                <Grid item sm={0} md={2}/>
            </Grid>
      </Grid>
    </>
  )
}

export default ItemDetailContainer
