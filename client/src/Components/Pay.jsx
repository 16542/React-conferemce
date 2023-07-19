import React from 'react'
import styled from 'styled-components';
const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: blue;
  color: white;
  font-size: 20px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
const Wrapper=styled.div`
  display: flex;
  width: 700px;
  height: 300px;
  background-color: #ff69b4;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 12%;

`
const Input=styled.input`
  
width: 400px;
height: 30px;
border: none;

`

const Pay = () => {
  return (
    <Wrapper>
      <Input placeholder='Family name'></Input>
      <Input placeholder='Name'></Input>
      <Button>Buy a Ticket</Button>
    </Wrapper>
  )
}

export default Pay