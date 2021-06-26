import React from 'react'
import {
    Flex, 
    Button,
    Icon, 
    IconButton, 
    Box, 
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, 
    Text,
    useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {BsHouseFill, BsFilePost, BsInboxesFill, BsFillChatQuoteFill, BsFillCalendarFill, BsFillPeopleFill} from 'react-icons/bs'
import { FaAddressBook, FaBuilding } from "react-icons/fa"
import {ONG_COLORS} from '../../../consts/const';
import { Link } from 'react-router-dom';

const DrawerMenuBackoffice = () => {
    const { isOpen, onOpen, onClose } = useDisclosure() 
    const btnRef = React.useRef()

    return (
        <>
        <Box width='100%' bgColor='#292929' borderBottom={`2px solid${ONG_COLORS.RED}`} display={{sm: 'block', md:'none', lg:'none'}}>
            <IconButton bgColor='#292929' _hover={{opacity: 0.9}} color='white' ref={btnRef} onClick={onOpen} icon={<HamburgerIcon/>}/>
        </Box>
        <Drawer
            isOpen={isOpen}
            placement={'left'}
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton color='white' />
                <DrawerHeader borderBottom={`2px solid ${ONG_COLORS.RED}`}bg='#292929' color='white'><Text>Menú de Edición</Text></DrawerHeader>
                <DrawerBody bg={'white'}>
                <Flex flexDirection="column" justify="space-around" >
                    <Link to="/backoffice" onClick={onClose}>
                        <Button 
                            _hover={{opacity: 0.9, padding: 0.1}} 
                            transition='0.5s all ease-in-out' 
                            color='#292929' 
                            bg='none' 
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        > 
                            <Icon  
                                fontSize='30px' 
                                as={BsHouseFill}
                                m={1}
                            />
                            Inicio
                        </Button>
                    </Link>
                    <br />
                    <Link to="/backoffice/news" onClick={onClose}>
                        <Button 
                            transition='0.5s all ease-in-out' 
                            _hover={{opacity: 0.9, padding: 0.1}} 
                            color='#292929' 
                            bg='none'
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        >
                            <Icon 
                                fontSize='30px' 
                                as={BsFilePost} 
                                m={1}
                            />
                            Novedades
                        </Button>
                    </Link>
                    <br />
                    <Link to="/backoffice/categories" onClick={onClose}>
                        <Button 
                            transition='0.5s all ease-in-out' 
                            _hover={{opacity: 0.9, padding: 0.1}} 
                            color='#292929' 
                            bg='none'
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        >
                            <Icon 
                                fontSize='30px' 
                                as={BsInboxesFill}
                                m={1}/>
                            Categorías
                        </Button>
                    </Link>
                    <br />
                    <Link to="/backoffice/testimonials" onClick={onClose}>
                        <Button 
                            transition='0.5s all ease-in-out' 
                            _hover={{opacity: 0.9, padding: 0.1}} 
                            color='#292929' 
                            bg='none'
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        >
                            <Icon 
                                fontSize='30px' 
                                as={BsFillChatQuoteFill}
                                m={1}
                            />
                            Testimonios
                        </Button>
                        </Link>
                    <br />
                    <Link to="/backoffice/activities" onClick={onClose}> 
                        <Button 
                            transition='0.5s all ease-in-out' 
                            _hover={{opacity: 0.9, padding: 0.1}} 
                            color='#292929' 
                            bg='none'
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        >
                            <Icon  
                                fontSize='30px' 
                                as={BsFillCalendarFill}
                                m={1}
                            />
                            Actividades
                        </Button>
                    </Link>
                    <br />
                    <Link to="/backoffice/edit-organization" onClick={onClose}>
                        <Button 
                            transition='0.5s all ease-in-out' 
                            _hover={{opacity: 0.9, padding: 0.1}} 
                            color='#292929' 
                            bg='none'
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        >
                            <Icon 
                                fontSize='30px' 
                                as={FaBuilding} 
                                m={1}
                            />
                            Organización
                        </Button>
                    </Link>
                    <br />
                    <Link to="/backoffice/users" onClick={onClose}>
                        <Button 
                            _hover={{opacity: 0.9, padding: 0.1}} 
                            color='#292929' 
                            transition='0.5s all ease-in-out' 
                            bg='none'
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        >
                            <Icon  
                                fontSize='30px' 
                                as={BsFillPeopleFill}
                                m={1}
                            />
                            Usuarios
                        </Button>
                    </Link>
                    <br />
                    <Link to="/backoffice/contacts" onClick={onClose}>
                        <Button 
                            transition='0.5s all ease-in-out' 
                            _hover={{opacity: 0.9, padding: 0.1}}
                            color='#292929' 
                            bg='none'
                            fontFamily={'truculenta'}
                            fontSize='18px'
                        >
                            <Icon 
                                fontSize='30px' 
                                as={FaAddressBook}
                                m={1}
                            />
                            Contactos
                        </Button>
                    </Link>
                </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default DrawerMenuBackoffice