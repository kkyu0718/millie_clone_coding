import React from 'react'
import Slider from 'react-slick'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContent from '../../../asset/SliderContent';
import styled from 'styled-components';

function SliderBanner() {
  const settings = {
    arrows : true, 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 4000, 
    centerMode : true,
    centerPadding : '0px'
  };

  const Container = styled.div`
    width : 100%;
    height : 250px;
    display : flex;
    justify-content : center;
  `

  const StyledSlider = styled(Slider)`
    .slick-track {
      width : 1000px;
      height : 100%;
    }

    
    .slick-list {
      width : 100%;
      height : 100%;
      margin : 0;
      padding : 10px;
    }

    .slick-slide dots {
      bottom : -50px;
      margin-top : 200px;
    }

    .slick-prev:before{
      position : relative;
      left : -30px;
      font-family : KoPubDotumBold;
      content : '<';
      font-weight : 600
    }

    .slick-next:before{
      position : relative;
      right : -30px;
      font-family : KoPubDotumBold;
      content : '>'
    }

    .slick-arrow{
      border : solid 10px;
    }

    .slick-prev:before, .slick-next:before{
      color : black;
      opacity : 0.5;
    }
  `

  const StyledDiv1 = styled.div`
    line-height : 1.3;
    font-family : KoPubDotumMedium;
    font-size : 20px;
  `

  const StyledDiv2 = styled.div`
    line-height : 2.0;
    font-size : 10px;
    font-family : KoPubDotumMedium;
  `
  
  return (
    <Container>    
      <StyledSlider {...settings} style = {{  width : '600px'}}>
        {SliderContent.map((slide, index) => {
          return ( <>
                    <div style={{paddingTop : '30px'}}>
                    <StyledDiv1>{slide.FirstTitle}</StyledDiv1>
                    <StyledDiv1>{slide.SecondTitle}</StyledDiv1>
                    <StyledDiv2>{slide.text}</StyledDiv2>
                    </div>
                </> )
        })}
      </StyledSlider>
    </Container>
      
  )
}

export default SliderBanner
