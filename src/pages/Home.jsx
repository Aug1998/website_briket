import React, { useState } from 'react'
import styled from '@emotion/styled'

export default function Home() {

  const [selectedBox, setSelectedBox] = useState("empresa")

  return (
    <>
      <HeroImage></HeroImage>
      <HeroBoxes>
        <Box isSelected={selectedBox === "empresa"} onClick={() => setSelectedBox("empresa")}>
          <img src='./img/empresa.png' />
        </Box>
        <Box isSelected={selectedBox === "trayectoria"} onClick={() => setSelectedBox("trayectoria")}>
          <img src='./img/trayectoria.png' />
        </Box>
        <Box isSelected={selectedBox === "planta"} onClick={() => setSelectedBox("planta")}>
          <img src='./img/planta.png' />
        </Box>
      </HeroBoxes>
      <AboutUs>
        <div>
          <h3>Nuestra empresa</h3>
          <p>
            Briket SA es una empresa 100% nacional que nació en la ciudad de Rosario con más de 65 años de trayectoria y que cuenta con una planta industrial de 25.000 m2 cubiertos desde donde se producen heladeras, freezers y exhibidoras comerciales, logrando en la actualidad posicionarse como una de las marcas líderes de refrigeración en el país.
          </p>
        </div>
        <img src='./img/foto.png' />
      </AboutUs>
      <Label>Productos</Label>
      <ProductsBanner>Conocé todos nuestros productos</ProductsBanner>
    </>
  )
}

const HeroImage = styled.div`
  background-image: url("./img/hero.png");
  background-position-y: 100%;
  background-size: 100%;
  height: calc(100vh - 110px);
  background-color: gray;
`

const HeroBoxes = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -130px;
  padding: 0 16vw;
`

const Box = styled.div`
  cursor: pointer;
  width: 330px;
  height: 260px;
  display: flex;
  justify-content:center;
  padding: 50px 0;
  transform: ${props => (props.isSelected ? "scale(1.1)" : "")};
  background-color: ${props => (props.isSelected ? "#1f3664" : "#e8eef2")};
  transition: 0.2s;
  &:hover{
    background-color: #1f3664;
    img {
      filter: brightness(100);
    }
  }
  img {
    height: 100%;
    filter: ${props => (props.isSelected ? "brightness(100)" : "")};
  }
`

const AboutUs = styled.div`
  padding: 130px 16vw;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  div {
    display: flex;
    flex-direction: column;
    h3{
      margin-bottom: 18px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 2.3em;
      color: #1f3664;
    }
    p{
      max-width: 44ch;
      font-size: 1.2em;
      line-height: 1.3em;
    }
  }
  img{
    width: 30vw;
    max-width: 540px;
  }
`

const Label = styled.h3`
 text-transform: uppercase;
 font-weight: 600;
 font-size: 22px;
 padding: 0 16vw 2px;
 position: relative;
 margin-bottom: 28px;
 &::before {
  content: "";
  width: 40px;
  height: 2px;
  background-color: #1f3664;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0 16vw;
 }
`

const ProductsBanner = styled.h3`
 text-transform: uppercase;
 width: 100%;
 padding: 50px 0;
 background-color: #0033a1;
 font-weight: 600;
 font-size: 2.8em;
 color: white;
 position: relative;
 text-align: center;
`