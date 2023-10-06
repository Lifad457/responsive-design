import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    &:root {
        --ff-primary: 'Montserrat', sans-serif;
        --ff-secondary: 'Inter', sans-serif;

        --fw-reg: 400;
        --fw-bold: 700;
        --fw-black: 900;

        --fs-extra-big: 2.938rem;
        --fs-big: 1.938rem;
        --fs-normal: 1.4rem;
        --fs-small: 1rem;
        --fs-extra-small: 0.875rem;
        
        --clr-light: #fff;
        --clr-dark: #000;
        --clr-grey: #EBEBEB;
        --clr-primary: #FFE600;
        --clr-secondary: #404040;
    }

    body {
        font-family: var(--ff-primary);
        color: var(--clr-light);
        line-height: 1.5;
    }
`
export default GlobalStyle