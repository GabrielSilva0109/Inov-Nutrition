import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Produts from './Produts'
import Header from '../Header/Header'

import whats from '../../Img/Icons/whatsapp.png'
import insta from '../../Img/Icons/insta.png'
import telegram  from '../../Img/Icons/telegram.png'
import carrinho from '../../Img/Icons/carrinho.png'
import meta from '../../Img/Icons/meta.png'


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
  background-image: linear-gradient(-225deg, rgb(255 255 255) 0%, #fffb7c 51%, #ffffff 100%);
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

const ImgIcon = styled.img`
  width: 45px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: rotate(360deg); 
  }
`

const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const Icon = styled.div`
  padding: 16px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
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
            <Icon>
              <ImgIcon src={whats}/>
            </Icon>
            <Icon>
              <ImgIcon src={telegram}/>
            </Icon>
            <Icon>
              <ImgIcon src={insta}/>
            </Icon>
            <Icon>
              <ImgIcon src={meta}/>
            </Icon>
            <Icon>
              <ImgIcon src={carrinho}/>
            </Icon>
          </Btns>
        </LeftContainer>

        
        </Container>
        <Produts/>
    </>
  )
}

export default Home
