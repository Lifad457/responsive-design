import styled from "styled-components";

export const Container = styled.div`
    .post {
        margin-bottom: 3em;
    }

    .post-img {
        width: 100%;
    }

    .post-h1 {
        color: #143774;
        font-family: 'Lora', serif;
        font-weight: 400;
        font-size: 1.5rem;
    }

    .dt-post {
        color: #707070;
        font-size: .7rem;
    }

    .title {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
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

    @media screen and (max-width: 450px) {
        .title {
            display: block;
        }

        .dt-post {
            text-align: right;
        }
    }
`