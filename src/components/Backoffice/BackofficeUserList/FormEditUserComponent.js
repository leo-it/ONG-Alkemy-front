import React from 'react'
import {
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Flex,
    Spacer
  } from "@chakra-ui/react"
import LoadingComponent from '../../LoadingComponent'

const FormEditUser = ({mutation, isLoading, handleChange, handleSubmit, data}) => {
    return(
        <Box  maxW="lg" boxShadow={'2xl'} bgColor="#FFFFFF">
        {isLoading ? <LoadingComponent /> :
        <>
        <Flex px={20} bgColor="#1e607a">
            <Box p={5}>
                <Heading fontSize={'xl'} color="#FFF" fontFamily={'body'} flex={1}>
                    Editar usario
                </Heading>
            </Box> 
            <Spacer />
            <Box p={3}>
                <Button flex={1} colorScheme={'blue'} type='submit' isDisabled={mutation.isLoading} onClick={(e) => handleSubmit(e)} fontSize={'xl'} color="#FFF" fontFamily={'body'} flex={1}>
                    Editar
                </Button>
            </Box> 
        </Flex>
            <Box maxW="lg" w='100%' p={10} borderWidth="1px">    
                <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input variant='flushed' name='name' onChange={(e) => handleChange(e)} type='text' defaultValue={data.user.name} />
                </FormControl> 
                <FormControl>
                    <FormLabel>Apellido</FormLabel>
                    <Input variant='flushed' name='lastname' onChange={(e) => handleChange(e)} type='text' defaultValue={data.user.lastname} />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input variant='flushed' name='email' onChange={(e) => handleChange(e)} type='text' defaultValue={data.user.email} />
                </FormControl>
            </Box>
        </>
        }      
        </Box>
    )
}

export default FormEditUser