import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
&:focus,&:active{
    outline: none;
}
}
body{
    background-color: #F1F3F6;
}
@media screen  and (max-width : 1200px){
    html{
        font-size:14px
    }
}
@media screen  and (max-width : 720px){
    html{
        font-size:12px
    }
    
}
@media screen  and (max-width : 450px){
    html{
        font-size:10px
    }
}
@media screen  and (max-width : 400px){
    html{
        font-size:8px
    }
}
`;
export default GlobalStyles;
