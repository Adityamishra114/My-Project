import React from 'react'
import { AboutMenuData } from '../data/AboutMenuData';


const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #cd853f;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
display: grid;
grid-template-coloumns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);   
}
`;
const DropdownLink = styled(Link)`
display:flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
color: #fff;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover{
    color:#000d1a;
}`;

const AboutDropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
    
    <DropdownWrapper>
        <DropdownMenu>
            {AboutMenuData.map((item,index) => (
                <DropdownLink to={item.link} key={index}>
                    {item.title}
                </DropdownLink>
           ))}
        </DropdownMenu>
        
    </DropdownWrapper>
</DropdownContainer>
  )
}

export default AboutDropdown;
