import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 8px;

  > input {
    height: 2.6rem;
    width: 100%;

    padding: 1rem 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

  }

  > svg {
      margin-left: 16px;
      font-size: 1.4rem;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

`;