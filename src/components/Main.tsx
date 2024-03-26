import styled from "styled-components";
import Background from "../static/img/background.jpg"

const StyledMain = styled.div`
    padding-top: 26px;
    color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)), url(${Background});
    @media screen and (max-width: 820px){
        h1{
            font-size: 38px;
        }
        h2{
            font-size: 20px;
        }
        button{
            padding: 15px 25px;
        }
    }
`;
const StyledTitle = styled.h1`
    padding-top: 111px;
    font-size: 64px;
    font-family: Open Sans, Arial !important;
    font-weight: 800 !important;
    font-style: normal !important;
`;
const StyledText = styled.h2`
    font-family: OpenSans, Arial ;
    font-weight: 300;
    font-style: normal;
    font-size: 36px;
    margin-top: 3%;
`;
const StyledBtn = styled.button`
    font-family: Roboto, Arial;
    font-weight: 300;
    font-style: normal;
    font-size: 18px;
    color: white;
    border-radius: 30px;
    background-color: #B23E3E;
    border: 1px solid #B23E3E;
    padding: 20px 40px;
    margin-top: 3%;
`;
const StyledTransDown = styled.div`
    margin-top: 200px;
    position: relative;
    height: 50px;
    @media screen and (max-width: 820px){
        height: 30px;
    }
`;
const StyledTriangleDown = styled.div`
    svg{
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;
const StyledContainer = styled.div`
  max-width: 1100px;
  margin: 0px auto;
  padding: 0px 15px;
`;
const Main = () => {
    return (
        <StyledMain>
            <StyledContainer>
                <StyledTitle>
                    НАТЯЖНЫЕ ПОТОЛКИ
                </StyledTitle>
                <StyledText>
                    ПРИ ЗАКАЗЕ ОТ 15000 т.р. скидка 5%
                </StyledText>
                <StyledBtn>
                    Заказать звонок
                </StyledBtn>
            </StyledContainer>
            <StyledTransDown>
                <StyledTriangleDown>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"> <path d="M 0 100 H 100 V 0 H 55.50 L 50 100 L 44.50 0 H 0 Z"></path> </svg>
                </StyledTriangleDown>
            </StyledTransDown>
        </StyledMain>
    );
}

export default Main;