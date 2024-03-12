import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    width: 100%;

    > select {
        width: 100%;
        height: 3rem;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        font-family: "Roboto", sans-serif;

        border: none;
        border-radius: 8px;

        padding: 0.8rem;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS. MD }) {
      width: 10rem;
    }
`;