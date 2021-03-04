
import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle `
body {
    background: ${({ theme }) => theme.body } ;
    color: ${({theme}) => theme.text};
    transitoion: all 0.50s linear;
}`