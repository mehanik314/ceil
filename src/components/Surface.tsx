import styled from "styled-components";
import surface_img from '../static/img/surface_img.jpg';
import Card from "./Card";
import surface_1 from "../static/img/surface_1.jpg";
import surface_2 from "../static/img/surface_2.jpg";
import surface_3 from "../static/img/surface_3.jpg";


const StyledSurface = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    height: 100%;
    background-image: url(${surface_img});
    background-size: cover;
    @media screen and (max-width: 820px) {
        h1{
            font-size: 36px;
        }
        h2{
            font-size: 26px;
        }
    }
`;

const StyledContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
`;

const StyledTitle = styled.h1`
    font-size: 52px;
    line-height: 1.4;
    font-family: Arial;
    font-weight: 800;
    font-style: normal;
`;

const StyledText = styled.h2`
    line-height: 1.4;
    font-size: 36px;
    font-family: Arial;
    font-weight: 300;
    font-style: normal;
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Автоматически подстраиваем количество колонок в зависимости от размеров */
    grid-gap: 20px; /* Добавляем зазор между элементами */
    @media screen and (max-width: 820px){
        grid-gap: 60px;
    }
`;

const Surface = () => {
    return (
        <StyledSurface id="ceilings">
            <StyledContainer>
                <StyledTitle>ПОДБЕРИТЕ ПОВЕРХНОСТЬ</StyledTitle>
                <StyledText>ДЛЯ ВАШЕГО ПОТОЛКА</StyledText>
                <StyledGrid>
                    <Card img={surface_1} price={500} title="МАТОВЫЕ" text="Матовые натяжные потолки - это классический вариант, который напоминает идеально отштукатуренный или покрашенный потолок. Данный вид потолка является универсальным в плане дизайна, его можно использовать в любом помещении, он хорошо впишется в любой интерьер." />
                    <Card img={surface_2} price={500} title="ГЛЯНЦЕВЫЕ" text="Глянцевые полотна – идеальный вариант для комнат маленькой площади или помещений с низкими потолками. В отражениях в потолке не видны мелкие предметы, зато солнечный свет из окна заполняет весь потолок. Комната становится нарядной и яркой." />
                    <Card img={surface_3} price={550} title="САТИНОВЫЕ" text="Сатиновые натяжные потолки – тонкое, практичное и недорогое потолочное покрытие с уникальным микрорельефом, имитирующим фактуру натуральной ткани. Благодаря мягкому светоотражению, очаровательному жемчужному блеску и шелковистой текстуре оно выглядит чрезвычайно стильно и дорого." />
                </StyledGrid>
            </StyledContainer>
        </StyledSurface>
    );
}

export default Surface;