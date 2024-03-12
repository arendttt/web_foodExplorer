import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 10rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 8px;
    border: none;
    resize: none;

    padding: 0.8rem;

    font-size: 1rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

`;