import Slider from "react-slick";
import styled from "styled-components";
import Slide from "./Slide";
import slide1 from '../static/img/Review.png'
import slide2 from '../static/img/Review2.png'
import slide3 from '../static/img/Review3.png'


const StyledReviews = styled.div`
    background-color: white;
    color: black;
    display: flex;
    flex-direction: row;
`
const StyledContainer = styled.div`
    max-width: 1100px;
    margin: 0px auto;
    padding: 0px 15px;
`
const StyledTitle = styled.h1`
    
`
const StyledSlider = styled.div`
    
`



const Reviews = () => {
    return ( 
        <StyledReviews id="Reviews">
            <StyledContainer>
                <StyledTitle>
                    <span>
                        ОТЗЫВЫ<br/>
                    </span>
                    НАШИХ КЛИЕНТОВ
                </StyledTitle>
                <StyledSlider>
                    <Slide image1={slide1} image2={slide2} image3={slide3}/>
                </StyledSlider>
            </StyledContainer>
        </StyledReviews>
     );
}
 
export default Reviews;