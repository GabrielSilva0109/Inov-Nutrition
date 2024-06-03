import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import Footer from '../Footer/Footer'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-top: 80px;
`

const Left = styled.div`
    width: 40%;
    background: red;
`

const Right = styled.div`
    width: 40%;
    background: blue;
`

const Title = styled.h1`
    font-size: 2rem;
`

const Text = styled.h3`
    font-size: 1.1rem;
    text-align: justify;
    color: gray;
    padding: 0px 40px;
`

const Topicos = styled.div`
    
`

const About = () => {
  return (
    <>
        <Header/>
        <Container>
            
            
            <Topicos>

            </Topicos>
            <Left>
            <Top>
                <Title>
                Transformando sua Saúde e Performance
                </Title>academia de musculação
                <Text>Inov Suplementos é mais que uma marca é um compromisso com 
                    a sua excelência pessoal. Nossos produtos são cuidadosamente elaborados para impulsionar sua 
                    jornada de saúde e desempenho, refletindo nosso compromisso com a inovação e qualidade. 
                    Junte-se a nós e experimente a diferença de uma abordagem que valoriza sua saúde em primeiro lugar.</Text>
            </Top>

            </Left>
            <Right>

            </Right>
        </Container>
        <Footer />
        
    </>
  )
}

export default About
