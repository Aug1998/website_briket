import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import RadioPill from '../../../components/RadioPill'

export default function Productos() {
  const [selectedLine, setSelectedLine] = useState("comercial")

  return (
    <Container>
      <RadioPill
        selectedOption={selectedLine}
        handleClick={(option) => setSelectedLine(option)}
      />
      <section>
        {selectedLine === "hogar" && (
          <Inner isSelected={selectedLine === "hogar"}>
            <Producto>
              <h3>Freezers</h3>
              <img src={process.env.PUBLIC_URL + "/img/productos/freezer-hogar.png"} alt="" />
              <button>Más información</button>
            </Producto>
            <Producto href='https://briket.mitiendanube.com/linea-hogar/heladeras/' target='_blank'>
              <h3>Heladeras</h3>
              <img src={process.env.PUBLIC_URL + "/img/productos/heladera.png"} alt="" />
              <button>Más información</button>
            </Producto>
            <Producto href='https://briket.mitiendanube.com/linea-hogar/exhibidoras/' target='_blank'>
              <h3>Exhibidoras</h3>
              <img src={process.env.PUBLIC_URL + "/img/productos/exhibidora-hogar.png"} alt="" />
              <button>Más información</button>
            </Producto>
          </Inner>
        )}
        {selectedLine === "comercial" && (
          <Inner isSelected={selectedLine === "comercial"}>
            <Producto href='https://briket.mitiendanube.com/linea-comercial/freezers1/' target='_blank'>
              <h3>Freezers</h3>
              <img src={process.env.PUBLIC_URL + "/img/productos/freezer-comercial.png"} alt="" />
              <button>Más información</button>
            </Producto>
            <Producto href='https://briket.mitiendanube.com/linea-comercial/exhibidoras2/' target='_blank'>
              <h3>Exhibidoras</h3>
              <img src={process.env.PUBLIC_URL + "/img/productos/exhibidora-comercial.png"} alt="" />
              <button>Más información</button>
            </Producto>
          </Inner>
        )}
      </section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 12vw;
  gap: 6vh;
  background-color: #f4f5f9;
  section {
    width: 100%;
    display: flex;
  }
  @media only screen and (max-width: 728px) {    padding: clamp(50px, 8vh, 200px) 4vw;
  }
`

const fadeInFromBottom = keyframes`
  from {
    opacity: 0.2;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  opacity: 0.2;
  transform: translateY(14px);
  animation: ${props => props.isSelected ? css`${fadeInFromBottom} 0.4s ease forwards` : 'none'};
  @media only screen and (max-width: 728px) {    flex-direction: column;
    gap: 20px;
  }
`

const Producto = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "title"
    "img"
    "button"
  ;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  user-select: none;
  border-radius: 8px;
  background-color: #d3d7d6;
  width: 340px;
  padding: 50px 40px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  &:hover{
    transform: translateY(-4px);
    & > button {
      filter: brightness(1.3);
      transform: translateY(7px);
    }
  }
  h3 {
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.85);
    font-size: 1.4em;
    font-weight: 600;
    grid-area: title;
    text-align: center;
    grid-column: 1/1;
    grid-area: title;
  }
  img {
    min-height: 140px;
    height: 20vh;
    grid-area: img;
    margin: 24px 0 40px;
    grid-column: 1/1;
    grid-area: img;
  }
  button {
    border-radius: 40px;
    padding: 12px 12px;
    width: 100%;
    height: fit-content;
    border: none;
    background-color: #27389b;
    color: white;
    font-size: 0.95em;
    transition: 0.3s;
    cursor: pointer;
    grid-column: 1/1;
    grid-area: button;
  }
  @media only screen and (max-width: 728px) {    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
      "img ."
      "img title"
      "img button"
      "img ."
    ;
    row-gap: 20px;
    column-gap: 40px;
    width: 100%;
    padding: 10px 0;
  }
`