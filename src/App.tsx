import React from 'react';
import styled from 'styled-components';
import BackgroundImg from './static/img/background.jpg';
import Header from './components/Header';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Surface from './components/Surface';
import Calculation from './components/Сalculation';
import Why from './components/Why';
import Reviews from './components/Reviews';
import Application from './components/Application';


const StyledApp = styled.div`
`;
function App() {
  return (
    <StyledApp>
      <Header />
      <Main />
      <AboutUs />
      <Surface />
      <Calculation />
      <Why />
      <Reviews />
      <Application />
    </StyledApp>

  );
}

export default App;
