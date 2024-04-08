
import styled from "styled-components";
import Slide from "./Slide";
import slide1 from '../static/img/slide1.jpg'
import slide2 from '../static/img/slide2.jpg'
import slide3 from '../static/img/slide3.jpg'
const StyledAboutUs = styled.section`
    background-color: white;
    padding-top: 105px;
    padding-bottom: 94px;
    @media screen and (max-width: 820px) {
        h1{
            font-size: 46px;
        }
        p{
            font-size: 16px;
        }
    }
`;

const StyledAboutUsMain = styled.div`
    color: black;
    display: flex;
    flex-direction: row;
    gap: 20px;
    @media screen and (max-width: 820px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
`;
const StyledAboutUsBlock = styled.div`

`;
const StyledAboutUsTitle = styled.h1`
font-size: 52px;
`;
const StyledAboutUsText = styled.p`
    font-size: 18px;
    font-family: Arial;
    font-weight: 300;
    font-style: normal;
    line-height: 1.4;
`;
const StyledSliderContainer = styled.div`

`;
const StyledContainer = styled.div`
  max-width: 1100px;
  margin: 0px auto;
  padding: 0px 15px;
`;
const AboutUs = () => {
    return (
            <StyledAboutUs id="company">
            <StyledContainer>
                <StyledAboutUsMain>
                    <StyledSliderContainer>
                        <Slide review={false} image1={slide1} image2={slide2} image3={slide3} />
                    </StyledSliderContainer>
                    <StyledAboutUsBlock>
                        <StyledAboutUsTitle>
                            О НАС
                        </StyledAboutUsTitle>
                        <StyledAboutUsText>
                        Мы занимаемся натяжными потолками по городу Твери и Тверской области. Работаем в этой сфере с 2018 года, достигаем своих результатов и успехов! Нам важно, что бы клиент был доволен тем, что мы предоставляем.
                        </StyledAboutUsText>
                    </StyledAboutUsBlock>
                </StyledAboutUsMain>
            </StyledContainer>
        </StyledAboutUs>   
    );
}

export default AboutUs;