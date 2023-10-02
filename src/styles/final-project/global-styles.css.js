import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    &:root {
        --ff-primary: 'Montserrat', sans-serif;
        --ff-secondary: 'Inter', sans-serif;

        --fw-reg: 400;
        --fw-bold: 700;
        --fw-black: 900;

        --fs-big: 1.938rem;
        --fs-normal: 1.5rem;
        --fs-small: 1.125rem;
        --fs-extra-small: 0.875rem;
        
        --clr-light: #fff;
        --clr-dark: #000;
        --clr-grey: #EBEBEB;
        --clr-primary: #FFE600;
        --clr-secondary: #404040;
    }

    body {
        font-family: var(--ff-primary);
        background-color: var(--clr-dark);
        color: var(--clr-light);

        padding-left: 1.7em;
        padding-right: 1.7em;
    }
`
export default GlobalStyle