import React, { useState } from "react";
// import { MenuItems } from './MenuItems';
import { menuData } from "../data/MenuData";
import { Link } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import Navbar from "./Navbar";
import styled from "styled-components";
import Dropdown from "./Dropdown";
// import {submenu } from '../data/MenuData';

const NavLink = styled.div`
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
    border-radius: 12px;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavDropdown = (props) => {
  const item = props.item;
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const submenus = props.submenus;
  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <div className="link-container" onMouseLeave={onMouseLeave}>
      <li className="nav-items">
        {item.submenu ? (
    <>
      <NavMenu
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {submenus.map((submenu, index) => {
          return (
            <NavMenuLinks
              key={index}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                className={submenu.cName}
                to={submenu.path}
                onClick={() => setClick(false)}
              >
                {submenu.title}
              </Link>
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      {dropdown && <NavDropdown submenus={item.submenu} />}
    </>
        ): (
          <Link 
          className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}>{item}
          </Link>
    )}
    </li>
    </div>
  );
};

export default NavDropdown;
