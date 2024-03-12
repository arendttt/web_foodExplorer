import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 0.5rem;

    padding: 0.4rem 0.6rem;

    > input {
        background: transparent;
        border: none;

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 0.8rem;
        text-align: center;
        
        width: 100%;
    }

    > svg {
        font-size: 1rem;
    }

    > button {
        background: transparent;
        border: none;

        display: flex;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.WHITE};;
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.GRAY_300};;
    }
`;
