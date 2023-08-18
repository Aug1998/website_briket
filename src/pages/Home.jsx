import React from 'react'
import styled from '@emotion/styled'

export default function Home() {
  return (
    <>
      <HeroImage></HeroImage>
      <HeroBoxes>
        <div><img src='./img/empresa.png'></img></div>
        <div><img src='./img/trayectoria.png'></img></div>
        <div><img src='./img/planta.png'></img></div>
      </HeroBoxes>
    </>
  )
}

const HeroImage = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  background-color: gray;
`

const HeroBoxes = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 8vw;
  div {
    width: 330px;
    height: 260px;
    background-color: #e8eef2;
    display: flex;
    justify-content:center;
    padding: 50px 0;
    img {
      height: 100%;
    }
  }
`
