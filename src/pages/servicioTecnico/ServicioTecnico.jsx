import styled from '@emotion/styled';
import React from 'react';

export default function ServicioTecnico() {
  const mql = window.matchMedia('(max-width: 1024px)');
  let isMobile = mql.matches;

  return (
    <PageContainer>
      <img src={process.env.PUBLIC_URL + "/img/argentina.png"} alt="" />
      <h2>
        Para solicitar {isMobile && <br></br>}
        un servicio {!isMobile && <br></br>} 
        técnico, {isMobile && <br></br>}
          <a href="http://postventa.briket.com.ar:3000/" target='_self' rel="noreferrer">ingrese aquí</a>
      </h2>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 60px;
  background-color: #f8f9f9;
  padding-top: 100px;
  img {
    height: 80vh;
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
  @media only screen and (max-width: 1024px) {
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
