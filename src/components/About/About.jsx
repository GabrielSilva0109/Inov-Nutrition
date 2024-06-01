import React from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import Footer from '../Footer/Footer'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Left = styled.div`
    width: 40%;
    background: red;
`

const Right = styled.div`
    width: 40%;
    background: blue;
`

const About = () => {
  return (
    <>
        <Header/>
        <Container>
            <Left>

            </Left>
            <Right>

            </Right>
        </Container>
        <Footer />
        
    </>
  )
}

export default About
