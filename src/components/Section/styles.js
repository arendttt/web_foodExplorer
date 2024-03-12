import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.section`
    width: 100%;

    > h2 {
        font-size: 1.2rem;
        font-weight: 500;

        padding: 1rem;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.XL }) {
        max-width: 64rem;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
`;

export const Scroll = styled.div`

    position: relative;

    > div {
        max-width: 280px;
        overflow-x: auto;
        display: flex;
        gap: 1rem;

       padding-left: 1rem;
       padding-right: 1rem;
    }

    > div::-webkit-scrollbar {
            display: none;
        }

    > button {
        display: none;
    }
   

    @media (min-width: ${ DEVICE_BREAKPOINTS.SM }) {
        > div {
            max-width: 320px;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.SM2 }) {
        > div {
            max-width: 375px;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.SMD }) {
        > div {
            max-width: 425px;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        > div {
            max-width: 43rem;
            gap: 1.4rem;
        }

        > button {
            display: block;
            z-index: 99;

            background: transparent;
            border: none;

            svg {
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-size: 2rem;
            }

        }

        .btn-right {
            position: absolute;
            top: 10rem;
            right: 1rem;

            z-index: 1;
        }

        .btn-left {
            position: absolute;
            top: 10rem;
           
            z-index: 1;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
     
        > div {
            max-width: 58rem;
            gap: 1.4rem;
        }
    }
`;