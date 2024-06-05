import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

const Text = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
`

const Company = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: yellow;
`

const Dev = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #ededed;
  cursor: pointer;
  transition: 1s;
  text-decoration: none;

  &:hover{
    color: white;
  }
`

const Footer = () => {
  return (
        <Container>
          <Text>©CopyRight</Text>
          <Company>Inovi Nutrition</Company>
          <Dev href='https://gabriel-silva-dev.vercel.app/' target='blank'>@Gabriel Silva</Dev>
        </Container> 
  )
}

export default Footer