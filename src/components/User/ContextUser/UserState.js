import React, { useState } from 'react'
import { UserContext } from './UserContext'

const UserState = (props) => {

  const profile = {

    user: {
      name: "Maria",
      surname: "Perez",
      email: "mariadelcongo@gmail.com",
      role: "Presidente",
      profileImg: 'https://www.gobernaciondelmagdalena.gov.co/wp-content/uploads/2021/04/sin_foto.png'
    },
    preferences: {
      imgBackgroundUrl: "https://fondosmil.com/fondo/17010.jpg"
    },
    account: true
  }

  const [state, setState] = useState(profile)

  const updateUser = (user) => {
    const newUser = {
      name: user.name,
      surname: user.surname,
      email: user.email,
      role: user.role
    }
    setState({
      ...state,
      user: newUser
    })
  }

  const updatePreferences = (data) => {
    const newPreferences = {
      imgBackgroundUrl: data.imgBackgroundUrl,
      profileImgUrl: data.profileImg
    }
    setState({
      ...state,
      preferences: newPreferences
    })
  }

  const deleteAccount = () => {
    window.confirm('¿Seguro que quiere borrar su cuenta?')
    //setState({ account: false })
  }

  return (
    <UserContext.Provider value={{
      user: state.user,
      preferences: state.preferences,
      account: state.account,
      updateUser,
      updatePreferences,
      deleteAccount
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
