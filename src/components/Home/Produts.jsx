import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin-bottom: 50px;
`

const Box = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  padding: 10px;
`

const TopBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`

const Text = styled.div`
  font-weight: bold;
  text-align: justify;
  color: #696969;
`

const Produts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Slider {...settings}>
        <Box>
          <TopBox>
            <Title>Title 1</Title>
          </TopBox>
          <SubTitle>
            Subtitle 1<br />
            <span><Link to="#">Link 1</Link></span>
          </SubTitle>
          <Text>Text 1</Text>
        </Box>
        {/* Adicione mais boxes aqui */}
      </Slider>
    </Container>
  );
}

export default Produts;
