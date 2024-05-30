
import React from 'react'
import styled from 'styled-components'
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

const Boxes = styled.div`

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

const ToLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
`

const Home = () => {
  return (
    <>
        
        <Container>
        


        </Container>

    </>
  )
}

export default Home
