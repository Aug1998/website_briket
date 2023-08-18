import { useState } from 'react'
import styled from '@emotion/styled'

const Header = (props) => {
  const { isMobile } = props;
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  return (
    <>
    <HeaderWrapper>
      <HeaderInner>
        <MobileNavButton onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}>
          <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#555555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </MobileNavButton>
        <Logo src='img/logo.png'/>
        <Nav>
          <a href="#">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#nosotros">Productos</a>
          <a href="#nosotros">Postventa</a>
          <a href="#contacto">Contacto</a>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
      {isMobile && (
        <MobileNav isOpen={mobileNavIsOpen}>
          <a href="#">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#nosotros">Productos</a>
          <a href="#nosotros">Postventa</a>
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
  padding: 0 8vw;
  background-color: white;
  @media only screen and (max-width: 800px) {
    padding: 0 0;
    justify-content: center;
  }
`

const Nav = styled.div`
  a {
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 700;
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
  @media only screen and (max-width: 800px) {
    display: none;
  }
`

const MobileNav = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: -40px;
  background-color: white;
  width: 100%;
  padding: 0px 50px 20px;
  z-index: 98;
  transition: all 0.3s;
  transform: ${props => props.isOpen? "translateY(150px)" : ""};
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