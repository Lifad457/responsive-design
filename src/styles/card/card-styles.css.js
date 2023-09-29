import styled from 'styled-components'
import Bg from '../../assets/images/card/tech.jpg'

export const LeftCol = styled.div`
    min-height: 30vh;
    background: url(${Bg}) no-repeat;
    background-size: cover;
    background-position: center;
    
`

export const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 70vh;
    padding: 2em;
`

export const Title = styled.h1`
    font-size: var(--fs-l-title);
    font-weight: var(--fw-bold);
    color: var(--clr-secondary);
`

export const Desc = styled.p`
    font-size: var(--fs-l-body);
    color: var(--clr-light);
    line-height: 2.4;
    letter-spacing: .1em;
    opacity: 0.8;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`

export const Etc = styled.p`
    font-size: var(--fs-l-body);
    color: var(--clr-light);
    opacity: 0.6;
    width: 2em;
    line-height: 1.2;
    margin-bottom: 0;
    
    strong {
        font-size: var(--fs-l-title);
        font-weight: var(--fw-bold);
    }
`

export const Btn = styled.input`
    display: inline-block;
    align-self: flex-end;
    font-size: var(--fs-l-button);
    font-weight: var(--fw-black);
    color: var(--clr-primary);
    background-color: var(--clr-secondary);
    padding: 0.6em 1.8em;
    border: none;
`