import { useState } from "react";
import Slider from "react-slick";

import styled from "styled-components";

interface Props{
  image1: string,
  image2: string,
  image3: string,
  review: boolean,
}
interface gal{
  isreview: boolean,
}
const StyledGallery = styled.div<gal>`
  width: 90%;
  max-width: 768px;
  padding: 2rem;
  text-align: center;
  @media screen and (max-width: 960px) {
    padding: 1rem;
    .slick-slider{
      width: 475px;
    }
    .gallery {
      .slick-list {
        height: 200px;
        box-shadow: 0px 3px 10px 0px #585253;
        border-radius: 0.5rem;
          .slick-track{
            height: 200px;
            .slick-slide{
              height: 300px;
            }
          }
      }
  }
  }
  @media screen and (max-width: 820px) {
    padding: 1rem;
    .slick-slider{
      width: 300px;
    }
    .gallery {
      .slick-list {
        height: ${({ isreview }) => (isreview ? "120px" : "200px")}; 
        box-shadow: 0px 3px 10px 0px #585253;
        border-radius: 0.5rem;
          .slick-track{
            height: ${({ isreview }) => (isreview ? "120px" : "200px")}; 
            .slick-slide{
              height: ${({ isreview }) => (isreview ? "120px" : "200px")}; 
            }
          }
      }
  }
  }
  .gallery {
    .slick-list {
      box-shadow: 0px 3px 10px 0px #585253;
      border-radius: 0.5rem;
        .slick-track{
            height: 400px;
        }
      img {
        display: block;
        filter: contrast(1.2);
        cursor: grab;
      }
    }
    
    ul.slick-dots {
      bottom: 0;
      position: relative;
      margin-top: 0.8rem;
  
      & > li {
        background: #c4bdbd;
        border-radius: 50%;
        width: 15px;
        height: 15px;
  
        &.slick-active {
          background-color: #b23e3e;
        }
  
        & > button {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          -webkit-appearance: none;
          -moz-appearance: none;
          background: transparent;
          border: none;
  
          &:before {
            content: none;
          }
        }
      }
    }
  }
`;
const Slide = (props : Props) => {
  
    const settings = {
        className: "gallery",
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 1000,
        adaptiveHeight: true,
        
    };    
    return (
        <StyledGallery isreview={props.review}>
            <Slider {...settings}>
                <img
                    src={props.image1}
                    alt="Forest"
                />
                <img
                    src={props.image2}
                    alt="Sky"
                />
                <img
                    src={props.image3}
                    alt="Trees"
                />
            </Slider>
        </StyledGallery>
    );
}

export default Slide;