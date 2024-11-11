import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Title } from '../Home'

export default function AboutUs() {
  const [selectedBox, setSelectedBox] = useState("empresa")

  return (
    <>
      <Title id="nosotros">Sobre nosotros</Title>
      <HeroBoxes id="nosotros">
        <Box isSelected={selectedBox === "empresa"} onClick={() => setSelectedBox("empresa")}>
          <img src={process.env.PUBLIC_URL + '/img/aboutUs/empresa.png'} alt='' />
          <h4>Nuestra Empresa</h4>
        </Box>
        <Box isSelected={selectedBox === "planta"} onClick={() => setSelectedBox("planta")}>
          <img src={process.env.PUBLIC_URL + '/img/aboutUs/planta.png'} alt='' />
          <h4>Planta Industrial</h4>
        </Box>
        <Box isSelected={selectedBox === "nosotros"} onClick={() => setSelectedBox("nosotros")}>
          <img src={process.env.PUBLIC_URL + '/img/aboutUs/nosotros.png'} alt='' />
          <h4>Nuestros valores</h4>
        </Box>
      </HeroBoxes>

      <InfoContainer>
        {selectedBox === "empresa" && (
          <InfoItem isSelected={selectedBox === "empresa"}>
            <h3>Nuestra empresa</h3>
            <p>
              Somos una empresa especializada en la fabricación de
              electrodomésticos con una tradición de casi 70 años en el mercado. A lo largo de la historia, hemos demostrado consistentemente la calidad de nuestros productos, así como una sólida presencia en el mercado, ofreciendo a los consumidores argentinos alternativas confiables y asequibles.
              <br/><br/>
              Nuestros productos se destacan por su nobleza, excelentes prestaciones y una relación calidad-precio inigualable.
              <br/><br/>
              Nuestra marca se caracteriza por su enfoque en la confianza, la tradición y las implicidad. Nos esforzamos por proporcionar soluciones funcionales y elegantes para consumidores que valoran la practicidad por encima de la sofisticación y la elegancia por encima del vanguardismo. Con el paso de los años, hemos dedicado nuestros esfuerzos al desarrollo de productos exclusivos y novedosos.
              <br/><br/>
              Además de servir al mercado de consumo, también atendemos al segmento comercial/industrial con diversas líneas de productos. En este ámbito, nos enfocamos en transmitir confianza, seguridad en el funcionamiento y practicidad en el uso de nuestros productos. Dado que se trata de bien es de uso, aseguramos una relación óptima entre precio y prestación.
            </p>
            <img src={process.env.PUBLIC_URL + '/img/foto.png'} alt='' />
          </InfoItem>
        )}
        {selectedBox === "planta" && (
          <InfoItem isSelected={selectedBox === "planta"}>
            <h3>Planta industrial</h3>
            <p>
              En nuestras instalaciones, que abarcan más de 50,000 metros cuadrados, invertimos continuamente en investigación y desarrollo (I+D) con el objetivo de diseñar productos modernos y eficientes.
              <br/><br/>
              Nuestra empresa ha cumplido rigurosamente con los protocolos internacionales destinados a la reducción de la huella de carbono.
              <br/><br/>
              En el marco del <b>Protocolo de Montreal</b>, hemos eliminado gases de nuestros productos que directamente afectaban la capa de ozono, reemplazándolos por compuestos 100% ecológicos y naturales. Por otro lado, en relación al <b>Protocolo de Kyoto</b>, hemos eliminado gases presentes en nuestros productos que contribuían al calentamiento global, sustituyendolos también por alternativas amigables con el medio ambiente.
              <br/><br/>
              Briket ha implementado un importante avance al incorporar Ciclopentano como agente expansor de la espuma aislante, eliminando por completo el uso de CFCs. Además, nuestros equipos operan con el gas ecológico R-600 y R-290.
              <br/><br/>
              Estos esfuerzos demuestran el firme compromiso de Briket con la preservación de la ecología, el respeto por la naturaleza y la convicción de que todos podemos contribuir a hacer del mundo un lugar mejor.
            </p>
            <img src={process.env.PUBLIC_URL + '/img/planta-industrial.jpg'} alt='' />
          </InfoItem>
        )}
        {selectedBox === "nosotros" && (
          <InfoItem isSelected={selectedBox === "nosotros"}>
            <h3>Nuestros valores</h3>
            <p>
              <b>Misión:</b> Nuestra misión es proporcionar productos de calidad y confiabilidad que satisfagan las necesidades de nuestros clientes en el mercado de electrodomésticos. Nos esforzamos por ofrecer soluciones innovadoras y funcionales para el hogar y los negocios. Nos comprometemos a brindar un servicio excepcional al cliente y a mantenernos a la vanguardia de las demandas del mercado.
              <br/><br/>
              <b>Visión:</b> Aspiramos a convertirnos en la marca líder en electrodomésticos en Argentina, reconocida por la calidad de nuestros productos, la satisfacción del cliente y el compromiso con la innovación. Buscamos expandir nuestra presencia en el mercado nacional y consolidarnos como referentes en la industria de electrodomésticos, ofreciendo una amplia gama de productos confiables y adaptados a las cambiantes necesidades de los consumidores.
              <br/><br/>
              <b>Valores:</b>
              <ul>
                <li>
                  <u>Calidad y confiabilidad</u>: Nos esforzamos por superar las expectativas de nuestros clientes, proporcionando productos de alta calidad y confiabilidad que les brinden una experiencia satisfactoria.
                </li>
                <li>
                  <u>Orientación al cliente</u>: Ponemos a nuestros clientes en el centro de todo lo que hacemos. Escuchamos y comprendemos sus necesidades para ofrecer soluciones adecuadas y un servicio excepcional.
                </li>
                <li>
                  <u>Innovación</u>: Nos mantenemos actualizados con las últimas tendencias y exigencias del mercado. Buscamos constantemente nuevas formas de mejorar nuestros productos y procesos para mantenernos competitivos y relevantes.
                </li>
                <li>
                  <u>Integridad y ética</u>: Actuamos con honestidad, transparencia y responsabilidad en todas nuestras operaciones y relaciones comerciales.
                </li>
                <li>
                  <u>Compromiso con la comunidad</u>: Contribuimos al desarrollo sostenible de la comunidad en la que operamos, promoviendo prácticas socialmente responsables y respaldando iniciativas locales.
                </li>
              </ul>
            </p>
            <img src={process.env.PUBLIC_URL + '/img/foto.png'} alt='' />
          </InfoItem>
        )}
      </InfoContainer>
    </>
  )
}

