import React from 'react'
import { Box, Image } from '@chakra-ui/react';

var logazo = require('../img/rayo.png');

const LogoComponent = () => {
  return (
    <Box>
        <Image boxSize="45px" src={logazo} alt='Logo' />
    </Box>
  )
}

export default LogoComponent