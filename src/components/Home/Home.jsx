import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin-bottom: 50px;
  margin: 0;
  padding: 0;

  @media(max-width: 768px){
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  width: 50%;
  float: left;

  @media(max-width: 768px){
    width: 90%;
  }
`

const RightContainer = styled.div`
  width: 35%;
  float: right; 

  @media(max-width: 768px){
    display: none;
  }
`

const Title = styled.h1`
  background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 5rem;
  font-weight: bold;
  font-family: inherit;
`

const SubTitle = styled.h3`
  margin-top: -40px;
  font-size: 2rem;
  & span {
    transition: 1s;
  }

  & span:hover {
    background-image: linear-gradient(-225deg, rgb(10, 2, 247) 0%, #3584A7 51%, #30D2BE 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
  @media(max-width: 768px){
    margin-top: -35px;
  }
`

const Img = styled.img`
  width: 80%;
  border-radius: 40%;
  margin:
`

const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const BtnContato = styled.button`
  width: 150px;
  padding: 8px 16px;
  border-radius: 6px;
  background: black;
  border: none;
`

const BtnCV = styled.a`
  width: 150px;
  padding: 8px 16px;
  border-radius: 6px;
  background: #d7d7d7;
  border: none;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  text-decoration: none; 
  cursor: pointer; 
`

const ToLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
`

const Home = () => {
  return (
    <>
        <Header/>
        <Container>
        <LeftContainer>
          <Title>Inov Nutrition</Title>
          <SubTitle>Desenvolvendo o futuro da <span>Suplementação</span>, <span>Saude</span> e <span>Bem estar</span>.</SubTitle>
          <Btns>
            <BtnContato>
              <ToLink to="/contato">Contato</ToLink>
            </BtnContato>
            <BtnCV>
              Curriculo
            </BtnCV>
          </Btns>
        </LeftContainer>


        </Container>

    </>
  )
}

export default Home
