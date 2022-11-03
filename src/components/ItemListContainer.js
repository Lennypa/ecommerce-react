import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import { apiBuilder } from '../services/apiConfig';
import { Container, SimpleGrid } from '@chakra-ui/react'
import LoaderSpinner from './LoaderSpinner';


// Acá en item list container debe ir el array de los productos y toda la información
// Sería com el "ContadorContainer"

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {id} = useParams();

  useEffect(() => {
    if (!id) {
      apiBuilder.getProducts()
      .then((respuesta)=>{
        console.log(respuesta);
        setItems(respuesta.products);
      })
      .catch((error)=>{
        console.log(error);
      })
    } else {
     apiBuilder.getProductsByCategory(id)
     .then((respuesta) =>{
      setItems(respuesta.products)
     })
     .catch((error) =>{
      console.log(error);
     })
    }

  },[id])

  return (
    <>
     <Container maxW='1200' minH='100vh' p='20px' mt='50px' mb='50px'> 
        {
          items.length ? (
            <SimpleGrid columns={{sm: 2, md: 4}} spacing='40px'>
              <ItemList productos={items}/>
            </SimpleGrid>
          ) : (
            <LoaderSpinner/>   
          )
        }
    </Container>
    </>
  )
}

export default ItemListContainer;




