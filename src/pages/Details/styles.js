import styled from "styled-components";

import { DEVICE_BREAKPOINTS }  from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 2fr 12fr 1fr;
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

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    > span {
        font-size: 1.5rem;

        color: ${({ theme }) => theme.COLORS.GRAY_400};

        display: flex;
        align-items: center;

        padding: 2rem 0 1rem 1.2rem;

        cursor: pointer;

        svg {
            font-size: 2rem;
        }
    }

    > section  {
        padding: 0 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    
        img {
            width: 14rem;
            height: 14rem;

            border-radius: 50%;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.2rem;

        padding-bottom: 3rem;

        h2 {
            font-size: 1.5rem;
            font-weight: 400;
        }

        .description {
            font-size: 0.9rem;
            font-weight: 400;
        }

        .btnSection {
            display: flex;
            gap: 1.5rem;
        }

        .btnSection button {
            background: ${({ theme }) => theme.COLORS.RED_200};
            color: ${({ theme }) => theme.COLORS.WHITE};

            font-size: 0.8rem;

            border: none;
            border-radius: 5px;

            padding: 0.6rem;

            display: flex;
            align-items: center;
            gap: 0.4rem;

            svg {
                font-size: 1.2rem;
            }
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.SMD }) {
        .description {
            width: 20rem;   
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {

        > span {
            font-size: 1rem;
            padding: 1.8rem 2rem;

            svg {
                font-size: 1.2rem;
            }
        }

        > section {
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            padding: 0 2rem 1.8rem 2rem;
        }

        .content {
            width: 25rem;

            align-items: flex-start;

            padding: 1.3rem 0;

            .description {
                width: 100%;
                text-align: left;
            }
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
        max-width: 64rem;
        margin: 0 auto;

        > section {
            gap: 2rem;

            img {
                width: 16rem;
                height: 16rem;
            }
        }

        .content {
            width: 35rem;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.XL }) {
       padding: 3rem;
    }
`;

export const Tags = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 0.6rem;


   @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`;

export const Counter = styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;

    p {
        font-size: 1.2rem;
    }

    svg {
        font-size: 1.5rem;
    }
`;