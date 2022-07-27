import React, { useState } from "react";
import NavDropdown from "./NavDropdown";
import { Link } from "react-router-dom";

const NavItems = (props) => {
  const items = props.items;
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
      <NavMenu />
    </div>
  );
};

export default NavItems;
{
  /* <Card
sx={{
  // width: "30%",
  marginTop: "20px",
  // gap: "1rem",
  flex: "30%",
  // display: "flex",
  // flexDirection: "column",
  height: "500px",
  marginLeft: "20px",
  marginRight: "20px",
}}
>
<Card
  sx={{
    marginTop: "30px",
    height: "auto",
    width: "150px",
    marginLeft: "30%",
  }}
>
  <CardMedia
    component="img"
    alt="Internal"
    height="auto"
    image={Frenc}
    maxWidth="100%"
    borderRadius="0"
    border="none"
    boxShadow="none"
  />
</Card>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    <h5>{heading}</h5>
  </Typography>
</CardContent>
<CardContent>
  <div style={{ display: "flex" }}>
    <Typography gutterBottom variant="h5" component="div">
      <h5>{title}</h5>
    </Typography>
  </div>
</CardContent>
</Card>
<Card
sx={{
  // width: "30%",
  marginTop: "20px",
  // gap: "1rem",
  flex: "30%",
  // display: "flex",
  // flexDirection: "column",
  height: "500px",
  marginLeft: "20px",
  marginRight: "20px",
}}
>
<Card
  sx={{
    marginTop: "30px",
    height: "auto",
    width: "150px",
    marginLeft: "30%",
  }}
>
  <CardMedia
    component="img"
    alt="Internal"
    height="auto"
    image={logo}
    maxWidth="100%"
    borderRadius="0"
    border="none"
    boxShadow="none"
  />
</Card>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    <h5>{heading}</h5>
  </Typography>
</CardContent>
<CardContent>
  <div style={{ display: "flex" }}>
    <Typography gutterBottom variant="h5" component="div">
      <h5>{title}</h5>
    </Typography>
  </div>
</CardContent> */
}
