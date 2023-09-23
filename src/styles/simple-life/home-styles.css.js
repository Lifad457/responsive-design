import styled from 'styled-components'

export const Container = styled.div`
    padding: 2em 1em;

    .post {
        margin-bottom: 3em;
    }

    img {
        width: 100%;
    }

    .title {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    h1 {
        color: #143774;
        font-family: 'Lora', serif;
        font-weight: 400;
        font-size: 1.5rem;
    }

    .dt-post {
        color: #707070;
        font-size: .7rem;
    }

    .desc {
        color: #707070;
        font-size: 1.1rem;
        font-weight: 300;
    }

    a {
        text-decoration: none;
        font-weight: 700;
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
        margin-bottom: 4em;
    }

    .frame p {
        color: #143774;
        font-size: .8rem;
        font-weight: 300;
    }

    .img-me {
        max-width: 100%;
        height: 133px;
        object-fit: cover;
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

    @media screen and (max-width: 450px) {
        .title {
            display: block;
        }

        .dt-post {
            text-align: right;
        }
    }
`