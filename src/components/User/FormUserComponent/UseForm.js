import { useState, useContext } from 'react'
import { UserContext } from '../ContextUser/UserContext'

const UseForm = () => {

  const { user, updateUser } = useContext(UserContext)

  const fields = {
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role
  }

  const [data, setData] = useState(fields)
  const [show, setShow] = useState(false)

  const showButton = () => { setShow(true) }
  const hideButton = () => { setShow(false) }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    showButton()
  }

  const handleSubmit = () => {
    updateUser(data)
    hideButton()
  }

  return [handleChange, handleSubmit, show]
}

export default UseForm