import styled from 'styled-components'

export const Container = styled.div`
    padding: 2em 2em;
    max-width: 1200px;
    margin: 0 auto;

    .about-img {
        width: 100%;
        height: auto;
        margin-top: 2em;
    }

    .about-h1 {
        color: #143774;
        font-family: 'Lora', serif;
        font-weight: 400;
        font-size: 1.5rem;
        margin: 2em 0 1em;
    }

    p {
        color: #707070;
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.4;
    }

    .about-h2 {
        font-family: 'Lora', serif;
        font-weight: 400;
        font-size: 1.3rem;
        color: #1792D2;
    }

    .col-2 {
        margin: 5em 0;
    }

    @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 2.5fr 1fr;
        grid-gap: 3em;

        .col-2 {
            margin: 2em 0;
        }
    }
`