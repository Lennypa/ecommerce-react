import React from 'react';
import LogoComponent from './LogoComponent';
import { Link as RouteLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { 
  HamburgerIcon, 
  CloseIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';
import CartWidget from './CartWidget';

const Links = [
  {
    path: '/',
    name: 'Inicio'  
  },
  {
    path: '/category/smartphones',
    name: 'Smartphones'
  },
  {
    path: '/category/laptops',
    name: 'Laptops'
  }
];

const NavLinkComponent = ({ link }) => (
  <ChakraLink 
    as={RouteLink} 
    to={link.path}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}
  >
    <Text fontSize='m'>{link.name}</Text>
  </ChakraLink>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>           
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Box>
                <RouteLink to='/' >
                  <LogoComponent/>
                </RouteLink>
              </Box>
              {Links.map((link) => (
                <NavLinkComponent key={link.name} link={link}></NavLinkComponent>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <RouteLink to="/carrito">
             <CartWidget/>
            </RouteLink>
            <Button m={3} onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>         
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={3} onClick={isOpen ? onClose : onOpen}>
              {Links.map((link) => (
                <NavLinkComponent key={link.name} link={link}></NavLinkComponent>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}