// imports from react.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// imports from externals libraries. 
import { Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

// imports from local files.
import { logout } from '../../../store/UserStore/UserStore';

// imports styles.
import { ArrowDonw } from '../headerStyles';

import { ROLE_ADMIN } from '../../../consts/const';

const BackofficeButton = ({ role }) => {
  if (role === ROLE_ADMIN) {
    return (
      <Link to="/backoffice">
        <MenuItem>Backoffice</MenuItem>
      </Link>
    );
  }
  return null;
}

function AvatarMenu() {
  const { role } = useSelector (state => state.user); 
  const dispatch = useDispatch();

  const closeSesion = () => {
    localStorage.removeItem ("token");  
    dispatch (logout());
  }

  return (
    <div>
      <Menu>
        <MenuButton>
          <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <ArrowDonw className="fas fa-sort-down"></ArrowDonw>
        </MenuButton>
  
        <MenuList>
          <Link to="/user-profile">
            <MenuItem>Perfil</MenuItem>
          </Link>
          <BackofficeButton role={role}/>
          <MenuItem onClick={closeSesion}>Cerrar Sesion</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default AvatarMenu;