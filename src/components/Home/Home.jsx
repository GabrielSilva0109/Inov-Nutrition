import React from 'react'
import styled from 'styled-components'
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


export const Container = styled.div`
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

export const LeftContainer = styled.div`
  width: 50%;
  float: left;

  @media(max-width: 768px){
    width: 90%;
  }
`

export const RightContainer = styled.div`
  width: 35%;
  float: right;
  @media(max-width: 768px){
    display: none;
  }
`

export const Title = styled.h1`
  background-image: linear-gradient(-225deg, rgb(255 255 255) 0%, #fffb7c 51%, #ffffff 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 5rem;
  font-weight: bold;
  font-family:  inherit;
  @media(max-width: 768px ){
    font-size: 4rem;
  }
`

export const SubTitle = styled.h3`
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

export const Img = styled.img`
  width: 80%;
  border-radius: 40%;
  margin:
`

export const ImgIcon = styled.img`
  width: 45px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: rotate(360deg); 
  }
`

export const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media(max-width: 768px ){
    gap: 0px;
  }
`

export const Icon = styled.div`
  padding: 12px;
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
            <Icon as="a" href="https://api.whatsapp.com/send/?phone=5547988027403" target="_blank" rel="noopener noreferrer">
              <ImgIcon src={whats} />
            </Icon>
            <Icon as="a" href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
              <ImgIcon src={telegram} />
            </Icon>
            <Icon as="a" href="https://www.instagram.com/inovnutrition/" target="_blank" rel="noopener noreferrer">
              <ImgIcon src={insta} />
            </Icon>
            <Icon as="a" href="https://www.facebook.com/InovNutrition" target="_blank" rel="noopener noreferrer">
              <ImgIcon src={meta} />
            </Icon>
            <Icon as="a" href="https://www.nossaformaoficial.com.br/linha-inov-nutrition-suplementos?p=1" target="_blank" rel="noopener noreferrer">
              <ImgIcon src={carrinho} />
            </Icon>
          </Btns>
          </LeftContainer>
        </Container>
        <Produts/>
    </>
  )
}

export default Home
