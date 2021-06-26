import React, { useContext, useState } from 'react'

const HeaderContext = React.createContext()

const useHeaderCall = () => {
  return useContext(HeaderContext)
}

const HeaderProvider = ({ children }) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderContext.Provider value={{
      handleClick,
      open
    }}>
      {children}
    </HeaderContext.Provider>
  )
}

export {
  useHeaderCall,
  HeaderProvider
}
