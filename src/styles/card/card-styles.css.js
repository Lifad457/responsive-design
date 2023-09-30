import styled from 'styled-components'
import Bg from '../../assets/images/card/tech.jpg'

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    min-height: 650px;
    height: 100vh;

    @media screen and (min-width: 900px){
        flex-direction: row;
    }
`

export const LeftCol = styled.div`
    background: url(${Bg}) no-repeat;
    background-size: cover;
    background-position: center;
    flex-basis: 40%;
`

export const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
    flex-basis: 60%;

    @media screen and (min-width: 900px){
        padding: 3em;
    }
`

export const Title = styled.h1`
    font-size: var(--fs-s-title);
    font-weight: var(--fw-bold);
    color: var(--clr-secondary);

    @media screen and (min-width: 900px){
        font-size: var(--fs-l-title);
        margin-top: auto;
    }
`

export const Desc = styled.p`
    font-size: var(--fs-s-body);
    color: var(--clr-light);
    line-height: 2;
    letter-spacing: .1em;
    opacity: 0.8;

    @media screen and (min-width: 900px){
        font-size: var(--fs-l-body);
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`

export const Etc = styled.p`
    font-size: var(--fs-s-body);
    color: var(--clr-light);
    opacity: 0.6;
    width: 2em;
    line-height: 1.2;
    margin-bottom: 0;
    
    strong {
        font-size: var(--fs-s-title);
        font-weight: var(--fw-bold);
    }

    @media screen and (min-width: 900px){
        font-size: var(--fs-l-body);

        strong {
            font-size: var(--fs-l-title);
        }
    }
`

export const Btn = styled.input`
    display: inline-block;
    align-self: flex-end;
    font-size: var(--fs-s-button);
    font-weight: var(--fw-black);
    color: var(--clr-primary);
    background-color: var(--clr-secondary);
    padding: 0.6em 1.8em;
    border: none;

    @media screen and (min-width: 900px){
        font-size: var(--fs-l-button);
    }
`