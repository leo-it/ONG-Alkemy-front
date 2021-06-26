import styled from "styled-components";

import { ONG_COLORS } from '../../consts/const';

export const NavbarWrapper = styled.nav`
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 5vh;
  bottom:0;
  left: ${(props) => (props.open ? "0" : "-100%")};
  width: 60%;
  height: 100%;
  transition: left 0.5s ease-in;
  
  @media only screen and (min-width: 861px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  align-items: center;
  background: #333;
  border-bottom: solid 2px ${ONG_COLORS.RED};
  display: flex !important;
  justify-content: space-around !important;
  position: fixed;
  top: 0;
  z-index: 100;
  overflow:hidden;

`;

export const Li = styled.li`
  display: inline-block;
  font-family: 'Truculenta', sans-serif;
  font-size: 20px;
  list-style: none;
  padding-top: .4rem;
  padding: .4rem;
  margin-right: .9rem;
  transition: all 200ms ease-in;
  color:#fff;
  
  &:hover {
    color: #000;
    background-color: ${ONG_COLORS.BLUE};
    border-radius: 5px;
  }
`;

export const ArrowDonw = styled.i`
  color: #fff;
  margin-left: 10px;
`;

export const MenuButtonWrapper = styled.button`
  border: none;
  margin-top: .3rem;
  padding: 3px;
  height: 5vh;
  
  @media only screen and (min-width: 861px) {
    display: none;
  }
`;
