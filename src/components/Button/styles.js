import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.RED_200};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 8px;

    font-weight: 500;
    font-family: "Poppins", sans-serif;

    padding: 0.7rem auto;

    &:disabled {
        opacity: 0.5;
     }

`;