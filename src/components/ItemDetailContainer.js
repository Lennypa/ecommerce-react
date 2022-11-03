
  import { useState, useEffect } from 'react';
  import { useParams } from 'react-router-dom';
  import ItemDetail from './ItemDetail';
  import { apiBuilder } from '../services/apiConfig';
  import LoaderSpinner from './LoaderSpinner';
 



  export default function ItemDetailContainer() {


    const params = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = async (id) => {
      const res = await apiBuilder.getProduct(id)
      setProduct(res)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
        getProduct(params.id)
    }, [])
    

    return (
      <> 
        { 
          product ? (
            <ItemDetail {...product}/>
          ) : (
            <LoaderSpinner/>   
          )
        }
      </>
    );
  }