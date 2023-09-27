import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    &:root {
        --ff-primary: 'Source Sans Pro', sans-serif;

        --fw-reg: 400;
        --fw-bold: 700;
        --fw-black: 900;

        --fs-l-h1: 3.5rem;
        --fs-l-h2: 1.75rem;
        --fs-l-body: 1.125rem;

        --fs-s-h1: 2.25rem;
        --fs-s-h2: 1.3125rem;
        --fs-s-body: 1rem;

        --fs-small: 0.625rem;
        
        --clr-light: #fff;
        --clr-primary: #F18119;
        --clr-secondary: #404040;
    }

    body {
        font-family: var(--ff-primary);
        font-size: var(--fs-s-body);
    }
`
export default GlobalStyle