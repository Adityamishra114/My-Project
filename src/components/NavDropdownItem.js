import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;
const DropdownWrapper = styled.div``;
const NavDropdownItem = ({ item, index }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const hoverOn = () => {
    setShowDropDown(true);
  };
  const hoverOff = () => {
    setShowDropDown(false);
  };

  return (
    <div key={index} style={{ position: "relative" }}>
      <DropdownWrapper>
        <DropdownLink
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          to={item.link}
          key={index}
        >
          {item.title}
        </DropdownLink>
        {item.submenu && showDropDown && (
          <ul
            style={{
              //   backgroundColor: "grey",
              //   position: "absolute",
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   flexDirection: "column",
              //   top: "50px",
              //   gap: "10px",
              //   listStyle: "none",
              //   lineHeight: "21px",
              //   backgroundColor: "#f9f9f9",
              //   minWidth: "160px",
              //   boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
              //   zIndex: "1",
              backgroundColor: "#f9f9f9",
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              top: "50px",
              gap: "10px",
              listStyle: "none",
              lineHeight: "21px",
              minWidth: "250px",
              boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
              zIndex: "1",
              overflow: "hidden",
            }}
          >
            {item.submenu.map((submenuItem, index) => (
              <li key={index}>{submenuItem.title}</li>
            ))}
          </ul>
        )}
      </DropdownWrapper>
    </div>
  );
};

export default NavDropdownItem;
