import styled from "styled-components";

export const UpperPart = styled.div`
    color: var(--clr-dark);
    padding: 2em 2em;

    h1, p {
        text-align: center;
    }

    h1 {
        font-weight: var(--fw-black);
        font-size: var(--fs-extra-big);
        position: relative;
    }

    h1::before {
        content: '';
        position: absolute;
        top: 0.7em;
        left: 10;
        min-width: 240px;
        min-height: 30px;
        background-color: var(--clr-primary);
        z-index: -1;
    }

    p {
        width: 80%;
        margin: 0 auto;
        font-size: var(--fs-normal);
        font-weight: var(--fw-bold);
    }
`

export const LowerPart = styled.div`
    color: var(--clr-dark);
    padding: 2em 2em;

    img {
        width: 100%;
        object-fit: cover;
        box-shadow: 7px 7px var(--clr-dark), 14px 14px var(--clr-primary);
        margin-bottom: 2em;
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
        margin: 0;
        padding-bottom: .3em;
    }

    p {
        font-size: var(--fs-small);
        padding: .5em 0;
    }

    form {
        margin: 2em auto;
    }

    label {
        display: block;
        font-size: var(--fs-small);
        font-weight: var(--fw-bold);
        margin-bottom: .5em;
    }

    input {
        width: 100%;
        padding: .7em;
        margin-bottom: 1.5em;
    }

    textarea {
        width: 100%;
        padding: 2.5em;
        margin-bottom: 1.5em;
        resize: none;
    }

    button {
        display: flex;
        margin-left: auto;
        margin-right: 0;
        background: var(--clr-primary);
        border: none;
        padding: .8em 3em;
        font-size: var(--fs-small);
        font-weight: var(--fw-bold);
        cursor: pointer;
    }

    @media screen and (min-width: 650px) {
        display: flex;

        .left-col {
            width: 50%;
            height: 100%;
            margin: 2em 2em 0 0;
        }

        img {
            object-fit: contain;
            box-shadow: 7px 7px var(--clr-dark), 14px 14px var(--clr-primary);
        }

        .right-col {
            width: 50%;
            margin-left: 2em;
        }
    }
`