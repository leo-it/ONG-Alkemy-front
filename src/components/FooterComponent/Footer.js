// imports from react. 
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// imports externals libraries.
import { Flex, Box, Button, Center, Text, Image } from "@chakra-ui/react";

// import logo of the ong.
import logo from '../../assets/img/logo-somos-mas.png';

const Footer = () => {
  const { facebook, instagram, linkedin } = useSelector(state => state.home);

  return (
    <Flex w="100%" h={['80vh', '60vh', '40vh', '40vh']} flexDirection='column' alignItems='center'>
      <Box flexDirection="column" w={["100%", "85%"]} height="70%">
        <Center flexDirection="column" borderBottom="1px" borderBottomColor="grey" h="100%">
          <Flex w="100%" direction="row" h={['75%', '60%', '40%', '30%']} justifyContent="space-between">

            <Flex direction={['column', 'column', 'column', 'row']}>
              <Link to="/">
                <Button colorScheme="teal" variant="ghost" >
                  Inicio
                </Button>
              </Link>

              <Link to="/actividades">
                <Button colorScheme="teal" variant="ghost" >
                  Actividades
                </Button>
              </Link>

              <Link to="/novedades">
                <Button colorScheme="teal" variant="ghost" >
                  Novedades
                </Button>
              </Link>
            </Flex>

            <Flex>
              <Link to="/">
                <Image src={logo} alt="logo somos más" objectFit="cover" />
              </Link>
            </Flex>

            <Flex direction={['column', 'column', 'column', 'row']} >
              <Link to="/about-us">
                <Button colorScheme="teal" variant="ghost" >
                  Nosotros
                </Button>
              </Link>

              <Link to="/testimonios">
                <Button colorScheme="teal" variant="ghost" >
                  Testimonios
                </Button>
              </Link>

              <Link to="/contact">
                <Button colorScheme="teal" variant="ghost">
                  Contacto
                </Button>
              </Link>

            </Flex>
          </Flex>
        </Center>
      </Box>

      <Box alignItems="center" w="85%" height="45%" >
        <Center marginTop={['1rem', '1rem', '1rem', '2rem']} h="70%" flexDirection="column">
          <Center>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <Button borderRadius="100" margin={2}>
                <i className="fab fa-facebook" />
              </Button>
            </a>

            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Button borderRadius="100" margin={2}>
                <i className="fab fa-instagram" />
              </Button>
            </a>

            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Button borderRadius="100" margin={2}>
                <i className="fab fa-linkedin-in"></i>
              </Button>
            </a>
          </Center>

          <Center marginTop={['1rem', '1rem', '1rem', '2rem']}>
            <Text color="grey">2021 by Alkemy All Rights Reserved</Text>
          </Center>
        </Center>
      </Box>
    </Flex>
  );
}

export default memo(Footer);