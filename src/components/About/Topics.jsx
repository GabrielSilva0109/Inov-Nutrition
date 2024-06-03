import React from 'react'
import styled from 'styled-components'

import whey from '../../Img/Icons/whey.png'
import caps from '../../Img/Icons/caps.png'
import result from '../../Img/Icons/result.png'

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 1rem;
    color: white;
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
    width: 40px;
`

const Topicos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 70%;
    gap: 10px;
    flex-wrap: wrap;

    @media(max-width: 768px){
        width: 100%;
        gap: 5px;
    }
`

const Topico = styled.div`
    width: 30%;
    height: 250px;
    border: 2px solid white;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;

    box-shadow: inset 0px 0px 10px 0px rgba(255,255,255,0.75); /

    @media(max-width: 768px){
        width: 80%; 
    }
`


const Topics = () => {
  return (
    <>
    <Section>
            <Topicos>
                <Topico>
                    <Img src={caps}/>
                    <Title>Pureza e qualidade em cada cápsula</Title>
                    <Text></Text>
                </Topico>
                <Topico>
                    <Img src={result}/>
                    <Title>Inovação para resultados excepcionais</Title>
                    <Text></Text>
                </Topico>
                <Topico>
                    <Img src={whey}/>
                    <Title>Excelência com matéria-prima de ponta</Title>
                    <Text></Text>
                </Topico>
            </Topicos>
            <Topicos>
                <Topico></Topico>
                <Topico></Topico>
                <Topico></Topico>
            </Topicos>
              
    </Section>
    </>
  )
}

export default Topics
