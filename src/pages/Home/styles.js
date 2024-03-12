import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
    display: grid;
    grid-template-rows: 2fr auto 1fr;
    grid-template-areas: 
        'header'
        'main'
        'footer'
    ;

    height: 100vh;

    .search {
        display: none;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        .search {
            display: block;
            width: 20rem;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
        .search {
            width: 30rem;
        }
    }

`;

export const Main = styled.div`
    grid-area: main;
    overflow: auto;

    > .brand {
        background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

        margin: 2rem auto;
        border-radius: 2px;

        width: 18rem;
        height: 8rem;

        position: relative;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        text-align: justify;

        padding: 1rem;

        img {
            position: absolute;
            top: 0.2rem;
            left: -1.8rem;
            z-index: 1;

            width: 10rem;
        }

        h2 {
            font-size: 1rem;
            width: 11rem;

            z-index: 1;
        }

        p {
            font-size: 0.6rem;
            font-weight: 400;
            width: 11rem;
            
            z-index: 1;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.SMD }) {
        > .brand {
            width: 24rem;
            padding-right: 1.6rem;

            img {
                width: 12rem;
                top: -1.5rem;
            }

            h2 {
                font-size: 1.2rem;
                width: 14rem;
            }

            p {
                font-size: 0.8rem;
                width: 14rem;
            }
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        > .brand {
            text-align: center;
            width: 43rem;
            height: 12rem;
            padding-right: 2.2rem;

            img {
                width: 19rem;
                top: -2.8rem;
            }

            h2 {
                font-size: 1.8rem;
                font-weight: 500;
                width: 25rem;
            }

            p {
                font-size: 0.8rem;
                width: 25rem;
            }
        }  
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
        > .brand {
            width: 58rem;
            height: 14rem;
            padding-right: 7rem;

            margin-top: 4rem;

            img {
                width: 22rem;
                top: -3rem;
            }

            h2 {
                font-size: 2rem;
                width: 30rem;
            }

            p {
                font-size: 1rem;
                width: 30rem;
            }
        }  
    }
`;

export const Carousel = styled.div`
    margin-top: 2.5rem;
    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .empty {
        background: ${({ theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme}) => theme.COLORS.GRAY_300};

        height: 22rem;
        width: 100%;

        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
      margin-top: 3rem;
    }
`;

