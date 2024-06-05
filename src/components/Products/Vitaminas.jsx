import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import { Container, Left, Right, Title, Text, Img, Separator, Item, Flavors, Ingredientes, Ingrediente, IngredienteText, Circle } from './Proteina'

import omega from '../../Img/Produts/omega120.png'
import inovit from '../../Img/Produts/inovit.png'

const Fitoterapitico = () => {
  const ingredientes = [
    { name: 'EPA', amount: '540mg', percentage: 54 },
    { name: 'DHA', amount: '360mg', percentage: 36 },
  ]

  const ingredientesVit = [
    { name: 'Vitamina A', amount: '400mcg' },
    { name: 'Vitamina D', amount: '5mcg'},
    { name: 'Vitamina C', amount: '45mcg'},
    { name: 'Vitamina E', amount: '15mg' },
    { name: 'Vitamina B1', amount: '1.2mg' },
    { name: 'Vitamina B2', amount: '1.3mg' },
    { name: 'Vitamina B6', amount: '1.3mg'},
    { name: 'Vitamina K', amount: '65mcg' },
    { name: 'Vitamina B5', amount: '5mg' },
    { name: 'Niacina', amount: '16mg'},
    { name: 'Ácido Fólico', amount: '240mg'},
    { name: 'Biotina', amount: '30mcg' },
  ]

  return (
    <>
    <Container> 
        <Left>
          <Title>Omega 3</Title>
          <Text>O ômega 3 é um tipo de gordura boa que tem ação anti-inflamatória,
             podendo ser utilizado para controlar os níveis de colesterol e glicemia 
             ou prevenir doenças cardiovasculares e cerebrais, além de melhorar a memória e a disposição.</Text>
             <Flavors>
              <Item>240caps -</Item>
              <Item>120caps -</Item>
              <Item>60caps</Item>
             </Flavors>
        </Left>
        <Right>
          <Img src={omega}/>
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

      <Container> 
        <Left>
          <Title>Inovit</Title>
          <Text>Na nossa vida cada vez mais corrida, deixamos de consumir uma variedade de alimentos. 
            Principalmente frutas, legumes e verduras. E o que essa falta pode causar? Pode causar a ausência 
            de nutrientes para o nosso corpo exercer sua função normalmente! Podendo assim gerar uma carência 
            nutricional e assim ser refletida em uma desordem metabólica!
            E você sabia que esse cansaço e essa fadiga muscular, unhas e cabelos quebradiços.
            Pode ser a falta de um ou mais nutrientes e minerais.
            </Text>
             <Flavors>
              <Item>120caps</Item>
             </Flavors>
        </Left>
        <Right>
          <Img src={inovit}/>
        </Right>
      </Container>
      <Ingredientes>
        {ingredientesVit.map((ingrediente, index) => (
          <Ingrediente key={index}>
            <IngredienteText> -
              {ingrediente.name} {ingrediente.amount}
            </IngredienteText>
          </Ingrediente>
        ))}
      </Ingredientes>
      <Footer/>

    </>
  )
}

export default Fitoterapitico