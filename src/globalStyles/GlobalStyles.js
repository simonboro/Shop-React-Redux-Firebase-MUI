import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{

    /* background-color: #ffffff; */
    background-color: #f2f1ec;
    /* background-color: #e5e5e5; */
    color: #17161a;;
    font-family: 'Rubik', sans-serif;
}   

button {
    cursor: pointer;
}
ul {
  list-style: none;
}


`;

export default GlobalStyle;
