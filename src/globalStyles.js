import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
    
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: "Montserrat", sans-serif;
}

`

export default GlobalStyle;
