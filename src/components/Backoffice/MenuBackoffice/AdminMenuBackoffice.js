// Import React
import React from 'react';
import { Link } from 'react-router-dom';

// Import Chakra
import {Flex, Button, Icon, Text } from '@chakra-ui/react';

// Import Const
import {ONG_COLORS} from '../../../consts/const';

import DrawerMenuBackoffice from './DrawerMenuBackoffice';

// Import React Icons
import {BsHouseFill, BsFilePost, BsInboxesFill, BsFillChatQuoteFill, BsFillCalendarFill, BsFillPeopleFill} from 'react-icons/bs'
import { FaAddressBook, FaArrowLeft, FaBuilding } from "react-icons/fa"

// Export Component
export default function AdminMenuBackoffice({onClick}) { 
    return (
        <>
        <DrawerMenuBackoffice />
        <Flex display={{base: 'none', md:'flex', lg: 'flex'}} h="100vh" borderRight={`2px solid${ONG_COLORS.RED}`} background={'#292929'} position='fixed' h="100vh" flexDirection="row" justify="space-around" align="center">
            <Flex  index={2} flexDirection="column" justify="space-around">
                <Text color='white' align='center'>Menú de Edición</Text>
                <br/>
                <Link to="/backoffice">
                    <Button 
                        color='white' 
                        bg='none'
                        transition='0.5s all ease-in-out' 
                        _hover={{color: ONG_COLORS.BLUE, transform: 'scale(1.05)'}}
                        fontFamily={'truculenta'}
                        fontSize='18px'
                    >
                        <Icon  
                            fontSize='20px' 
                            m={1}
                            as={BsHouseFill}
                        />
                        Inicio
                    </Button>  
                </Link>
                <br />
                <Link to="/backoffice/news">
                    <Button
                        color='white' 
                        bg='none'
                        transition='0.5s all ease-in-out' 
                        _hover={{color: ONG_COLORS.BLUE, transform: 'scale(1.05)'}}
                        fontFamily={'truculenta'}
                        fontSize='18px'
                    >
                        <Icon 
                            fontSize='20px' 
                            m={1}
                            as={BsFilePost} 
                        />
                        Novedades
                    </Button>
                </Link>
                <br />
                <Link to="/backoffice/categories">
                    <Button 
                        color='white' 
                        bg='none'
                        transition='0.5s all ease-in-out' 
                        _hover={{color: ONG_COLORS.BLUE, transform: 'scale(1.05)'}}
                        fontFamily={'truculenta'}
                        fontSize='18px'
                    >
                        <Icon 
                            fontSize='20px' 
                            m={1}
                            as={BsInboxesFill}/>
                        Categorías
                    </Button>
                </Link>
                <br />
                <Link to="/backoffice/testimonials">
                    <Button 
                        color='white' 
                        bg='none'
                        transition='0.5s all ease-in-out' 
                        _hover={{color: ONG_COLORS.BLUE, transform: 'scale(1.05)'}}
                        fontFamily={'truculenta'}
                        fontSize='18px'
                    >
                        <Icon 
                            fontSize='20px' 
                            m={1}
                            as={BsFillChatQuoteFill}
                        />
                        Testimonios
                    </Button>
                </Link>
                <br />
                <Link to="/backoffice/activities">
                    <Button 
                        color='white' 
                        bg='none'
                        transition='0.5s all ease-in-out' 
                        _hover={{color: ONG_COLORS.BLUE, transform: 'scale(1.05)'}}
                        fontFamily={'truculenta'}
                        fontSize='18px'
                    >
                        <Icon
                            fontSize='20px' 
                            m={1}
                            as={BsFillCalendarFill}
                        />
                        Actividades
                    </Button>
                </Link>
                <br />
                <Link to="/backoffice/edit-organization">
                    <Button  
                        color='white' 
                        bg='none'
                        transition='0.5s all ease-in-out' 
                        _hover={{color: ONG_COLORS.BLUE, transform: 'scale(1.05)'}}
                        fontFamily={'truculenta'}
                        fontSize='18px'
                        >
                        <Icon                                 
                            fontSize='20px' 
                            m={1}
                            as={FaBuilding} 
                        />
                        Organización
                    </Button>
                </Link>
                <br />
                <Link to="/backoffice/users">
                    <Button 
                        color='white' 
                        bg='none'
                        transition='0.5s all ease-in-out' 
                       _hover={{color: ONG_COLORS.BLUE, transform: 'scale(1.05)'}}
                       fontFamily={'truculenta'}
                       fontSize='18px'
                    >
                        <Icon  
                            fontSize='20px' 
                            m={1}
                            as={BsFillPeopleFill}
                        />
                        Usuarios
                    </Button>
                </Link>
                <br />
                <Link to="/backoffice/contacts">
                        <Button 
                            color='white' 
                            bg='none'
                            transition='0.5s all ease-in-out' 
                            _hover={{color: ONG_COLORS.BLUE, transform: 'scale(1.05)'}} 
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        >
                            <Icon 
                                fontSize='20px' 
                                m={1}
                                as={FaAddressBook}
                            />
                            Contactos
                        </Button>
                </Link>
                <br/>
                <Link to="/">
                        <Button 
                            color='white' 
                            bg='none'
                            transition='0.5s all ease-in-out' 
                            _hover={{color: ONG_COLORS.BLUE, transform: 'scale(1.05)'}} 
                            onClick={onClick}
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        >
                            <Icon 
                                fontSize='20px' 
                                m={1}
                                as={FaArrowLeft}
                            />
                            Volver al inicio
                        </Button>
                </Link>
            </Flex>
        </Flex>
        </>
    )
}
