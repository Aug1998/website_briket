import React, { useState } from 'react'
import styled from '@emotion/styled'

export default function Home() {

  const [selectedBox, setSelectedBox] = useState("empresa")
  const [selectedLine, setSelectedLine] = useState("comercial")

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
      <ProductsCTAContainer>
        <ProductsBanner>Conocé todos nuestros productos</ProductsBanner>
        <ProductsCTA>Click Aca</ProductsCTA>
      </ProductsCTAContainer>
      <Lineas>
        {selectedLine === "comercial" ? (
          <img src="./img/productos/comercial-s.png" alt="" />
        ) : (
          <img onClick={() => setSelectedLine("comercial")} src="./img/productos/comercial.png" alt="" />
        )}
        {selectedLine === "hogar" ? (
          <img src="./img/productos/hogar-s.png" alt="" />
        ) : (
          <img onClick={() => setSelectedLine("hogar")} src="./img/productos/hogar.png" alt="" />
        )}
      </Lineas>
      <Productos>
        {selectedLine === "hogar" && (
          <Producto>
            <img src="./img/productos/heladeras.png" alt="" />
            <h3>Heladeras</h3>
            <div role='button'>&gt;</div>
          </Producto>
        )}
        <Producto>
          <img src="./img/productos/freezers.png" alt="" />
          <h3>Freezers</h3>
          <div role='button'>&gt;</div>
        </Producto>
        <Producto>
          <img src="./img/productos/exhibidoras.png" alt="" />
          <h3>Exhibidoras</h3>
          <div role='button'>&gt;</div>
        </Producto>
      </Productos>
      <Label>Postventa</Label>
      <Postventa>
        <PostventaItem>
          <div>
            I
          </div>
          <div>
            <h4>Servicio Técnico</h4>
            <p>Contamos con cobertura en todo el país, consulta por localidad.</p>
          </div>
        </PostventaItem>
        <PostventaItem>
          <div>
            I
          </div>
          <div>
            <h4>Garantía</h4>
            <p>Contamos con cobertura en todo el pais, consulta por localidad.</p>
          </div>
        </PostventaItem>
        <PostventaItem>
          <div>
            I
          </div>
          <div>
            <h4>Manuales y fichas técnicas</h4>
            <p>Cada producto cuenta con un manual específico y ficha técnica donde podrás encontrar todas las especificaciones, instalación y solución de problemas frencuentes.</p>
            <p><b>Encontralas en la descripción de cada producto</b></p>
          </div>
        </PostventaItem>
      </Postventa>
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
  padding: 0 14vw;
`

const Box = styled.div`
  cursor: pointer;
  width: 21vw;
  height: 17vw;
  max-width: 330px;
  max-height: 260px;
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
  padding: 100px 16vw;
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
 margin: 28px 0;
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

const ProductsCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProductsBanner = styled.h3`
 text-transform: uppercase;
 width: 100%;
 padding: 60px 0;
 background-color: #0033a1;
 font-weight: 600;
 font-size: 2.8em;
 color: white;
 position: relative;
 text-align: center;
`

const ProductsCTA = styled.a`
  text-transform: uppercase;
  padding: 12px 30px;
  background-color: #1f3664;
  border-radius: 3px;
  font-weight: 600;
  font-size: 2em;
  color: white;
  position: relative;
  text-align: center;
  margin-top: -40px;
  cursor: pointer;
`

const Lineas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 70px 16vw;
  img {
    max-width: 480px;
    cursor: pointer;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`

const Productos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 50px;
  background-color: #f4f5f9;
`

const Producto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f5f9;
  gap: 10px;
  h3 {
    text-transform: uppercase;
    color: #0033a1;
    font-size: 1.6em;
    margin-top: 2px;
  }
  img {
    max-width: 400px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0033a1;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    color: white;
    font-size: 2em;
  }
`

const Postventa = styled.div`
  background-color: #1f3664;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 40px 0;
`

const PostventaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1f3664;
  div:first-of-type{
    background-color: white;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    border: 1px solid black;
  }
  div:last-of-type{
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 30px;
    width: 360px;
    height: 410px;
    margin-top: -70px;
    padding: 80px 30px 30px 30px;
    h4 {
      text-transform: uppercase;
      font-size: 1.6em;
      color: #0033a1;
      line-height: 1.2em;
    }
  }
`