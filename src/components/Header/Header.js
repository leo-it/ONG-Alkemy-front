// imports from react. 
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// imports from externals libraries.
import { Image } from '@chakra-ui/react';
// imports from local files.
import LoginButtons from './Menus/LoginButtons';
import AvatarMenu from './Menus/AvatarMenu';
import Navbar from './Menus/Navbar';
import MenuButton from './Menus/MenuButton';
import { HeaderProvider } from './HeaderProvider'
// import styles.
import { HeaderBox } from "./headerStyles";
import logo from '../../assets/img/logo-somos-mas-blanco.png';

const SelectLogin = ({ user }) => (
  user ? (<AvatarMenu />) : (<LoginButtons />)
)

function Header() {

  const { name } = useSelector(state => state.user);
  return (
    <HeaderProvider>
      <HeaderBox>
        {/* Menu Hamburger Button */}
        <MenuButton />
        {/* Logo */}
        <Link to="/">
          <Image width={["70px", "100px"]} src={logo} alt="logo somos más" />
        </Link>
        {/* Navbar Links */}
        <Navbar />
        {/* UserProfile */}
        <SelectLogin user={name} />
      </HeaderBox>
    </HeaderProvider>
  );
}

export default Header