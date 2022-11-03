import React from 'react'
import {
    Box,
    Image,
    Badge,
    AspectRatio,
    Button
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';



const Item = ({title, thumbnail, brand, id, price, rating, stock}) => {


  return (
        <Link to={`/item/${id}`}>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' cursor='pointer'>
                <AspectRatio maxW='400px' ratio={4 / 3}>
                    <Image src={thumbnail} alt={thumbnail} />
                </AspectRatio>
                
                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>New</Badge>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                            &bull; {brand}
                        </Box>
                    </Box>  
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {title}
                    </Box>
            
                    <Box>
                        <Box as='span' color='gray.600' fontSize='sm'>$ </Box>
                        {price}               
                    </Box>
            
                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5).fill('').map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {stock} en stock
                        </Box>
                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>
                        <Button
                            size='md'
                            height='48px'
                            width='200px'
                            border='2px'                        
                            borderColor='green.500'
                        >
                        Ver producto
                        </Button>
                    </Box>
                    
                </Box>
            </Box>
        </Link>
  )
}

export default Item




