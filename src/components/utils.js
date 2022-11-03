import { randProduct } from "@ngneat/falso"

export const getProducts = () => {
    let productosIniciales = [];

    for (let i = 0; i < 10; i++) {
        productosIniciales.push(randProduct());
    }
    
    let simulacionPedido = new Promise((res) => {
        setTimeout(() => {
          res(productosIniciales);
        }, 2000);
      })

      return simulacionPedido;
}

export const getProduct = (id) => {

    

    return;
}
 
