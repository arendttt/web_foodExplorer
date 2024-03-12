import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 2fr auto 1fr;
    grid-template-areas: 
        'header'
        'main'
        'footer'
    ;

    height: 100vh; 

    .search {
        display: none;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        .search {
            display: block;
            width: 20rem;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
        .search {
            width: 30rem;
        }
    }
`;

export const Main = styled.div`
    grid-area: main;

    padding: 1rem 1.5rem;
    //margin-bottom: 2.5rem;

    .back {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        color: ${({ theme }) => theme.COLORS.GRAY_100};

        padding-bottom: 2rem;

        svg {
            font-size: 1.5rem;
        }
    }

    > h2 {
        font-size: 1.6rem;
        font-weight: 500;

        padding-bottom: 1.5rem;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.XL }) {
        max-width: 65rem;
        margin: 0 auto;

    }
`;

export const ImageUpload = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;

    .label {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .file-label {
        display: flex;
        align-items: center;

        padding: 0.8rem;
        width: 100%;
        height: 3rem;

        background: ${({ theme}) => theme.COLORS.BACKGROUND_500};
        color: ${({ theme }) => theme.COLORS.GRAY_200};

        border-radius: 0.5rem;

        cursor: pointer;

        margin-top: 0.8rem;
    }

    .upload-icon {
        margin-right: 8px;
        font-size: 1.4rem;
    }  
    
    .inputFile {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS. MD }) {
      width: 35%;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    .firstSection, .secondSection, .thirdSection {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        label p {
            color: ${({ theme }) => theme.COLORS.GRAY_100}; 
            margin-bottom: 0.8rem;
        }
    }

    .input {
        background: ${({ theme}) => theme.COLORS.BACKGROUND_500};
        border-radius: 8px;
        height: 3rem;
    }

    .firstSection {
        > select {
            background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
            width: 100%;

            padding: 0.6rem;
        }
    }

    .secondSection .itens {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        padding: 0.5rem;
        border-radius: 8px;
    }

    .button {
        background-color: ${({ theme }) => theme.COLORS.RED_100};
        font-weight: 400;
    }

    .deleteBtn {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        font-weight: 400;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        margin-bottom: 2rem;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.SM2 }) {
        .secondSection .itens {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.6rem;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        .firstSection, .secondSection {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .inputTitle {
                width: 16rem;
               
            }
        }

        .secondSection .itens {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }

        .button, .deleteBtn {
            width: 10rem;
        }

        .buttons {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            gap: 2rem;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
        
        .firstSection .inputTitle {
            width: 25rem; 
        }

        .secondSection .itens {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        }
    }
`;