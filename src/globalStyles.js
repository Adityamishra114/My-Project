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
  background-color:#4aa832;
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
`;
export default GlobalStyle;