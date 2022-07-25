import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

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
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavMenuItem = ({ item, index }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const hoverOn = () => {
    setShowDropDown(true);
  };
  const hoverOff = () => {
    setShowDropDown(false);
  };

  return (
    <div key={index} style={{ position: "relative" }}>
      <NavMenuLinks
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
        to={item.link}
        key={index}
      >
        {item.title}
      </NavMenuLinks>
      {item.submenu && showDropDown && (
        <ul
          style={{
            backgroundColor: "#f9f9f9",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "column",
            top: "60px",
            gap: "10px",
            listStyle: "none",
            lineHeight: "21px",
            minWidth: "200px",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: "1",
          }}
        >
          {item.submenu.map((submenuItem, index) => (
            <li key={index}>{submenuItem.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavMenuItem;
