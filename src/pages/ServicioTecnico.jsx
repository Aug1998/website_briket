import React from 'react'
import styled from '@emotion/styled'

export default function ServicioTecnico() {
  const mql = window.matchMedia('(max-width: 800px)');
  let isMobile = mql.matches;

  return (
    <PageContainer>
      <img src="./img/argentina.png" alt="" />
      <h2>Para solicitar {isMobile && <br></br>}un servicio {!isMobile && <br></br>} técnico, {isMobile && <br></br>}<a href="http://200.55.245.33:3000/" target='_blank'>ingrese aquí</a></h2>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 60px;
  background-color: #f8f9f9;
  img {
    height: 800px;
  }
  h2 {
    margin-top: 210px;
    text-transform: uppercase;
    text-align: right;
    font-size: 2em;
    line-height: 1.6em;
    a {
      text-decoration: none;
      background-color: #2c3a77;
      border-radius: 6px;
      color: white;
      padding: 4px 10px;
      transition: 0.2s;
      &:hover{
        font-size: 1.01em;
        background-color: #2a4479;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    padding: 40px 20px 60px;
    img{
      height: 600px;
    }
    h2 {
      font-size: 1.2em;
      margin-left: -100px;
    }
  }
`
