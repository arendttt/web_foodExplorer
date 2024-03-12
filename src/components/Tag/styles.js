import styled from "styled-components";

export const Container = styled.div`
    font-size: 0.8rem;
    padding: 5px 14px;
    border-radius: 5px; 

    text-align: center;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

`;