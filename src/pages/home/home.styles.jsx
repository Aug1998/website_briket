import styled from '@emotion/styled'

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
 width: 84%;
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
  padding: 14px 38px;
  background-color: #2b3fac;
  border-radius: 40px;
  font-weight: 400;
  font-size: 1.3rem;
  color: white;
  position: relative;
  text-align: center;
  margin-top: -4vh;
  margin-bottom: 8vh;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
    filter: brightness(1.3);
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
  gap: 6vh;
  background-color: #f4f5f9;
  @media only screen and (max-width: 720px) {
    padding: clamp(50px, 8vh, 200px) 10vw;
  }
  section {
    display: flex;
    gap: 40px;
  }
`

export const Producto = styled.a`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  border-radius: 8px;
  background-color: #d3d7d6;
  width: 320px;
  padding: 50px 40px;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  &:hover{
    transform: translateY(-4px);
    & > button {
      filter: brightness(1.3);
      transform: translateY(7px);
    }
  }
  h3 {
    text-transform: capitalize;
    color: rgba(0, 0, 0, 0.85);
    font-size: 1.4em;
    font-weight: 600;
    grid-area: title;
    text-align: center;
  }
  img {
    min-height: 140px;
    height: 20vh;
    grid-area: img;
    margin: 24px 0 40px;
  }
  button {
    border-radius: 40px;
    padding: 12px 12px;
    width: 100%;
    border: none;
    background-color: #27389b;
    color: white;
    font-size: 0.95em;
    transition: 0.3s;
    cursor: pointer;
   
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
