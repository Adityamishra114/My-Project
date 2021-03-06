import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
// import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.png";
import NavDropdown from "./NavDropdown";
import NavMenuItem from "./NavMenuItem";

const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0;
  background: transparent;
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
    background: #e81038;
    border-radius: 6px;
    // padding: 11px;
    width: 200px;
  }
`;
// const Nav_bg = styled.div`
// background-color:#8c07f2;`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
// const NavLogo = styled(Link)``;
const LogoImage = styled.img`
  background-image: url(../images/logo.png);
  cursor: pointer;
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
  margin-right: 5px;
  font-size: 20px;

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
    <Nav className={color ? " Nav, Nav_bg" : "Nav"}>
      {/* <Link to="/">
        <img src={logo} alt="Logo" style={{ height: "120px", width: "80px" }} />
      </Link> */}
      <LogoImage to={"/"} src={logo} />
      <MenuBars onClick={toggle}>
        <FaBars />
      </MenuBars>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuItem item={item} key={index} index={index} />
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
