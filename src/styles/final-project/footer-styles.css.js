import styled from 'styled-components'

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    background: var(--clr-grey);
    width: 100%;
    text-align: center;
    padding: 0 2em;
    align-items: center;

    .social-list {
        list-style: none;
        display: flex;
        justify-content: center;
        margin: 2em 0 1em;
        padding: 0;
    }

    .social-list-item {
        margin: 0 .5em;
    }

    .social-list-link {
        padding: .2em;
        color: var(--clr-dark);
        font-size: 1.5em;
    }
    
    img {
        opacity: .5;
        margin-bottom: .5em;
        object-fit: cover;
        margin-left: auto;
        margin-right: auto;
    }

    p {
        color: var(--clr-dark);
        opacity: .8;
        font-size: var(--fs-extra-small);
    }

    .copyright { 
        margin: 2em;
        font-size: var(--fs-extra-small);
    }

    @media (min-width: 650px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: start;

        .social-list {
            margin: 2em;
            order: 2;
        }
        
        .copyright{
            margin: 0;
        }

        .footer-desc {
            order: 1;
            text-align: left;
            margin: 2em 0;
            width: 50%;
        }
    }
`