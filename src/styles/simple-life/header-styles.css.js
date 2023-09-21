import styled from 'styled-components'

export const Container = styled.header`
    background: #F8F8F8;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
        margin: 0;
        font-family: 'Lora', serif;
        font-weight: 400;
        color: #143774;
        font-size: 2.1rem;
    }

    p {
        font-weight: 700;
        color: #1792D2;
        font-size: 0.75rem;
        letter-spacing: .15rem;
        margin: 0;
    }

    ul {
        list-style: none;
        padding: .5em 0 0;
    }

    li {
        margin: 1em 0;
    }

    a {
        text-decoration: none;
        color: #717171;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }

    a.active {
        border-bottom: 2px solid #707070;
    }
`