import { Center, Container, Spinner } from '@chakra-ui/react'
import React from 'react'

const LoaderSpinner = () => {
  return (
    <Container minHeight={'100vh'} p={'40px'}>
      <Center>
        <Spinner size='xl' />
      </Center>    
    </Container>
  )
}

export default LoaderSpinner