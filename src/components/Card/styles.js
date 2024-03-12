import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    max-height: 23rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    padding: 1.5rem;
    min-width: 13rem;

    border-radius: 8px;

    position: relative;
    cursor: pointer;

    > p {
        display: none;
    }

    > img {
        width: 5.5rem;
        height: 5.5rem;

        border-radius: 50%;
    }

    > h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;

        font-size: 0.9rem;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: "Poppins", sans-serif;

        svg {
            font-size: 1.2rem;
        }
    }

    > span {
        font-size: 1rem;

        color: ${({ theme }) => theme.COLORS.BLUE_100};
        font-family: "Roboto", sans-serif;
    }

    > div button {
        width: 10rem;
        height: 2.2rem;

        margin-top: 1rem;
    }

    > .PiHeart {
        font-size: 1.8rem;

        position: absolute;
        left: 10rem;
        top: 1rem;

    }

    > .MdEdit {
        font-size: 1.4rem;

        position: absolute;
        left: 10rem;
        top: 1rem;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        > p {
            display: flex;
            align-items: center;

            font-size: 0.6rem;
            text-align: center;

            height: 2rem;
        }

        > span {
            font-size: 1.4rem;
        }
    }
`;

export const Counter = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;

    > svg {
        font-size: 1.4rem;
    }
`;