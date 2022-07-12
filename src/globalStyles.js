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
`;
export default GlobalStyle;