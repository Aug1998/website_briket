import React from 'react'
import styled from '@emotion/styled'

export default function Footer() {
  return (
    <FooterContainer>
      <img src="img/logo.png" alt="" />
      <ContactContainer>
        <h5>Contacto</h5>
        <p>Ov. Lagos 7245 - C.C. N° 3 Suc. 18 - 2000 Rosario - Argentina</p>
        <p>Administración: 12345</p>
        <p>Servicio Técnico: 123123</p>
        <p>Compras: 123123123</p>
        <SocialMediaContainer>

        </SocialMediaContainer>
      </ContactContainer>
      <Certificados>
        <img src="img/certificados.png" alt="" />
      </Certificados>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background-color: #1a1a1a;
  padding: 40px 14vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  img {
    filter: brightness(1000) grayscale(1000);
    width: 300px;
  }
`

const ContactContainer = styled.div`
  color: white;
  font-size: 0.9em;
  h5 {
    text-transform: uppercase;
    font-size: 1em;
    margin-bottom: 10px;
  }
  p {
    font-size: 0.9em;
  }
`

const SocialMediaContainer = styled.div`
`

const Certificados = styled.div`
  img {
    filter: none;
    width: 240px;
  }
`