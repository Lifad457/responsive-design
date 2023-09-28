import styled from 'styled-components'
import bbqBg from '../../assets/images/bbq/dark-ribs.jpg'

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    
    .strip {
        background: rgb(240,164,94);
        background: linear-gradient(90deg, rgba(240,150,40,1) 42%, rgba(241,129,25,1) 83%);
        padding: 5px;
        width: 200px;
        position: absolute;
        top: 0;
        left: 0; 
        right: 0; 
        margin: 0 auto;
    }

    @media screen and (min-width: 750px) {
        flex-direction: row;

        .strip {
            right: calc(40vw + 2.3em);
        }
    }
`

export const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url(${bbqBg}) no-repeat;
    background-size: cover;
    min-height: 40vh;
    letter-spacing: 1.4px;
    line-height: 1.4;
    
    .left-col-desc {
        margin-top: 1.1em;
        color: var(--clr-primary);
        text-transform: uppercase;
        font-size: var(--fs-small);
        font-weight: var(--fw-bold);
        padding: .6em;
    }

    .left-col-title {
        color: var(--clr-light);
        font-weight: var(--fw-reg);
    }

    .left-col-subtitle {
        color: var(--clr-primary);
        text-transform: uppercase;
        font-size: var(--fs-l-body);
        font-weight: var(--fw-bold);
        margin-bottom: 1.6em;
    }

    strong {
        font-weight: var(--fw-black);
    }

    @media screen and (min-width: 750px) {
        width: 60%;
        height: 100vh;
    }
`

export const RightCol = styled.div`
    margin: 2em;
    height: 60vh;

    .right-col-title {
        color: var(--clr-secondary);
        font-weight: var(--fw-black);
        font-size: var(--fs-s-h2);
    }

    .right-col-subtitle {
        color: var(--clr-primary);
        text-transform: uppercase;
        font-size: var(--fs-s-body);
        font-weight: var(--fw-black);
        margin-top: -1em;
        margin-bottom: 2em;
    }

    .right-col-desc {
        line-height: 1.2;
        color: var(--clr-secondary);
        font-size: var(--fs-s-body);
        opacity: 0.8;
        margin-bottom: 2.5em;
    }

    .form {
        display: flex;
        flex-direction: column;
        margin: 0 3em;
    }

    input {
        width: 100%;
        background: transparent;
        border: 1px solid #A9A9A9;
        font-size: 1rem;
        padding: .65rem;
        outline: none;
        margin-bottom: 1.2em;
        border-radius: .7em;
    }

    input::placeholder {
        text-align: center;
        opacity: 0.8;
    }

    button {
        width: 100%;
        background: rgb(240,164,94);
        background: linear-gradient(90deg, rgba(240,150,40,1) 42%, rgba(241,129,25,1) 83%);
        color: var(--clr-light);
        padding: .65em;
        border: none;
        text-transform: uppercase;
        font-weight: var(--fw-bold);
        font-size: var(--fs-s-body);
        cursor: pointer;
        border-radius: .7em;
        margin-bottom: .5em;
    }

    .disclaimer {
        color: var(--clr-secondary);
        font-size: var(--fs-small);
        opacity: 0.8;
    }

    @media screen and (min-width: 750px) {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
    }
`