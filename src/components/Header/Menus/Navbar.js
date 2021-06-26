import React from 'react'
import { URL } from '../../../consts/constRoutes';
import { Link } from 'react-router-dom';
import { Li, NavbarWrapper } from '../headerStyles';
import { useHeaderCall } from '../HeaderProvider'

const Navbar = () => {

  const { open } = useHeaderCall()

  return (
    <NavbarWrapper open={open}>
      {URL.map((item) => {
        return (
          <Li key={item.id}>
            <Link to={item.url}>
              {item.title}
            </Link>
          </Li>
        );
      })}
    </NavbarWrapper>
  )
}

export default Navbar
