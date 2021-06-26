import axios from 'axios'

export const GetUsers = async() => {
    const data = await axios.get(process.env.REACT_APP_BACKEND_URL + '/users')
    return data.data.users
}

export const GetUser = async(id) => {
    const {data} = await axios.get(process.env.REACT_APP_BACKEND_URL + '/users/' + id)
    return data
}

export const EditUser = async(user) => {
    const {data} = await axios.put(process.env.REACT_APP_BACKEND_URL + '/users/' + user.id, user.user)
    return data
}

export const DeleteUser = async(id) => {
    const {data} = await axios.delete(process.env.REACT_APP_BACKEND_URL + '/users/' + id)
    return data
}