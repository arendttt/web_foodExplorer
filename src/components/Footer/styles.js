import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    grid-area: footer;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;

    padding: 1.6rem;

    > div h1 {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    > div svg {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    > p {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        display: flex;
        align-items: center;
        gap: 0.2rem;

        svg {
            font-size: 1rem;
        }
    }


    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        flex-direction: row;
        justify-content: space-between;

        padding: 2rem;
    }

 
`;