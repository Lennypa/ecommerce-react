import React, {useEffect, useState} from 'react'
import Contador from './Contador';

const ContadorContainer = () => {

    const [contador, setContador] = useState(0); 
    const [habilitado, setHabilitado] = useState(false);

    useEffect(()=>{
        console.log('se ejecuta cada vez que se renderiza (Primero y cada vez que se haga click en el boton)')
    },[])


    let hacerClick = () => {
        setContador(contador + 1)
        if(contador == 4){
            setHabilitado(true)
        }
    }

  return (
    <Contador hacerClick={hacerClick}
    contador={contador}
    habilitado={habilitado}
    />
  )
}

export default ContadorContainer