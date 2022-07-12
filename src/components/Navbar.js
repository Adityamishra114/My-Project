import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
// import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.png";
import GlobalStyle from "../globalStyles";

const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  top:0;
  background:transparent;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &.active { 
    color: #000000; 
    } 

  &:hover {
    background: black;
    border-radius: 12px;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
let LogoImage = styled.img`
  background-image: url(../images/logo.png);
`;

const MenuBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 80px;
    width: 40px;
    cursor: pointer;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: white;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navbar = ({ toggle }) => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <Nav className={color ? "Nav_bg" : "Nav"}>
      {/* <img src={logo} alt="Logo" />; */}
      <LogoImage src={logo} />
      <MenuBars onClick={toggle}>
        <FaBars />
      </MenuBars>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
