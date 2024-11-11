import styled from '@emotion/styled';
import React from 'react';

export default function RadioPill({ selectedOption, handleClick }) {

  return (
    <Container>
      <label class="option" for="option1">Hogar</label>
      <Option 
        id='option1' 
        name='options' 
        type='radio' 
        onClick={() => handleClick("hogar")}
      />

      <label class="option" for="option2">Comercial</label>
      <Option 
        id='option2' 
        name='options' 
        type='radio' 
        onClick={() => handleClick("comercial")}
      />
      <Background selectedOption={selectedOption} />
    </Container>
  )
}

const Container = styled.div`
  border: 2px solid transparent;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.85);
  position: relative;
  display: flex;
  align-items: center;
  height: 58px;
  width: 340px;
  overflow: hidden;
  input {
    display: none;
  }
  label {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.5s;
    font-weight: 500;
    font-size: 18px;
    color: white;
  }
`

const Background = styled.span`
  position: absolute;
  width: 50%;
  height: 47px;
  background-color: #2b3fac;
  top: 4px;
  border-radius: 30px;
  transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);
  left: ${props => props.selectedOption === "comercial" ? 'calc(48% + 3px)' : '4px'};
`

const Option = styled.input`
    color: white;
  &:checked {
    color: white;
    font-weight: bold;
  }
  &:not(:checked) {
    color: #7d7d7d;
  }
`