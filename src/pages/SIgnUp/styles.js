import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from"../../styles/deviceBreakPoints";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    padding: 6rem 2rem;

    @media (min-width: ${ DEVICE_BREAKPOINTS.SM }) {
        padding: 3rem 2rem;

        margin-bottom: 3rem;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8rem;

        margin-bottom: 0;
    }
`;

export const Fieldset = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    > label p {
        margin-bottom: 0.5rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 0.8rem;
        margin: 0 auto;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        width: 20rem;
    }

`;

export const Form = styled.form`
    
    > h1 {
        display: none;

        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.8rem;

        text-align: center;

        margin-bottom: 0.5rem;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
        max-width: 70rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        padding: 1rem 4rem;

        border-radius: 1rem;
        
        > h1 {
            display: block;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.XL }) {
        padding: 3rem 4rem;
    }
`;