import React from 'react'
import Item from './components/Item';

const ItemList = ({productos}) => {
  return (
      <>
      {productos.map((item)=>{
        return <Item key={item.id} {...item} /> 
      })}
      </>
  )
}

export default ItemList

