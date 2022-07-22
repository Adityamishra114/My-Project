import React, {useState} from 'react';
import NavDropdown from './NavDropdown';
import {Link} from 'react-router-dom';


function NavItems = (props) => {
    const items = props.items;
    const [click , setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const submenus = props.submenus;
    const onMouseEnter = () => {
        if(window.innerWidth < 768) {
            setDropdown(false)
        } else {
            setDropdown(true);
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 768) {
            setDropdown(false)
        } else {
            setDropdown(false);
        }
    }
  return (
    <div className='link-container' onMouseLeave={onMouseLeave}>
    <NavMenu
    </div>
  )
}

export default NavItems