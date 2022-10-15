import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        box-sizing: border-box;
    }

    :root{
        --primary-color: #27AE60;
        --primary-color-50: #93D7AF;
        --secondary-color: #EB5757;
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;
        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
    }

    body{
        line-height: 1;
        font-family: "Inter", sans-serif;
    }

    ul, li{
        list-style: none;
    }

    div, section, main, aside{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .App{
        width: 100%;
    }

    .wrapper {
        width: 100%;
        @media (min-width: 900px){
            max-width: 1200px;
            margin: 2rem auto;
            flex-direction: row;
            gap: 1rem;
        }
    }

    .container{
        width: 100%;
        max-width: 1200px;
        padding: 0 1rem;
        margin: 0 auto;
    }
`;
