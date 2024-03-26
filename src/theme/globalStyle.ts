import { createGlobalStyle } from "styled-components";
import OpenSans from "../fonts/OpenSans/OpenSans-Light.ttf";
import Roboto from "../fonts/Roboto/Roboto-Regular.ttf";
import Background from '../static/img/background.jpg'
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'), url(${OpenSans}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${OpenSans}) format('truetype');
  }


  body {
    color: white;
    font-family: OpenSans;
    
  }
  html{
    scroll-behavior: smooth;
  }
`;

export default GlobalStyles;
