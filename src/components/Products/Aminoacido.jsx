import React from 'react'
import styled from 'styled-components'
import { Container, Left, Right, Title, Text, Img, Separator, Item, Flavors, Ingredientes, Ingrediente, IngredienteText, Circle } from './Proteina'

import creatina300 from '../../Img/Produts/creatina300.png'
import Footer from '../Footer/Footer'

const Aminoacido = () => {
  const ingredientes = [
    { name: 'Creatina', amount: '3g', percentage: 100 },
    { name: 'Carboidratos', amount: '0g', percentage: 0 },
  ]
  return (
    <>
      <Container>

        <Left>
          <Title>Creatina 100% Pure</Title>
          <Text>A Creatina 100% Pura Inov Nutrition é recomendada para o aumento da força,
             da potência e da massa muscular (hipertrofia). A creatina traz esses ganhos 
             para o treino quando aliada a uma boa dieta e um programa de exercícios adequado,
              por estar envolvida na produção de ATP, fonte de energia usada pelos músculos
               em exercícios predominantemente anaeróbicos (de alta intensidade e curta duração),
                como musculação, saltos, arremessos de peso e corridas.</Text>
                <Flavors>
                  <Item>1Kg -</Item>
                  <Item>300g -</Item>
                  <Item>100g </Item>
                </Flavors>
        </Left>

        <Right>
          <Img src={creatina300}/>
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
      
      <Footer/>
    </>
  )
}

export default Aminoacido
