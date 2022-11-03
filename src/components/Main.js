import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Carrito from './Carrito';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="*" element={<h1>404</h1>}/>
        </Routes>
    </main>
    
  )
}

export default Main