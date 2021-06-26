import React, { useState } from 'react'
import { useQuery, useMutation } from 'react-query' 
import { useParams } from 'react-router-dom'
import FormEditUser from './FormEditUserComponent'
import { ToastAlertService } from '../../../services/AlertService/AlertService'
import { EditUser, GetUser } from './UsersQuery'
import { Center, Box } from "@chakra-ui/react"
import { USER_EDITED, USER_EDITED_TITLE } from '../../../consts/const'

const BackofficeUserEdit = () => {
    const {id} = useParams()     
    const [user, setUser] = useState({name: '', lastname: '', email:''})
        
    const {isLoading, error, data} = useQuery(['user', id], async() => await GetUser(id))
    const mutation = useMutation(async(user) => await EditUser(user))
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({
            ...user,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        mutation.mutate({id: id, user: user})
    }

    if(mutation.isSuccess) {
        ToastAlertService({icon:'success', title:USER_EDITED_TITLE, text:USER_EDITED})
    }

    return(
        <Box w='100%' h='90vh'>
            <Center w='100%' h='100%'>
                <FormEditUser 
                    mutation={mutation} 
                    isLoading={isLoading} 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange} 
                    data={data}
                />
            </Center>
        </Box>
    )
}

export default BackofficeUserEdit