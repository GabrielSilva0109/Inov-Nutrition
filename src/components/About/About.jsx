import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import Footer from '../Footer/Footer'

import health from '../../Img/healthy.png'
import Topics from './Topics'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px){
        flex-direction: column;
    }
`

const Container2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media(max-width: 768px){
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
    width: 100%;
`

const Topicos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    margin-top: 20px;
    width: 70%;
    gap: 10px;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`

const Topico = styled.div`
    width: 35%;
    height: 250px;
    border: 2px solid white;
    border-radius: 20px;

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
        <Topics />
        <Footer />
    </>
  )
}

export default About
