import styled, {css} from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: var(--clr-dark);
    padding-left: 2em;

    @media screen and (min-width: 650px) {
        justify-content: flex-start;
    }
`

export const Logo = styled.div`
    background: var(--clr-primary);

    img {
        padding-top: 2em;
        padding-left: .5em;
        padding-right: .5em;
    }
`

export const Menu = styled.div`
    padding: 2em 2em 0;
    cursor: pointer;
    z-index: 99;
`

export const Burger = styled.div`
    display: inline-block;
    position: relative;
    background-color: var(--clr-light);
    border-radius: 2em;
    width: 30px;
    height: 2px;
    transform-origin: center;
    transition: all .1s ease;
    z-index: 99;

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: 99;
        background-color: var(--clr-light);
        border-radius: 2em;
        width: 30px;
        height: 2px;
    }

    &::before {
        bottom: 7px;
    }

    &::after {
        top: 7px;
    }

    ${props => props.$switchmenu == 'true' && css `
            transform: rotate(45deg);
            width: 20px;
            &::before {
                transform: rotate(-90deg);
                top: 0;
                width: 20px;
            }
            &::after {
                display: none;
            }
        `
    };

    @media (min-width: 650px) {
        display: none;
    }
`

export const Navigation = styled.ul`
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 66%;
    z-index: 8;
    background-color: var(--clr-dark);
    transform: translateX(0%);
    padding: 5em 2em 0;
    text-align: end;

    a {
        text-decoration: none;
        color: var(--clr-light);
        font-size: var(--fs-big);
        font-weight: var(--fw-bold);
    }

    a.active { 
      border-bottom: 3px var(--clr-primary) solid;
    }

    li {
        list-style: none;
        padding-bottom: 2em;
    }

    ${ props => props.$switchmenu == 'false' && css `
            display: none;
            transform: translateX(100%);
        `
    } 

    @media (min-width: 650px) {
        display: flex;
        position: relative;
        transform: translateX(0%);
        background-color: none;
        width: unset;
        height: auto;
        padding: 0;
        z-index: 99;
        a {
            color: var(--clr-light);
            font-size: var(--fs-small);
            font-weight: var(--fw-bold);
        }

        a.active { 
          border-bottom: 3px var(--clr-primary) solid;
        }

        li {
            padding: 0 1em;
        }
    }
`
