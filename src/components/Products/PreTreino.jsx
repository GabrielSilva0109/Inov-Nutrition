import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
`

const Left = styled.div`
    width: 50%;

    @media(max-width: 768px){
        width: 80%;
    }
`

const Right = styled.div`
    width: 50%;
    @media(max-width: 768px){
        width: 80%;
    }
`

const Title = styled.h1`
    font-size: 2.5rem;
    background-image: linear-gradient(-225deg, rgb(255 255 255) 0%, #fffb7c 51%, #d1d51e 100%);
    -webkit-background-clip: text;
    color: transparent;
`

const Text = styled.h3`
    font-size: 1.1rem;
    text-align: justify;
    color: #dbdbd;
    padding: 0px 40px;

    @media(max-width: 768px){
        padding: 0;
    }
`

const Img = styled.img`
    width: 400px;
`

const PreTreino = () => {
  return (
    <>
    <Container>
      <Left>
        <Title>Grenade</Title>
        <Text>Pré Treino</Text>
      </Left>
      <Right>
        <Img />
      </Right>
      
    </Container>
    <Container>
      <Right>
        <Img />
      </Right>      
    </Container>

    </>
  )
}

export default PreTreino