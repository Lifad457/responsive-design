import styled from "styled-components";
import heroBG from "../../assets/images/final-project/hero-bg.jpg";

export const UpperPart = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, black 0%, transparent 10%, transparent 90%, black 100%), url(${heroBG});
    background-size: cover;
    background-position: 60%;
    padding-left: 2em;
    background-color: var(--clr-dark);

    h1, p {
        max-width: 50%;
    }

    h1 {
        font-size: var(--fs-normal);
        font-weight: var(--fw-bold);
        margin: 3em 0 1em;
    }

    p {
        font-size: var(--fs-small);
        margin-bottom: 2em;
    }

    span {
        color: var(--clr-primary);
    }

    a {
        display: inline-block;
        width: fit-content;
        text-decoration: none;
        background-color: var(--clr-primary);
        padding: 1em 1.9em;
        font-size: var(--fs-small);
        font-weight: var(--fw-black);
        color: var(--clr-dark);
        cursor: pointer;
        margin-bottom: 4em;
    }
`
export const LowerPart = styled.div`
    padding: 3em 3em;
        
    article {
        display: flex;
        flex-direction: column;
        background-color: var(--clr-light);
        color: var(--clr-dark);
        text-align: center;
    }

    h1 {
        font-size: var(--fs-normal);
        font-weight: var(--fw-bold);
    }

    h1::after {
        content: "";
        display: block;
        border-bottom: 3px solid var(--clr-primary);
        width: 80px;
        margin: 0 auto;
        padding-bottom: .5em;
    }

    p {
        font-size: var(--fs-small);
    }

    @media screen and (min-width: 650px) {
        padding: 3em 4em;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 4em;
    }
`