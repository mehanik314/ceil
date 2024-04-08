import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Surface from './components/Surface';
import Calculation from './components/Сalculation';
import Why from './components/Why';
import Reviews from './components/Reviews';
import Application from './components/Application';
import {Helmet} from "react-helmet";

const StyledApp = styled.div`
`;
function App() {
  return (
    <StyledApp>
      <Helmet>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes='16x16' href="/favicon16x16.png" />
      <link rel="icon" type="image/png" sizes='32x32'href="/favicon32x32.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <title>Натяжные потолки в Твери и Тверской области</title>
      <meta name="description" content="Мы занимаемся натяжными потолками по городу Твери и Тверской области. Работаем в этой сфере с 2018 года, достигаем своих результатов и успехов! Нам важно, что бы клиент был доволен тем, что мы предоставляем." />
      <meta name="keywords" content="натяжные потолки, Тверь, Тверская область, компания, услуги, Sky-Top69, Sky top"/>
      <meta property="og:title" content="натяжные потолки в Твери и Тверской области: низкие цены" />
      <meta property="og:description" content="Узнайте о нашей компании, занимающейся установкой натяжных потолков в Твери и Тверской области. Доверьтесь профессионалам!" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sky-Top69 натяжные потолки"/>
      <meta property="og:url" content="https://sky-top69.ru/" />
      </Helmet>
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
