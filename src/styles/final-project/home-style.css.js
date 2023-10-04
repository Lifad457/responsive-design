import styled from "styled-components";
import heroBG from "../../assets/images/final-project/hero-bg.jpg";

export const UpperPart = styled.div`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, black 0%, transparent 10%, transparent 90%, black 100%), url(${heroBG});
    background-position: 60% 60%;
    padding-left: 2em;

    h1, p {
        padding-right: 8em;
    }

    h1 {
        font-size: var(--fs-normal);
        font-weight: var(--fw-bold);
        margin: 2.5em 0 1em;
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
    }
`
export const LowerPart = styled.div`

`