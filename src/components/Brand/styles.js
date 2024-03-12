import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    

    > h1 {
        display: flex;
        gap: 0.6rem;
        align-items: center;

        font-size: 2rem;
        font-weight: 700;

        > svg {
            font-size: 2.2rem;
            color: ${({ theme }) => theme.COLORS.BLUE_200};
        }
    }

    > p {
        font-size: 0.6rem;
        color: ${({ theme}) => theme.COLORS.BLUE_100};
        text-align: end;

        font-family: "Roboto", sans-serif;
    }

   

`;