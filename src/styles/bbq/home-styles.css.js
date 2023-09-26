import styled from 'styled-components'
import bbqBg from '../../assets/images/bbq/dark-ribs.jpg'

export const Container = styled.div`
    .strip {
        background: rgb(240,164,94);
        background: linear-gradient(90deg, rgba(240,164,94,1) 42%, rgba(241,129,25,1) 83%);
        padding: 5px;
        width: 200px;
        position: absolute;
        top: 0;
        left: 0; 
        right: 0; 
        margin: 0 auto;
    }
`

export const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url(${bbqBg}) no-repeat;
    text-align: center;
    background-size: cover;
    height: 40vh;
    
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
`

export const RightCol = styled.div`

`