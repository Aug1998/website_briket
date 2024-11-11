/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled'
import React from 'react'
import HeroSlider from '../../components/HeroSlider'
import AboutUs from './Sections/AboutUs.jsx'
import Postventa from './Sections/Postventa.jsx'
import Productos from './Sections/Productos.jsx'

export default function Home() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  const heroImagesUrls = ['/img/hero/hero1.png', '/img/hero/hero2.png', '/img/hero/hero3.png'];
  const heroMobileImagesUrls = ['/img/hero/mobile-hero1.png', '/img/hero/mobile-hero2.png', '/img/hero/mobile-hero3.png'];

  return (
    <PageContainer>
      <HeroSlider imageUrlList={vw > 1024 ? heroImagesUrls : heroMobileImagesUrls} />
      <AboutUs />

      <Title id="productos">Productos</Title>
      <ProductsCTAContainer>
        <ProductsBanner>
          <h3>Conocé todos nuestros productos</h3>
        </ProductsBanner>
        <ProductsCTA href='https://briket.mitiendanube.com/productos/' target='_blank'>Click Acá</ProductsCTA>
      </ProductsCTAContainer>

      <Productos />
      <Postventa />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  padding-top: 80px;
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2vw;
  margin: 8vh 0 6vh;
  padding: 0 12vw 1vh;
  position: relative;
  letter-spacing: 1.5px;
  color: hsla(0, 0%, 0%, 0.85);
  &::before {
    content: "";
    width: 4.6vw;
    height: 0.6vh;
    background-color: rgba(1, 21, 137, 0.85);
    position: absolute;
    left: 0;
    bottom: -2px;
    margin: 0 12vw;
  }
  @media only screen and (max-width: 728px) {    padding: 0 4vw 4px;
    font-size: 1.4em;
    margin: 6vh 0 4vh;
    &::before {
      width: 20%;
      margin: 0 4vw;
  }
}
`

export const ProductsCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductsBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84%;
    padding: 80px 0;
    border-radius: 6px;
    background-color: #d3d7d6;
    position: relative;
    h3 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 2.2em;
      color: rgba(0, 0, 0, 0.85);
      text-align: center;
    }
    @media only screen and (max-width: 720px) {
    width: 94%;
    h3 {
      font-size: 1.4em;
      max-width: 20ch;
      line-height: 1.4em;
    }
  }
`

export const ProductsCTA = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 38px;
  background-color: #2b3fac;
  border-radius: 40px;
  font-weight: 400;
  font-size: 1.3rem;
  color: white;
  position: relative;
  text-align: center;
  margin-top: -4vh;
  margin-bottom: 2vh;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    filter: brightness(1.3);
    transform: translateY(-4px);
  }
  @media only screen and (max-width: 728px) {    padding: 1.8vh 6vw;
    font-size: 4vw;
    margin-bottom: 30px;
  }
`
