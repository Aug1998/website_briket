import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderAnimation from './HeaderAnimation';

export const Header = (props) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const navigate = useNavigate()

  return (
    <>
      <HeaderWrapper id="inicio">
        <HeaderAnimation />
        <HeaderInner>
          <MobileNavButton onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}>
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#555555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MobileNavButton>
          <Logo onClick={() => {
                navigate("/")
                window.scrollTo({top: 0, behavior: 'smooth'});
            }} src={process.env.PUBLIC_URL + '/img/logo.png'} />
          <Nav>
            <button onClick={() => {
                navigate("/")
                window.scrollTo({top: 0, behavior: 'smooth'});
            }}> Inicio </button>
            <button onClick={() => document.getElementById('nosotros').scrollIntoView()}>Nosotros</button>
            <button onClick={() => document.getElementById('productos').scrollIntoView()}>Productos</button>
            <button onClick={() => document.getElementById('postventa').scrollIntoView()}>Postventa</button>
            <button onClick={() => document.getElementById('contacto').scrollIntoView()}>Contacto</button>
          </Nav>
        </HeaderInner>
      </HeaderWrapper>
      {vw <= 1024 && (
        <MobileNav isOpen={mobileNavIsOpen}>
          <button onClick={() => document.getElementById('inicio').scrollIntoView()}>Inicio</button>
          <button onClick={() => document.getElementById('nosotros').scrollIntoView()}>Nosotros</button>
          <button onClick={() => document.getElementById('productos').scrollIntoView()}>Productos</button>
          <button onClick={() => document.getElementById('postventa').scrollIntoView()}>Postventa</button>
          <button onClick={() => document.getElementById('contacto').scrollIntoView()}>Contacto</button>
        </MobileNav>
      )}
    </>
  )
}

const HeaderWrapper = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 10vh;
  min-height: 80px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  box-shadow: rgba(32, 32, 32, 0.4) 0px 1px 8px 0px;
  transition: 180ms;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.5) 0px 3px 8px 0px;
  }
`

const HeaderInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12vw;
  z-index: 2;
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
    font-size: 0.85rem;
    letter-spacing: 0.08vw;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    color: #000000da;
    transition: 100ms;
    &:not(:last-child) {
      margin-right: 2vw;
    }
    &:hover {
      transform: translateY(-1px);
      color: #000000;
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
  gap: 10px;
  top: -172px;
  background-color: #ecf0f3;
  width: 100%;
  padding: 50px 50px 20px;
  z-index: 98;
  transition: all 0.3s;
  transform: ${props => props.isOpen ? "translateY(232px)" : ""};
  button {
    all: unset;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    &:not(:last-child) {
      margin-right: 32px;
    }
    &:hover {
      font-weight: 700;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

const Logo = styled.img`
  height: 60%;
  opacity: 0.9;
  transition: 0.2s;
  &:hover{
    cursor: pointer;
    opacity: 1;
    transform: scale(1.01);
  }
  @media only screen and (max-width: 720px) {
    height: 46%;
  }
`

const MobileNavButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  left: 6%;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`