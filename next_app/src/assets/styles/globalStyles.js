import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: "Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif;
  color: white;
}

body{
  background: ${(props) => props.theme.colors.background};
  overflow:hidden;
  
}

`;
