import styled from '@emotion/styled'

export const HeroBoxes = styled.div`
  width: 100vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12vw;
  margin: 8vh 0;
  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`

export const Box = styled.div`
  cursor: pointer;
  width: 21vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-transform: uppercase;
  gap: 14px;
  padding: 44px 30px 50px;
  transform: ${props => (props.isSelected ? "scale(1.1)" : "")};
  transition: 0.2s;
  z-index: 99;
  user-select: none;
  border-radius: 2px;
  box-shadow: rgba(15, 15, 15, 0.2) 0px 4px ${props => (props.isSelected ? "10px" : "6px")} 0px;
  /* background-color: ${props => (props.isSelected ? "#d3d7d6" : "#e8eef2")}; */
  filter: brightness(0.94);
  background: 
    linear-gradient(112.5deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 2%, rgba(231, 231, 231, 0.03) 2%, rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 11%, rgba(2, 2, 2, 0.03) 11%, rgba(2, 2, 2, 0.03) 67%, rgba(231, 231, 231, 0.03) 67%, rgba(231, 231, 231, 0.03) 90%, rgba(111, 111, 111, 0.03) 90%, rgba(111, 111, 111, 0.03) 100%), 
    
    linear-gradient(157.5deg, rgba(210, 210, 210, 0.03) 0%, rgba(210, 210, 210, 0.03) 17%, rgba(254, 254, 254, 0.03) 17%, rgba(254, 254, 254, 0.03) 18%, rgba(96, 96, 96, 0.03) 18%, rgba(96, 96, 96, 0.03) 44%, rgba(159, 159, 159, 0.03) 44%, rgba(159, 159, 159, 0.03) 70%, rgba(24, 24, 24, 0.03) 70%, rgba(24, 24, 24, 0.03) 82%, rgba(16, 16, 16, 0.03) 82%, rgba(16, 16, 16, 0.03) 100%), 
    
    linear-gradient(22.5deg, rgba(47, 47, 47, 0.03) 0%, rgba(47, 47, 47, 0.03) 32%, rgba(124, 124, 124, 0.03) 32%, rgba(124, 124, 124, 0.03) 40%, rgba(200, 200, 200, 0.03) 40%, rgba(200, 200, 200, 0.03) 42%, rgba(16, 16, 16, 0.03) 42%, rgba(16, 16, 16, 0.03) 64%, rgba(243, 243, 243, 0.03) 64%, rgba(243, 243, 243, 0.03) 94%, rgba(93, 93, 93, 0.03) 94%, rgba(93, 93, 93, 0.03) 100%), 
    
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
  img {
    height: 76px;
  }
  h4 {
    font-size: 1.3vw;
    font-weight: 500;
    color: #00347f;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: lowercase;
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
      color: rgba(1, 21, 137, 0.85);
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
 letter-spacing: 1.5px;
 margin: 12vh 0 6vh;
 color: hsla(0, 0%, 0%, 0.85);
 &::before {
  content: "";
  width: 4.6vw;
  height: 0.6vh;
  background-color: rgba(1, 21, 137, 0.85);
  position: absolute;
  left: 0;
  bottom: -2px;
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
 width: 94%;
 padding: 80px 0;
 border-radius: 6px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: #d3d7d6;
 font-weight: 500;
 font-size: 2.6vw;
 color: rgba(0, 0, 0, 0.85);
 position: relative;
 text-align: center;
  @media only screen and (max-width: 720px) {
    font-size: 6vw;
  }
`

export const ProductsCTA = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.8vh 2vw;
  background-color: rgba(1, 21, 137, 1);
  border-radius: 40px;
  font-weight: 500;
  font-size: 1.6rem;
  color: white;
  position: relative;
  text-align: center;
  margin-top: -4vh;
  margin-bottom: 8vh;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    filter: brightness(1.4);
    transform: translateY(-4px);
  }
  @media only screen and (max-width: 720px) {
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
  @media only screen and (max-width: 720px) {
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
  @media only screen and (max-width: 720px) {
    padding: clamp(50px, 8vh, 200px) 10vw;
  }
`

export const Producto = styled.a`
  border-radius: 3px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 100%;
  grid-template-areas: 
  'img title arrow'
  ;
  background-color: #d3d7d6;
  width: 100%;
  padding: 6vh 2vw;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  &:hover{
    filter: brightness(108%);
    & > div {
      background-color: #355594;
      transform: translateX(0px);
    }
  }
  h3 {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.85);
    font-size: 2.4vw;
    font-weight: 400;
    grid-area: title;
    text-align: center;
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
    @media only screen and (max-width: 720px) {
      transform: translateX(0);
      height: 2.4vh;
      min-height: 0px;
    }
  }
  @media only screen and (max-width: 720px) {
    max-width: 720px;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
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
  background-color: rgba(1, 21, 137, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  padding: 8vh 0;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`

export const PostventaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(1, 21, 137, 0.85);
  p{
    color: #3f3f3f;
    font-size: 1vw;
    @media only screen and (max-width: 720px) {
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
    @media only screen and (max-width: 720px) {
      width: 80vw;
      h4 {
        font-size: 6vw;
      }
    }
  }
  a {
    background-color: rgba(1, 21, 137, 0.85);
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
    @media only screen and (max-width: 720px) {
      font-size: 3.4vw;
      padding: 1vh 3vw;
    }
  }
`
