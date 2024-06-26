import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'

import wChoc from '../../Img/Produts/wheyCho.png'
import doseWhey from '../../Img/Produts/doseWhey.png'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 408px;

    @media(max-width: 768px){
      flex-direction: column;
      height: auto;
      
  }
`

export const Left = styled.div`
    width: 40%;
    

    @media(max-width: 768px){
        width: 80%;
    }
`

export const Right = styled.div`
    width: 40%;
    @media(max-width: 768px){
        width: 80%;
    }
`

export const Title = styled.h1`
    font-size: 2.5rem;
    background-image: linear-gradient(-225deg, rgb(255 255 255) 0%, #fffb7c 51%, #d1d51e 100%);
    -webkit-background-clip: text;
    color: transparent;
`

export const Text = styled.h3`
    font-size: 1.1rem;
    text-align: justify;
    color: #dbdbd;
    padding: 0px 40px;

    @media(max-width: 768px){
        padding: 0;
    }
`

export const Img = styled.img`
    width: 70%;
`

export const Flavors = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;

`

export const Item = styled.h3`
    font-size: 1.2rem;
    background-image: linear-gradient(-225deg, rgb(255 238 0) 0%, #fffb7c 51%, #d1d51e 100%);
    -webkit-background-clip: text;
    color: transparent;

    @media(max-width: 768px){
      font-size: 0.9rem;
    }
`

export const Separator = styled.div`
    border: 2px solid #e5e5e58c;
    width: 80%;
    border-radius: 20px;
    margin: 20px;

`

export const Ingredientes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 60%;
  flex-wrap: wrap;

`

export const Ingrediente = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Circle = styled.div`
  position: relative;
  font-weight: bold;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: conic-gradient(
    white ${props => props.percentage}%,
    transparent ${props => props.percentage}% 100%
  );

  &::before {
    content: '${props => props.percentage}%';
    position: absolute;
    color: black;
  }
`

export const IngredienteText = styled.span`
  margin-left: 10px;
  font-size: 1.1rem;
  color: white;
  font-weight: bold;
`

const Proteina = () => {
  const ingredientes = [
    { name: 'Proteína', amount: '22g', percentage: 73 },
    { name: 'Carboidratos', amount: '3.6g', percentage: 12 },
    { name: 'Glutamina', amount: '6.8g', percentage: 22 },
    { name: 'BCAA', amount: '5.4g', percentage: 18 },
  ]

  return (
    <>
    <Container>
      <Left>
        <Title>3Whey</Title>
        <Text>O 3Whey é uma mistura de três tipos de filtragens de Whey Protein 
          Whey Concentrado, Isolado, Hidrolisado. è uma proteína de qualidade,
          fornecendo 22g de Proteína, 6,8g de Glutamina e 5,4g de BCAA por porção.
        </Text>
        <Flavors>
          <Item>Chocolate -</Item>
          <Item>Baunilha -</Item>
          <Item>Morango -</Item>
          <Item>Paçoca</Item>
        </Flavors>
      </Left>
      <Right>
        <Img src={wChoc}/>
      </Right>
    </Container>
    <Ingredientes>
        {ingredientes.map((ingrediente, index) => (
          <Ingrediente key={index}>
            <Circle percentage={ingrediente.percentage}>{ingrediente.percentage}%</Circle>
            <IngredienteText>
              {ingrediente.name} {ingrediente.amount}
            </IngredienteText>
          </Ingrediente>
        ))}
      </Ingredientes>

    <Separator />
    <Container>
      

      <Left>
        <Title>3Whey</Title>
        <Text>O 3Whey é uma mistura de três tipos de filtragens de Whey Protein 
          Whey Concentrado, Isolado, Hidrolisado. è uma proteína de qualidade,
          fornecendo 22g de Proteína, 6,8g de Glutamina e 5,4g de BCAA por porção.
        </Text>
        <Flavors>
          <Item>Chocolate -</Item>
          <Item>Baunilha -</Item>
          <Item>Morango -</Item>
          <Item>Paçoca</Item>
        </Flavors>
      </Left>

      <Right>
        <Img src={doseWhey}/>
      </Right>
      
      
    </Container>
    <Footer />

    </>
  )
}

export default Proteina