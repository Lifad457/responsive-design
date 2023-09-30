import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    &:root {
        --ff-primary: 'Source Sans Pro', sans-serif;

        --fw-reg: 400;
        --fw-bold: 700;
        --fw-black: 900;

        --fs-l-title: 2.95rem;
        --fs-l-body: 1.525rem;
        --fs-l-button: 1.85rem;

        --fs-s-title: 2.25rem;
        --fs-s-body: 1.125rem;
        --fs-s-button: 1.25rem;

        --fs-small: 0.625rem;
        
        --clr-light: #fff;
        --clr-primary: #111D4A;
        --clr-secondary: #05CBE9;
    }

    body {
        font-family: var(--ff-primary);
        background-color: var(--clr-primary);
    }
`
export default GlobalStyle