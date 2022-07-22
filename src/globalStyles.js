import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-faimly:'Montserrat', sans-sarif;
   
}
html,body{
    overflow-x:hidden;
   
}
.Nav_bg{
  background-color:#8c07f2;
}
.head-text{
  position:relative;
  color:red;
  
}
.center-text{
  position:absolute;
  top:70%;
  left:80%;
  width:fit-content;
  transform: translate(-50%, -50%);
}
.btn-hover{
  &:hover{
    text-decoration:underline;
  }
}
.nav-items{
  display:none;
}
.dropdown-menu {
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
}
.dropdown-menu li{
  background: #1888ff;
  cursor: pointer;
}
.dropdown-menu li:hover{
  background: #5cabff;
}
.dropdown-menu clicked {
  display: none;
}
.dropdown-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
}
.Contactus, .about {
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}
.container{
  // height:50%;
  // width:50%;
  // margin:2px;
  margin-left:10px;
//  display:flex;
}
.prefix, .counter-number, .suffix {
  color: #F8636C;
  font-size: 70px;
  font-weight: bold;
  text-shadow: 0px 0px 0px rgb(0 0 0 / 30%);
}
.title {
  margin-left:20px;
  font-size:20px;
}
.container-item {
  display:flex;
  margin-left:5px;
}
`;
export default GlobalStyle;