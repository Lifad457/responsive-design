import styled, {css} from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.div`
    background: var(--clr-primary);

    img {
        padding-top: 2em;
        padding-left: .5em;
        padding-right: .5em;
    }
`

export const Burger = styled.div`
    display: inline-block;
    position: relative;
    margin: auto 0;
    background-color: var(--clr-light);
    border-radius: 2em;
    width: 30px;
    height: 2px;
    z-index: 99;
    transform-origin: center;
    transition: all 0.1s ease;

    &:before,
    &:after {
        content: '';
        background-color: var(--clr-light);
        border-radius: 2em;
        width: 30px;
        height: 2px;
        position: absolute;
        z-index: 99;
    }

    &:before {
        top: -7px;
    }

    &:after {
        top: 7px;
    }

    ${props => props.switchMenu && css `
            transform: rotate(45deg);
            width: 20px;
            &:before {
                transform: rotate(-90deg);
                top: 0;
                width: 20px;
            }
            &:after {
                display: none;
            }
        `
    };
`

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 66%;
    z-index: 98;
    background-color: var(--clr-dark);
    transform: translateX(0%);
    transition: transform .3s;
    padding: 5em 2em;
    text-align: end;

    a {
        text-decoration: none;
        color: var(--clr-light);
        font-size: var(--fs-big);
        font-weight: var(--fw-bold);
    }

    li {
        list-style: none;
        padding-bottom: 2em;
    }

    ${ props => !props.switchMenu && css `
            transform: translateX(100%);
        `
    }
`