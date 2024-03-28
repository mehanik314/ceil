import styled from "styled-components";

interface Props {
    title: string;
    text: string;
    price: number;
    img: string;
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    color: black;
    border-radius: 5px;
    padding: 20px;
    max-width: 100%;
    height: 100%;
`;

const StyledDesc = styled.div`
    max-width: 315px;
    height: 400px;
    text-align: left;
`;

const StyledTitle = styled.div`
    font-family: Roboto, Arial;
    font-weight: 500;
    font-size: 28px;
    line-height: 140%;
    margin-bottom: 10px;
`;

const StyledText = styled.div`
    font-family: Roboto, Arial;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    span {
        font-weight: bold;
    }
`;

const StyledAdvantages = styled.div`
    margin-top: 10px;
`;

const StyledPrice = styled.div`
    font-family: Roboto, Arial;
    font-weight: 500;
    font-size: 28px;
    line-height: 140%;
    text-align: center; /* Выравнивание текста по центру */
    margin: auto;
`;

const StyledBtnWrapper = styled.div`
    text-align: center;
    padding: 30px 0px;
`;

const StyledBtn = styled.a`
    font-family: Roboto, Arial;
    font-weight: 300;
    font-size: 18px;
    background: #a180ba;
    border-radius: 30px;
    border: 1px solid #a180ba;
    color: #FFFFFF;
    padding: 15px 30px;
    text-decoration: none;
    &:hover{
        background-color:  rgb(191, 152, 221);
    }
    &:active{
        background-color:  rgb(117, 93, 136);
    }
`;

const StyledImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const Card = (props: Props) => {
    return (
            <StyledCard>
            <StyledImg src={props.img} alt="surface image" />
            <StyledDesc>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledText>
                    <span>Характеристики:</span>
                    <p>{props.text}</p>
                    <StyledAdvantages>
                        - обладают тепло- и звукоизоляционными свойствами<br />
                        - не пропускают влагу и не вызывают аллергию.
                    </StyledAdvantages>
                </StyledText>
            </StyledDesc>
            <StyledPrice>{props.price} руб/м²</StyledPrice>
            <StyledBtnWrapper>
                <StyledBtn href="#application">Заказать замер</StyledBtn>
            </StyledBtnWrapper>
        </StyledCard>
    );
};
export default Card;