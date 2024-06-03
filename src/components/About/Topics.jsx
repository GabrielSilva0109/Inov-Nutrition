import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-itens: center;
    justify-content: center;
    background: red;
    width: 80%;
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
    gap: 10px;
    margin-top: 10px;

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

const Topics = () => {
  return (
    <>
        <Container>
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
        </Container>        
    </>
  )
}

export default Topics
