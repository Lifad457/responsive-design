import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Ubuntu', sans-serif;
    }

    .separator {
        width: 100%;
        height: 1px;
        background-color: #707070;
        opacity: .5;
        margin-top: 1em;
    }

    .frame {
        padding: 0 2em 1em;
        border: 20px solid rgba(112, 112, 112, .2);
        margin-bottom: 4em;
    }

    .recent {
        padding: 1em 2em 1em;
    }
`
export default GlobalStyle