import { useState } from 'react'
import styled from '@emotion/styled'
import { Link } from "react-router-dom";

const Header = (props) => {
  const { isMobile } = props;
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  return (
    <>
    <HeaderWrapper id="inicio">
      <HeaderInner>
        <MobileNavButton onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}>
          <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#555555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </MobileNavButton>
        <Logo src={process.env.PUBLIC_URL + '/img/logo.png'}/>
        <Nav>
          <button onClick={() => document.getElementById('inicio').scrollIntoView() }>Inicio</button>
          <button onClick={() => document.getElementById('nosotros').scrollIntoView() }>Nosotros</button>
          <button onClick={() => document.getElementById('productos').scrollIntoView() }>Productos</button>
          <button onClick={() => document.getElementById('postventa').scrollIntoView() }>Postventa</button>
          <button onClick={() => document.getElementById('contacto').scrollIntoView() }>Contacto</button>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
      {isMobile && (
        <MobileNav isOpen={mobileNavIsOpen}>
          <a href="#">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#postventa">Postventa</a>
          <a href="#contacto">Contacto</a>
        </MobileNav>
      )}
    </>
  )
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`

const HeaderInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12vw;
  background-color: white;
  z-index: 99;
  @media only screen and (max-width: 1024px) {
    padding: 0 0;
    justify-content: center;
  }
  @media only screen and (max-width: 1350px) {
    padding: 0 6vw;
  }
`

const Nav = styled.div`
  button {
    all: unset;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    &:not(:last-child) {
      margin-right: 32px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const MobileNav = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: -172px;
  background-color: white;
  width: 100%;
  padding: 0px 50px 20px;
  z-index: 98;
  transition: all 0.3s;
  transform: ${props => props.isOpen? "translateY(282px)" : ""};
  a {
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  @media only screen and (min-width: 800px) {
    display: none;
  }
`

const Logo = styled.img`
  height: 54px;
`

const MobileNavButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  left: 6%;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`