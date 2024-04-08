import styled from "styled-components";
import Background from '../static/img/why_img.jpg'
import CheckBox from '../static/img/CheckBox.jpg'

const StyledWhy = styled.section`
    background-image: linear-gradient(rgba(161, 128, 186, 0.5), rgba(161, 128, 186, 0.5)), url(${Background});
    background-size: cover;
    background-attachment: fixed;
    padding-top: 1px;
    padding-bottom: 150px;
    z-index: 0;
    @media screen and (max-width: 820px) {
        h1{
            font-size: 26px;
        }
        span{
            font-size: 18px;
        }
        h2{
            font-size: 16px;
        }
    }
`;

const StyledMain = styled.div`
    
`
const StyledContainer = styled.div`
    max-width: 1100px;
    margin: 0px auto;
    padding: 0px 15px;
    
`
const StyledTitle = styled.h1`
    z-index: 2;
    padding-top: 100px;
    font-size: 52px;
    font-family: Arial;
    font-weight: 800;
    line-height: 140%;
    span{
        font-size: 36px;
        font-family: OpenSans;
        line-height: 140%;
        font-weight: 300;
    }
    z-index: 2;
    @media screen and (max-width: 820px) {
        span{
            font-size: 18px;
        }
    }
`
const StyledAdvantages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 100px;
    padding: 10px 20px;
    border: 1px solid white;
    border-radius: 30px;
    
`
const StyledWrapperAdvantages = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
`
const StyledCheckBox = styled.div`
    z-index: 2;
`
const StyledText = styled.h2`
    font-size: 22px;
    font-family: Arial ;
    font-weight: 300;
    z-index: 2;
`
const StyledImg = styled.img`
    width: 40px;
    @media screen and (max-width: 820px){
        width: 30px;
    }
    
`
const Why = () => {

    return ( 
        <StyledWhy id="Why">
            <StyledContainer>
                <StyledMain>
                    <StyledTitle>
                        ПОЧЕМУ НАТЯЖНЫЕ ПОТОЛКИ<br/>
                        <span>ЛУЧШИЙ ВАРИАНТ?</span>
                    </StyledTitle>
                    <StyledAdvantages>
                        <StyledWrapperAdvantages>
                            <StyledCheckBox>
                                <StyledImg src={CheckBox}/>
                            </StyledCheckBox>
                            <StyledText>
                                Надёжность и долговечность
                            </StyledText>
                        </StyledWrapperAdvantages>
                        <StyledWrapperAdvantages>
                            <StyledCheckBox>
                                <StyledImg src={CheckBox}/>
                            </StyledCheckBox>
                            <StyledText>
                                Гарантия на установку
                            </StyledText>
                        </StyledWrapperAdvantages>
                        <StyledWrapperAdvantages>
                            <StyledCheckBox>
                                <StyledImg src={CheckBox}/>
                            </StyledCheckBox>
                            <StyledText>
                                Простота установки
                            </StyledText>
                        </StyledWrapperAdvantages>
                    </StyledAdvantages>
                </StyledMain>
            </StyledContainer>
           
           
        </StyledWhy>
     );
}
 
export default Why;