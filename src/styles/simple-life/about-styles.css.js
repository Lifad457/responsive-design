import styled from 'styled-components'

export const Container = styled.div`
    padding: 2em 1em;

    img {
        width: 100%;
        height: auto;
        margin-top: 2em;
    }

    h1 {
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

    h2 {
        font-family: 'Lora', serif;
        font-weight: 400;
        font-size: 1.3rem;
        color: #1792D2;
    }
    
    .separator {
        width: 100%;
        height: 1px;
        background-color: #707070;
        opacity: .5;
        margin-top: 1em;
    }

    .frame {
        padding: 3em 2em 1em;
        border: 20px solid rgba(112, 112, 112, .2);
        margin: 4em 0;
    }

    .recent {
        padding: 1em 2em 1em;
    }
    
    .recent-post {
        padding-top: 2em;
    }

    .recent h1 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        font-size: 1.2rem;
        margin: 0;
        padding-top: 1em;
    }

    .recent h2 {
        font-family: 'Lora', serif;
        font-weight: 400;
        font-size: 1.2rem;
        color: #143774;
    }

    .recent img {
        max-width: 100%;
        height: 100%;
        max-height: 87px;
        object-fit: cover;
    }
`