const InfoContainer = styled.div`
  padding: 70px 11vw;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 80px;
  @media only screen and (max-width: 728px) {    padding: 60px 4vw 30px;
  }
`

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-bottom: 18px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.8em;
    color: rgba(1, 21, 137, 0.85);
    transform: translateX(-20px);
    opacity: 0.2;
    animation: ${props => props.isSelected ? css`${fadeInFromLeft} 0.8s ease forwards` : 'none'};
  }
  p {
    max-width: 64ch;
    font-size: 0.85em;
    line-height: 1.5em;
    transform: translateX(-20px);
    opacity: 0.2;
    animation: ${props => props.isSelected ? css`${fadeInFromLeft} 0.8s ease forwards` : 'none'};
  }
  img {
    position: absolute;
    right: -180px;
    top: 0px;
    height: 100%;
    mask-image: linear-gradient(to left, black, transparent ) ;
    opacity: 0.2;
    transform: translateX(20px);
    animation: ${props => props.isSelected ? css`${fadeInFromRight} 0.8s ease forwards` : 'none'};
    @media only screen and (max-width: 728px) {      left: -30vw;
    }
  }
`
const fadeInFromLeft = keyframes`
  from {
    opacity: 0.2;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInFromRight = keyframes`
  from {
    opacity: 0.2;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeroBoxes = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12vw;
  margin-bottom: -4vh;
  @media only screen and (max-width: 728px) {    padding: 0 14px;
  }
`

const Box = styled.div`
  cursor: pointer;
  width: 21vw;
  padding: 28px 28px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  transform: ${props => (props.isSelected ? "scale(1.1)" : "")};
  transition: 0.2s;
  z-index: 99;
  user-select: none;
  border-radius: 2px;
  box-shadow: rgba(15, 15, 15, 0.2) 0px 4px ${props => (props.isSelected ? "10px" : "6px")} 0px;
  filter: brightness(0.94);
  background: 
    linear-gradient(112.5deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 2%, rgba(231, 231, 231, 0.03) 2%, rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 11%, rgba(2, 2, 2, 0.03) 11%, rgba(2, 2, 2, 0.03) 67%, rgba(231, 231, 231, 0.03) 67%, rgba(231, 231, 231, 0.03) 90%, rgba(111, 111, 111, 0.03) 90%, rgba(111, 111, 111, 0.03) 100%), 
    linear-gradient(157.5deg, rgba(210, 210, 210, 0.03) 0%, rgba(210, 210, 210, 0.03) 17%, rgba(254, 254, 254, 0.03) 17%, rgba(254, 254, 254, 0.03) 18%, rgba(96, 96, 96, 0.03) 18%, rgba(96, 96, 96, 0.03) 44%, rgba(159, 159, 159, 0.03) 44%, rgba(159, 159, 159, 0.03) 70%, rgba(24, 24, 24, 0.03) 70%, rgba(24, 24, 24, 0.03) 82%, rgba(16, 16, 16, 0.03) 82%, rgba(16, 16, 16, 0.03) 100%), 
    linear-gradient(22.5deg, rgba(47, 47, 47, 0.03) 0%, rgba(47, 47, 47, 0.03) 32%, rgba(124, 124, 124, 0.03) 32%, rgba(124, 124, 124, 0.03) 40%, rgba(200, 200, 200, 0.03) 40%, rgba(200, 200, 200, 0.03) 42%, rgba(16, 16, 16, 0.03) 42%, rgba(16, 16, 16, 0.03) 64%, rgba(243, 243, 243, 0.03) 64%, rgba(243, 243, 243, 0.03) 94%, rgba(93, 93, 93, 0.03) 94%, rgba(93, 93, 93, 0.03) 100%), 
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
  img {
    height: 74px;
  }
  h4 {
    font-size: 1.3vw;
    font-weight: 500;
    color: #00347f;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  &:hover{
    background-color: #d3d7d6;
  }
  @media only screen and (max-width: 728px) {    align-items: center;
    padding: 0px;
    width: 28vw;
    height: 28vw;
    img {
      width: 15vw;
      height: unset;
    }
    h4 {
      font-size: 2.5vw;
    }
  }
`