import styled, { createGlobalStyle } from "styled-components";
export const Container = styled.div``;
export const AppRoot = createGlobalStyle`

    *{
        font-family: 'Poppins', sans-serif;
        user-select: none;
        scroll-behavior: smooth;
    }
    body{
        margin:0;
    }
`;
