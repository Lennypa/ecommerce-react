import { Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const CartWidget = () => {
  return (
    <IconButton
        aria-label='Cart'
        icon={<Icon m={3} as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />}
    />       
  )
}

export default CartWidget