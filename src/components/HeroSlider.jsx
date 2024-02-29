import React from 'react'
import Slider from "react-slick";
import styled from '@emotion/styled'
import { useState, useRef } from 'react'

export default function HeroSlider(props) {
  const sliderRef = useRef(null)
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    cssEase: "ease-out",
    pauseOnHover: false,
    rows: 1,
    draggable: false
  };

  return (
    <>
      <SliderContainer>
        <Slider ref={sliderRef} {...settings}>
          {props.imageUrlList.map((imageUrl, index) => {
            return (
              <SliderItem viewportWidth={vw} key={index}>
                <img 
                  src={process.env.PUBLIC_URL.concat(imageUrl)} 
                  />
              </SliderItem> 
            )
          })}
        </Slider>
      </SliderContainer>
    </>
    )
}

const SliderContainer = styled.div`
  width: 100vw;
  min-height: 400px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-self: center;
  z-index: 0;
  overflow: hidden;
`

const SliderItem = styled.div`
  height: 100%;
  width: 100vw;
  display: flex!important;
  overflow: hidden;
  img {
    width: 100%;
  }
`
