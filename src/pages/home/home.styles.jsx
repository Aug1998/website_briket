import styled from '@emotion/styled'

export const HeroBoxes = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12vw;
  margin: clamp(80px, 9vh, 500px) 0;
  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`

export const Box = styled.div`
  cursor: pointer;
  width: 21vw;
  height: 17vw;
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
    font-size: 1.5vw;
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
      font-size: 2.5vw;
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
      font-size: 2.3vw;
      color: #2c3a77;
    }
    p{
      max-width: 60ch;
      font-size: 1vw;
      line-height: clamp(1.4rem, 2.8vh, 10rem);
   
    }
  }
  img{
    width: 36vw;
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

export const Title = styled.h3`
 text-transform: uppercase;
 font-weight: 600;
 font-size: 2vw;
 padding: 0 12vw 1.2vh;
 position: relative;
 letter-spacing: 0.12vw;
 margin: 8vh 0 4vh;
 &::before {
  content: "";
  width: 4.4vw;
  height: 0.4vh;
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
 display: flex;
 align-items: center;
 justify-content: center;
 height: clamp(120px, 22vh, 2000px);
 background-color: #d3d7d6;
 font-weight: 600;
 font-size: 2.8vw;
 color: black;
 position: relative;
 text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 6vw;
  }
`

export const ProductsCTA = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.8vh 2vw;
  background-color: #2c3a77;
  border-radius: 10px;
  font-weight: 600;
  font-size: 2vw;
  color: white;
  position: relative;
  text-align: center;
  margin-top: -4vh;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    background-color: #355594;
    transform: translateY(-4px);
  }
  @media only screen and (max-width: 500px) {
    padding: 1.8vh 4vw;
    font-size: 4vw;
  }
`

export const Lineas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10vw;
  padding: 0 16vw;
  box-sizing: border-box;
  width: 100vw;
  margin: clamp(40px, 6vh, 200px) 0;
`

export const LineasImg = styled.img`
  height: clamp(300px, 44vh, 1000px);
  cursor: pointer;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  transition: all 0.2s;
  transform: ${props => props.isSelected ? "scale(1.1)" : ""};
  @media only screen and (max-width: 500px) {
    height: 19vh
  }
`

export const Productos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(50px, 8vh, 200px) 18vw;
  gap: 5vh;
  background-color: #f4f5f9;
  @media only screen and (max-width: 500px) {
    padding: clamp(50px, 8vh, 200px) 10vw;
  }
`

export const Producto = styled.a`
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas: 
  'img'
  'title'
  'arrow'
  ;
  background-color: #d3d7d6;
  width: 100%;
  padding: 6vh 2vw;
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
    font-size: 2.4vw;
    font-weight: 400;
    grid-area: title;
  }
  img {
    min-height: 140px;
    height: 20vh;
    grid-area: img;
  }
  div {
    grid-area: arrow;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #bfbfbf;
    width: 3vw;
    min-height: 80px;
    height: 9vh;
    color: white;
    font-size: 2.2vw;
    transform: translateX(-1vw);
    transition: 0.3s;
    @media only screen and (max-width: 500px) {
      transform: translateX(0);
      height: 2.4vh;
      min-height: 0px;
    }
  }
  @media only screen and (max-width: 500px) {
    max-width: 400px;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    align-items: center;
    justify-content: center;
    grid-template-areas: 
      'img img'
      'title arrow'
    ;
    padding: 30px 40px;
    gap: 12px;
    h3 {
      text-align: right;
    }
  }
`

export const Postventa = styled.div`
  background-color: #2c3a77;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  padding: 8vh 0;
  @media only screen and (max-width: 500px) {
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
    font-size: 1vw;
    @media only screen and (max-width: 500px) {
      font-size: 3.4vw;
    }
  }
  div:first-of-type{
    background-color: white;
    min-height: 100px;
    min-width: 100px;
    width: 14vh;
    height: 14vh;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    svg {
      width: 60%;
      height: 60%;
      fill: #011689;
      transform: translate(0.08vw, -0.1vh);
    }
  }
  div:last-of-type{
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 0.6vw;
    padding-right: 0.6vw;
    text-align: center;
    gap: 6vh;
    width: 22vw;
    min-height: 300px;
    height: 50vh;
    margin-top: -9vh;
    h4 {
      color: #0033a1;
      text-transform: uppercase;
      font-size: 1.6vw;
      font-weight: 700;
      line-height: 4vh;
    }
    @media only screen and (max-width: 500px) {
      width: 80vw;
      h4 {
        font-size: 6vw;
      }
    }
  }
  a {
    background-color: #2c3a77;
    color: white;
    text-decoration: none;
    font-size: 1vw;
    padding: 2vh 1.4vw;
    border-radius: 18px;
    text-transform: uppercase;
    transition: 0.2s;
    &:hover{
      background-color: #2a4479;
      transform: translateY(-3px);
    }
    @media only screen and (max-width: 500px) {
      font-size: 3.4vw;
      padding: 1vh 3vw;
    }
  }
`
