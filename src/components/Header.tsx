import styled from "styled-components";
import phone from "../static/icon/phone.png"
import phone2 from "../static/icon/phone2.png"

import { useState } from "react";
interface StyledMobileNavProps {
    isOpen: boolean;
}

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #3E393B;
    z-index: 1001;
    @media screen and (max-width: 960px){
        font-family: Arial;
        font-weight: 300;
        font-size: 12px;
        }
    
`;
const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0px auto;
    padding: 0px 15px;
    @media screen and (max-width: 820px){
        flex-direction: row-reverse;
        padding: 15px 15px;
    }
`;
const StyledNav = styled.div`
    a{
        color:white;
        text-decoration: none;
        &:hover{
        color:  rgb(191, 152, 221);
    }
    &:active{
        color:  rgb(117, 93, 136);
    }
    }
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 45px;
        padding: 30px 0px;
        color: white;
    @media screen and (max-width: 820px) {
        display: none;
        
    }
`;
const StyledIcon = styled.img`
    width: 25px;
    @media screen and (max-width: 960px){
        width: 20px;
    }
`;
const StyledFeedback = styled.div`
    display: flex;
    gap: 40px;
    @media screen and (max-width: 820px){
        img{
            width: 20px;
        }
        gap: 20px;
    }
`;
const StyledPhone = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const StyledPhone2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
   
`;
const StyledWrapper = styled.div`
   display: flex;
   align-items: flex-start;
   gap: 20px;
   span{
    font-family: Arial;
    font-weight: 300;
    font-size: 18px;
   }
    font-family: Arial;
    font-weight: 300;
    font-size: 14px;
    @media screen and (max-width: 960px){
    span{
        font-family: Arial;
        font-weight: 300;
        font-size: 14px;
        }
        font-family: Arial;
        font-weight: 300;
        font-size: 10px;
    }
    @media screen and (max-width: 820px){
    span{
        font-family: Arial;
        font-weight: 300;
        font-size: 12px;
        }
        font-family: Arial;
        font-weight: 300;
        font-size: 10px;
    }
`;
const StyledMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 999;
  @media screen and (min-width: 821px) {
    display: none; /* Скрыть кнопку для больших экранов */
  }
  
`;
const StyledCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 999;
  position: absolute;
  top: 15px;
  right: 15px;
`;
const StyledMobileNav = styled.nav<StyledMobileNavProps>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; /* Скрывать меню за пределами экрана */
  width: 100%;
  height: 100%;
  background-color: #3E393B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  font-size: 16px;
  a {
    color: white;
    text-decoration: none;
    margin-bottom: 20px;
    
  }
`;
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledNav>
                    <a href="#company">О КОМПАНИИ</a>
                    <a href="#ceilings">ПОТОЛКИ</a>
                    <a href="#Reviews">ОТЗЫВЫ</a>
                    <a href="#Why">ВОПРОСЫ</a>
                </StyledNav>
                <StyledMenuButton onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
                    </svg>
                </StyledMenuButton>
                <StyledMobileNav isOpen={isMenuOpen}>
                    <StyledCloseButton onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                        </svg>
                    </StyledCloseButton>
                    <a href="#company" onClick={toggleMenu}>О КОМПАНИИ</a>
                    <a href="#ceilings" onClick={toggleMenu}>ПОТОЛКИ</a>
                    <a href="#Reviews" onClick={toggleMenu}>ОТЗЫВЫ</a>
                    <a href="#Why" onClick={toggleMenu}>ВОПРОСЫ</a>
                </StyledMobileNav>
                <StyledFeedback>
                    <StyledWrapper>
                        <StyledIcon src={phone}/>
                        <StyledPhone>
                            <span>+7 (905) 600-32-98</span>
                            Круглосуточно
                        </StyledPhone>
                    </StyledWrapper>
                    <StyledWrapper>
                    <StyledIcon src={phone2}/>
                        <StyledPhone2>
                            <span>+7 (952) 061-41-54</span>
                            По России бесплатно
                        </StyledPhone2>
                    </StyledWrapper>
                </StyledFeedback>
            </StyledContainer>

        </StyledHeader>
    );
}

export default Header;