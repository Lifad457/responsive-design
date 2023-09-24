import styled from 'styled-components'

export const Container = styled.div`
    padding: 2em 2em;
    max-width: 1200px;
    margin: 0 auto;
    
    .img-me {
        max-width: 100%;
        width: 100%;
        height: 133px;
        object-fit: cover;
    }

    .desc-me {
        color: #143774;
        font-size: .8rem;
        font-weight: 300;
    }

    .h1-me {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        font-size: 1.2rem;
        margin: 0;
        padding: 2em 0;
        color: #143774;
    }

    @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 2.5fr 1fr;
        grid-gap: 3em;
    }
`