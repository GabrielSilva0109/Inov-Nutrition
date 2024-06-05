import React from 'react'
import styled from 'styled-components'
import { Container, Left, Right, Title, Text, Img, Separator, Item, Flavors } from './Proteina'

import creatina300 from '../../Img/Produts/creatina300.png'

import wChoc from '../../Img/Produts/3wChoc.png'

const Aminoacido = () => {
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

        </Left>

        <Right>
          <Img srx={wChoc}/>
        </Right>
      </Container>
      <Separator />
      <Container>

        <Left>
          <Title>Creatina 100% Pure</Title>
          <Text>A Creatina 100% Pura Inov Nutrition é recomendada para o aumento da força,
             da potência e da massa muscular (hipertrofia). A creatina traz esses ganhos 
             para o treino quando aliada a uma boa dieta e um programa de exercícios adequado,
              por estar envolvida na produção de ATP, fonte de energia usada pelos músculos
               em exercícios predominantemente anaeróbicos (de alta intensidade e curta duração),
                como musculação, saltos, arremessos de peso e corridas.</Text>

        </Left>

        <Right>
          <Img srx={creatina300}/>
        </Right>
      </Container>
    </>
  )
}

export default Aminoacido
