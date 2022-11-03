import React from 'react'

const Contador = (props) => {
  return (
    <div id='contador'>
        <button disabled={props.habilitado} onClick={props.hacerClick}>click</button>
        <p>contador: {props.contador}</p>
   </div>
  )
}

export default Contador