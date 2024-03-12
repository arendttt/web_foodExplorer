import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    grid-area: header;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 2rem 1.7rem 1rem;

        > svg {
            font-size: 1.8rem;
        }

        .PiReceipt {
            position: relative;
        }

        .order {
            background: ${({ theme }) => theme.COLORS.RED_200};
            border-radius: 50%;
            width: 1.2rem;

            text-align: center;
            font-size: 0.8rem;

            position: absolute;
            left: 17.6rem;
            top: 2rem;
        }

        div h1 {
            font-size: 1.2rem;
        }

        div svg {
            font-size: 1.6rem;
        }

        button, .input, .FiLogOut {
            display: none;
        }
    }

   
    @media (min-width: ${ DEVICE_BREAKPOINTS.SM }) {
        .order {
            top: 1.8rem;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.SM2 }) {
        .content .order {
            left: 21rem;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.SMD }) {
        .content .order {
            left: 24rem;
        }
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.MD }) {

        .content {
            .order, .FiMenu, .PiReceipt {
                display: none;
            }

            > button, .FiLogOut {
                display: block;
            }

            .FiLogOut {
                font-size: 1.4rem;
                cursor: pointer;
            }

            button {
                width: 8.5rem;
                height: 2.8rem;

                background: ${({ theme }) => theme.COLORS.RED_200};
                color: ${({ theme }) => theme.COLORS.WHITE};

                border: none;
                border-radius: 5px;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;

                font-size: 0.8rem;

                svg {
                    font-size: 1.2rem;
                }

            }

        }
       
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.LG }) {
        width: 100vw;
        margin: 0 auto;

        .content {
            padding: 2rem 2rem 1rem 2rem;

            > button {
                width: 12rem;
            }
        }
       
    }

    @media (min-width: ${ DEVICE_BREAKPOINTS.XL }) {
       
       .content {
            padding: 2rem 14rem 1rem 14rem;
            max-width: 88rem;

            margin: 0 auto;
       }
       

        

    }

 
`;

export const Brand = styled.div`

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
