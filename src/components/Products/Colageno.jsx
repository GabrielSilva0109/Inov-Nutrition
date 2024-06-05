import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import { Container, Left, Right, Title, Text, Img, Separator, Item, Flavors, Ingredientes, Ingrediente, IngredienteText, Circle } from './Proteina'

import colageno from '../../Img/Produts/colageno.png'

const Colageno = () => {

  const ingredientes = [
    { name: 'Colageno', amount: '7g', percentage: 70 },
    { name: 'Biotina', amount: '1.5g', percentage: 15 },
    { name: 'Maca Peruana', amount: '1g', percentage: 10},
    { name: 'Vitamina C', amount: '200mg', percentage: 2 },
    { name: 'Hyaluronic Acid', amount: '100mg', percentage: 1 },
    { name: 'Vitamina B', amount: '40mg', percentage: 0.4 },
  ]

  return (
    <>
      <Container> 
        <Left>
          <Title>Colágeno Premium Verisol Hidrolisado</Title>
          <Text>Colágeno Hidrolisado Verisol Plus promove aumento da elasticidade da pele,
             redução de rugas de expressão, diminuição da celulite, maior crescimento capilar, 
             fortalecimento das unhas e desacelera os efeitos do envelhecimento da pele.</Text>
             <Flavors>

              <Item>Guaraná com Açaí</Item>
             </Flavors>
        </Left>
        <Right>
          <Img src={colageno}/>
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
      
      <Separator/>
      <Footer/>
    </>
  )
}

export default Colageno
