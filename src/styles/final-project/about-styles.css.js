import styled from "styled-components";

export const UpperPart = styled.div`
    color: var(--clr-dark);

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
        top: .7em;
        left: 1;
        min-width: 275px;
        min-height: 30px;
        background-color: var(--clr-primary);
        z-index: -1;
    }

    p {
        width: 80%;
        margin: 2em auto;
        font-size: var(--fs-normal);
        font-weight: var(--fw-bold);
    }
`

export const LowerPart = styled.div`
    color: var(--clr-dark);
    padding: 0 2em;
    margin-bottom: 2em;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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

    @media screen and (min-width: 650px) {
        display: flex;

        img {
            width: 50%;
            height: 100%;
            margin: 2em 2em 2em 0;
            object-fit: contain;
            box-shadow: 7px 7px var(--clr-dark), 14px 14px var(--clr-primary);
        }

        .desc {
            width: 50%;
            margin-left: 2em;
        }
    }
`