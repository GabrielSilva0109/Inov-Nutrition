import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import { Container, Left, Right, Title, Text, Img, Separator, Item, Flavors, Ingredientes, Ingrediente, IngredienteText, Circle } from './Proteina'

import grenade from '../../Img/Produts/grenade.png'

const PreTreino = () => {
  const ingredientes = [
    { name: 'Beta Alanina', amount: '2g', percentage: 20 },
    { name: 'Arginina', amount: '2g', percentage: 20 },
    { name: 'Creatina', amount: '2g', percentage: 20 },
    { name: 'L-Taurina', amount: '1g', percentage: 10 },
    { name: 'Cafeína', amount: '300mg', percentage: 1 },
    { name: 'L-Inositol', amount: '60mg', percentage: 0.5 },
    { name: 'Carboidratos', amount: '1,6g', percentage: 16 },
  ]
  return (
    <>
    <Container>
      <Left>
        <Title>Grenade</Title>
        <Text>Quem pratica atividade física não se cansa de buscar a melhora da 
          sua performance nos treinos e melhorar seus resultados. O Pré Treino Grenade
          contém na sua composição uma dose incrível de ingredientes que te ajudam a 
          aumentar sua energia e disposição.
          </Text>

          <Flavors>
            <Item>Laranja -</Item>
            <Item>Guaraná com Açaí -</Item>
            <Item>Limão </Item>
          </Flavors>
          
      </Left>
      <Right>
        <Img src={grenade}/>
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

export default PreTreino