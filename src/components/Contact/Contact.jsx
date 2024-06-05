import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import { LeftContainer, Btns, Icon, ImgIcon } from '../Home/Home'


import whats from '../../Img/Icons/whatsapp.png'
import insta from '../../Img/Icons/insta.png'
import telegram  from '../../Img/Icons/telegram.png'
import carrinho from '../../Img/Icons/carrinho.png'
import meta from '../../Img/Icons/meta.png'
import Footer from '../Footer/Footer'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 517px;
  margin-bottom: 50px;
  margin: 0;
  padding: 0;

`

const Title = styled.h1`
    font-size: 3.5rem;
    background-image: linear-gradient(-225deg, rgb(255 255 255) 0%, #fffb7c 51%, #d1d51e 100%);
    -webkit-background-clip: text;
    color: transparent;
`

const Text = styled.h3`
    font-size: 1.4rem;
    text-align: justify;
    color: #dbdbd;
    padding: 0px 40px;

    @media(max-width: 768px){
        padding: 0;
    }
`

const Contact = () => {
  return (
    <>
        <Header/>
        <Container>
          <LeftContainer>
          <Title>Entre em Contato!</Title>
          <Text>Estamos aqui para ajudar. Se você tiver qualquer dúvida ou precisar de mais informações, não hesite em nos procurar. Nosso time está pronto para atender você!</Text>
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
        
        <Footer/>
    </>
  )
}

export default Contact
