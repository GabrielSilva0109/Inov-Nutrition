import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import { Container, Left, Right, Title, Text, Img, Separator, Item, Flavors, Ingredientes, Ingrediente, IngredienteText, Circle} from './Proteina'

import ripped120 from '../../Img/Produts/ripped120.png'

const Termogenico = () => {
  const ingredientes = [
    { name: 'Cafeína', amount: '420mg', percentage: 42 },
    { name: 'Chá Verde', amount: '200mg', percentage: 20 },
    { name: 'Psyllium', amount: '200mg', percentage: 20 },
    { name: 'Citrus Aurantion', amount: '5mg', percentage: 0.5 },
    { name: 'Chromium Picolinate', amount: '25mcg', percentage: 0.2 },
  ]

  return (
    <>
        <Container>
          <Left>
            <Title>Ripped Full</Title>
            <Text>
            Ripped Full é um termogênico que tem a formulação perfeita para quem deseja mais 
            pique para o dia a dia, eliminar a retenção de líquidos e auxiliar a queimar aquela 
            gordurinha indesejada. Para quem pratica atividade física, ele auxilia muito na definição.
            </Text>
            <Text>Nova fórmula: Agora com Picolinato de Cromo e Psillium!</Text>

            <Flavors>
              <Item>120caps -</Item>
              <Item>60caps</Item>
            </Flavors>
          </Left>
          <Right>
            <Img src={ripped120}/>
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

        <Footer />
    </>
  )
}

export default Termogenico
