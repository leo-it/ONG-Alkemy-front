import React from "react";
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { MenuButtonWrapper } from '../headerStyles'
import { useHeaderCall } from '../HeaderProvider'

function MenuButton() {

  const { open, handleClick } = useHeaderCall()

  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <HamburgerIcon w={6} h={6} color="#FFF" />
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <SmallCloseIcon w={6} h={6} color="#FFF" />
    </MenuButtonWrapper>
  );
}

export default MenuButton;
