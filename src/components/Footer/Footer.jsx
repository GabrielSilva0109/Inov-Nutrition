import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: black;

`

const Dev = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 1s;

  &:hover{
    color: blue;
  }
`
const Footer = () => {
  return (
        <Container>
          <Text>©CopyRight Inovi Nutrition</Text>
          <span>|</span>
          <Dev>@Gabriel Silva</Dev>
        </Container>    
  )
}

export default Footer
