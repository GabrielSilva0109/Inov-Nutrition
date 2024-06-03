import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import Footer from '../Footer/Footer'

import health from '../../Img/healthy.png'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px){
        flex-direction: column;
    }
`

const Left = styled.div`
    width: 40%;

    @media(max-width: 768px){
        width: 80%;
    }
`

const Right = styled.div`
    width: 40%;
 
    @media(max-width: 768px){
        width: 80%;
    }
`

const Title = styled.h1`
    font-size: 2rem;
`

const Text = styled.h3`
    font-size: 1.1rem;
    text-align: justify;
    color: gray;
    padding: 0px 40px;

    @media(max-width: 768px){
        padding: 0;
    }
`

const Img = styled.img`
    width: 100%;
`


const Topicos = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`

const Topico = styled.div`
    width: 250px;
    height: 250px;
    background-color: lightgray;

    @media(max-width: 768px){
        width: 80%;
    }
`


const About = () => {
  return (
    <>
        <Header/>
        <Container>
            
          
            <Left>
                <Title>
                    Transformando sua Performance e saude.
                </Title>
                <Text>Inov Suplementos é mais que uma marca é um compromisso com 
                    a sua excelência pessoal. Nossos produtos são cuidadosamente elaborados para impulsionar sua 
                    jornada de saúde e desempenho, refletindo nosso compromisso com a inovação e qualidade. 
                    Junte-se a nós e experimente a diferença de uma abordagem que valoriza sua saúde em primeiro lugar.</Text>
            

            </Left>
            <Right>
                <Img src={health}/>

            </Right>
        </Container>
          
        <Topicos>
            <Topico></Topico>
            <Topico></Topico>
            <Topico></Topico>
            
        </Topicos>
        <Topicos>
            <Topico></Topico>
            <Topico></Topico>
            <Topico></Topico>
        </Topicos>
        <Footer />
        
    </>
  )
}

export default About
