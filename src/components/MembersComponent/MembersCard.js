import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    WrapItem,
    Box,
    Center,
    Image,
    Text,
    Alert,
    AlertIcon,
} from '@chakra-ui/react'
import { ERROR_MEMBERS } from '../../consts/const'

const MembersCard = () => {
    const [members, setMembers] = useState()

    const getMembers = async() => {
        const data = await axios.get(process.env.REACT_APP_BACKEND_URL + '/members/')
        console.log(data)
        return setMembers(data)
    }

    useEffect(() => {
        getMembers()
    })
    
    return (
        <>
            {members ? members.data.data.map((member) => {
                return (
                    <WrapItem borderRadius='sm'>
                        <Box>
                            <Box marginBottom={2} overflow='hidden' borderWidth='1px' borderRadius='lg' maxW='xs' boxShadow='dark-lg'>
                                <Image 
                                    boxSize='150px'
                                    objectFit='cover'
                                    src={member.image}
                                    alt={member.name}
                                    fallbackSrc="https://via.placeholder.com/150"
                                />
                            </Box>
                            <Center>
                                <Text fontSize='15px'>{member.name}</Text>
                            </Center>
                        </Box>
                    </WrapItem> 
                )
            } ) : <Alert status='error' variant='left-accent'><AlertIcon />{ERROR_MEMBERS}</Alert> }
        </>
    )
}

export default MembersCard