import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const Text = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: black;
`

const Company = styled.p`
  font-size: 1rem;
  font-weight: bold;
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;

`

const Dev = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: 1s;

  &:hover{
    color: gray;
  }
`
const Footer = () => {
  return (
        <Container>
          <Text>©CopyRight</Text>
          <Company>Inovi Nutrition</Company>
          <span>|</span>
          <Dev>@Gabriel Silva</Dev>
        </Container>    
  )
}

export default Footer
