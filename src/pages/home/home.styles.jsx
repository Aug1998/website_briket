import styled from '@emotion/styled'

export const HeroBoxes = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12vw;
  margin: 60px 0;
  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`

export const Box = styled.div`
  cursor: pointer;
  width: 21vw;
  height: 17vw;
  max-width: 330px;
  max-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  gap: 16px;
  padding: 50px 0;
  transform: ${props => (props.isSelected ? "scale(1.1)" : "")};
  background-color: ${props => (props.isSelected ? "#d3d7d6" : "#e8eef2")};
  transition: 0.2s;
  z-index: 99;
  user-select: none;
  img {
    height: 100%;
  }
  h4 {
    font-size: 1.4rem;
    color: #00347f;
    text-align: center;
  }
  &:hover{
    background-color: #d3d7d6;
  }
  @media only screen and (max-width: 1024px) {
    padding: 16px;
    width: 30%;
    max-height: unset;
    height: 184px;
    img {
      width: 90px;
      height: unset;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
`

export const AboutUs = styled.div`
  padding: 0 12vw;
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
      font-size: 2em;
      color: #2c3a77;
    }
    p{
      max-width: 60ch;
      font-size: 0.9em;
      line-height: 1.5em;
   
    }
  }
  img{
    width: 36vw;
    max-width: 540px;
  }
  @media only screen and (max-width: 1024px) {
    justify-content: center;
    padding: 20px 20px;
    img{
      display: none;
    }
    div {
    h3{
      font-size: 2em;
    }
    p{
      font-size: 1.1em;
    }
  }
  }
`

export const Label = styled.h3`
 text-transform: uppercase;
 font-weight: 600;
 font-size: 1.8em;
 padding: 0 12vw 6px;
 position: relative;
 letter-spacing: 2px;
 margin: 60px 0 30px;
 &::before {
  content: "";
  width: 60px;
  height: 2px;
  background-color: #2c3a77;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0 12vw;
 }
  @media only screen and (max-width: 1024px) {
    padding: 0 8vw 4px;
    font-size: 1.6em;
    &::before {
      margin: 0 8vw;
    }
  }
`

export const ProductsCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductsBanner = styled.h3`
 text-transform: uppercase;
 width: 100%;
 padding: 60px 0;
 background-color: #d3d7d6;
 font-weight: 600;
 font-size: 2.8em;
 color: black;
 position: relative;
 text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 2em;
  }
`

export const ProductsCTA = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px 30px;
  background-color: #2c3a77;
  border-radius: 10px;
  font-weight: 600;
  font-size: 2em;
  color: white;
  position: relative;
  text-align: center;
  margin-top: -40px;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    background-color: #355594;
    transform: translateY(-4px);
  }
  @media only screen and (max-width: 1024px) {
    margin-top: -26px;
    font-size: 1.6em;
  }
`

export const Lineas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding: 0 16vw;
  height: 580px;
  box-sizing: border-box;
  width: 100vw;
  @media only screen and (max-width: 1024px) {
    gap: 30px;
    padding: 0;
    height: 460px;
  }
`

export const LineasImg = styled.img`
  width: 50%;
  overflow-x: hidden;
  cursor: pointer;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  transition: all 0.2s;
  transform: ${props => props.isSelected ? "scale(1.1)" : ""};
  @media only screen and (max-width: 1024px) {
    width: 40%;
  }
`

export const Productos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 12vw 40px;
  gap: 20px;
  background-color: #f4f5f9;
`

export const Producto = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d3d7d6;
  width: 100%;
  padding: 40px 70px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  &:hover{
    filter: brightness(108%);
    & > div {
      background-color: #355594;
      transform: translateX(0px);
    }
  }
  h3 {
    text-transform: uppercase;
    color: black;
    font-size: 2.6em;
    font-weight: 400;
  }
  img {
    max-height: 200px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #bfbfbf;
    width: 36px;
    height: 60px;
    color: white;
    font-size: 2em;
    margin-bottom: 16px;
    margin-left: 150px;
    transform: translateX(-10px);
    transition: 0.3s;
    @media only screen and (max-width: 1024px) {
      margin-bottom: 0px;
      margin-left: 0px;
      transform: translateX(0px);
    }
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 30px 40px;
    gap: 12px;
  }
`

export const Postventa = styled.div`
  background-color: #2c3a77;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 60px 0;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const PostventaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #2c3a77;
  p{
    color: #3f3f3f;
    font-size: 0.9em;
  }
  div:first-of-type{
    background-color: white;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    svg {
      max-width: 90px;
      max-height: 80px;
      fill: #011689;
      transform: translate(1px, -1px);
    }
  }
  div:last-of-type{
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: 40px;
    width: 360px;
    height: 410px;
    margin-top: -70px;
    padding: 100px 30px 30px 30px;
    h4 {
      color: #0033a1;
      text-transform: uppercase;
      font-size: 1.5em;
      font-weight: 700;
      line-height: 1.2em;
    }
  }
  a {
    background-color: #2c3a77;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 18px;
    text-transform: uppercase;
    transition: 0.2s;
    &:hover{
      background-color: #2a4479;
      transform: translateY(-3px);
    }
  }
`
